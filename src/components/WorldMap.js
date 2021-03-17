import React, { useState } from "react";
import './WorldMap.css'
import { ComposableMap, Geographies, Geography, Sphere, Graticule, ZoomableGroup } from "react-simple-maps";
import ReactTooltip from 'react-tooltip';
import { scaleLinear } from "d3-scale";
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css';
import { geoUrl, dataProcessing, maximumValue, Dinf } from '../data/dataPreprocessing';

const geographyStyle = {
    default: {
        outline: 'none'
    }, hover: {
        transition: 'all 250ms', outline: 'none'
    }, pressed: {
        outline: 'none'
    }
};

const colorScale = scaleLinear().domain([0.0, 1.0]).range(["#FCAE60", "#D71317"]);

export default function WorldMap({ data }) {
    const [volume, setVolume] = useState(50)
    const [position, setPosition] = useState({ coordinates: [10, -1], zoom: 1.5 });
    const [content, setContent] = useState('');

    function handleOnChange(e) {
        setVolume(e)
        setPosition(pos => ({ ...pos, zoom: e/30 }));
    }

    return (
        <div className="WorldMap">
            <ComposableMap className="mainContainer"
                projectionConfig={{
                    rotate: [-10, 0, 0], scale: 147
                }} data-tip=''>
                <ZoomableGroup
                    zoom={position.zoom} center={position.coordinates} >
                    <Graticule stroke="#ccc" clipPath="url(#rsm-sphere)" />
                    <Sphere stroke="#3f434c" strokeWidth={0.5} />
                    <Geographies className="map" geography={geoUrl}>
                        {({ geographies }) =>
                            geographies.map((geo) => {
                                let d = dataProcessing(data, geo)
                                return (
                                    <Geography key={geo.rsmKey} geography={geo}
                                        fill={d ? colorScale(d['TotalConfirmed'] / maximumValue) : "#222"}
                                        style={geographyStyle}
                                        onMouseEnter={() => {
                                            setContent(Dinf(d))
                                        }}
                                        onMouseLeave={() => {
                                            setContent('');
                                        }} />
                                );
                            })
                        }
                    </Geographies>
                </ZoomableGroup>
            </ComposableMap>
            <ReactTooltip type="light">{content}</ReactTooltip>
            <div className="sliderr">
                <Slider value={volume} onChange={handleOnChange}
                    tooltip={true}  orientation="horizontal" />
            </div>
        </div>
    )
}