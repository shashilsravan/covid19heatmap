import React, { useEffect, useState } from 'react'
import { useEmblaCarousel } from 'embla-carousel/react'
import axios from 'axios';
import './CasesSlider.css'


export default function CasesSlider({country, startDate, endDate}) {

    const url = `https://api.covid19api.com/country/${country}?from=${startDate}T00:00:00Z&to=${endDate}T00:00:00Z`
    
    const [data, setData] = useState({})
    const [confirmed, setConfirmed] = useState(0)
    const [oldConfirmed, setOldConfirmed] = useState(0)
    const [newConfirmed, setNewConfirmed] = useState(0)

    const [active, setActive] = useState(0)
    const [oldActive, setOldActive] = useState(0)
    const [newActive, setNewActive] = useState(0)

    const [deaths, setDeaths] = useState(0)
    const [oldDeath, setOldDeath] = useState(0)
    const [newDeaths, setNewDeaths] = useState(0)

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })

    const viewportCss = {
        overflow: 'hidden',
    }
    const containerCss = {
        display: 'flex',
    }
    const slideCss = {
        position: 'relative',
        minWidth: '100%',
    }

    const getData = async () => {
        const tempRes = await axios(url, );
        const res = [tempRes.data]
        setData(res);

        setConfirmed(res[0][res[0].length - 1].Confirmed - res[0][0].Confirmed)
        setOldConfirmed(res[0][0].Confirmed)
        setNewConfirmed(res[0][res[0].length - 1].Confirmed)

        setActive(res[0][res[0].length - 1].Active - res[0][0].Active)
        setOldActive(res[0][0].Active)
        setNewActive(res[0][res[0].length - 1].Active)

        setDeaths(res[0][res[0].length - 1].Deaths - res[0][0].Deaths)
        setOldDeath(res[0][0].Deaths)
        setNewDeaths(res[0][res[0].length - 1].Deaths)
    };


    useEffect(() => {
        getData()
        if (emblaApi) {}
    }, [emblaApi])
    return (
        <div className="my-slider" style={viewportCss} ref={emblaRef}>
            <div style={containerCss}>
                <div style={slideCss} className="confirmed">
                    <h4>Confirmed cases:</h4>
                    <p>{confirmed} 
                        {confirmed > 0 ? (<i className="fas fa-level-up-alt"></i>)
                        : (<i className="fas fa-level-down-alt"></i>) }
                    </p>
                    {`${oldConfirmed} - ${newConfirmed}`}
                </div>
                <div style={slideCss} className="active">
                    <h4>Active cases:</h4>
                    <p>{active}
                        {active > 0 ? (<i className="fas fa-level-up-alt"></i>)
                        : (<i className="fas fa-level-down-alt"></i>) }
                    </p>
                    {`${oldActive} - ${newActive}`}
                </div>
                <div style={slideCss} className="deaths">
                    <h4>Deaths:</h4>
                    <p>{deaths}
                        {deaths > 0 ? (<i className="fas fa-level-up-alt"></i>)
                        : (<i className="fas fa-level-down-alt"></i>) }
                    </p>
                    {`${oldDeath} - ${newDeaths}`}
                </div>
            </div>
        </div>
    )
}
