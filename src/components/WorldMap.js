import React, { useState } from "react";
import './WorldMap.css'
import { ComposableMap, Geographies, Geography, Sphere, Graticule, ZoomableGroup } from "react-simple-maps";
import ReactTooltip from 'react-tooltip';
import { scaleLinear } from "d3-scale";
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'


const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

let maximumValue = 0;
let d = {};
let info = '';
let eachCountry = '';
let countriesInfo = {};

const Dinf = (d) => {
    eachCountry = 'Country - ' + d.Country
    countriesInfo = {
        'Confirmed Cases': d.TotalConfirmed,
        'Active Cases': d.TotalConfirmed - d.TotalDeaths - d.TotalRecovered + `  (${(((d.TotalConfirmed - d.TotalDeaths - d.TotalRecovered) * 100)/d.TotalConfirmed).toFixed(1)}%)`,
        'Deceased': d.TotalDeaths + `  (${((d.TotalDeaths * 100)/d.TotalConfirmed).toFixed(1)}%)`,
        'Total Recovered': `${d.TotalRecovered} (${((d.TotalRecovered * 100)/d.TotalConfirmed).toFixed(1)}%)`,
        
    }
    info = Object.entries(countriesInfo).map(([key, value]) => {
        return (
            <tr key={key}>
                <td style={{fontWeight: "bold"}}>{key}</td>
                <td>{JSON.stringify(value)}</td>
            </tr>
        )
    })
    return (
        <div className="dinf">
            <h3>{eachCountry}</h3>
            <table className="table">
                <tbody>
                    {info}
                </tbody>
            </table>
        </div>
    )
}

const dataProcessing = (data, geo) => {
    let countries = data;
    for (const eachCountry in countries) {
        let countryData = countries[eachCountry].Countries;

        for (const prop in countryData) {
            let eachCountry = [countryData[prop]]
            let d_temp = eachCountry.find((s) => s['CountryCode'] === geo.properties.ISO_A2);
            if (d_temp !== undefined) {
                d = d_temp;
            }

            if (d['TotalConfirmed'] > maximumValue) {
                maximumValue = d['TotalConfirmed'];
            }
        }
    }
    return d;
}

const geographyStyle = {
    default: {
        outline: 'none'
    },
    hover: {
        transition: 'all 250ms',
        outline: 'none'
    },
    pressed: {
        outline: 'none'
    }
};

const colorScale = scaleLinear()
    .domain([0.0, 1.0])
    .range(["#FCAE60", "#D71317"]);


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
                    rotate: [-10, 0, 0],
                    scale: 147
                }}
                data-tip=''
            >

                <ZoomableGroup
                    zoom={position.zoom}
                    center={position.coordinates}
                >
                    <Graticule stroke="#ccc" clipPath="url(#rsm-sphere)" />
                    <Sphere stroke="#3f434c" strokeWidth={0.5} />

                    <Geographies className="map" geography={geoUrl}>
                        {({ geographies }) =>
                            geographies.map((geo) => {
                                let d = dataProcessing(data, geo)

                                return (
                                    <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
                                        fill={d ? colorScale(d['TotalConfirmed'] / maximumValue) : "#222"}
                                        style={geographyStyle}
                                        onMouseEnter={() => {
                                            setContent(Dinf(d))
                                        }}
                                        onMouseLeave={() => {
                                            setContent('');
                                        }}
                                    />
                                );
                            })
                        }
                    </Geographies>
                </ZoomableGroup>
            </ComposableMap>

            <ReactTooltip type="light">{content}</ReactTooltip>
            <div className="sliderr">
                <Slider
                    value={volume}
                    tooltip={true}
                    orientation="horizontal"
                    onChange={handleOnChange}
                    />
            </div>
        </div>
    )
}
