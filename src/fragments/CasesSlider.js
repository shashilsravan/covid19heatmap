import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './CasesSlider.css'
import EachSlide from './EachSlide';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function CasesSlider({country, startDate, endDate}) {
    const [confirmed, setConfirmed] = useState(0)
    const [oldConfirmed, setOldConfirmed] = useState(0)
    const [newConfirmed, setNewConfirmed] = useState(0)

    const [active, setActive] = useState(0)
    const [oldActive, setOldActive] = useState(0)
    const [newActive, setNewActive] = useState(0)

    const [deaths, setDeaths] = useState(0)
    const [oldDeath, setOldDeath] = useState(0)
    const [newDeaths, setNewDeaths] = useState(0)

    const getData = async () => {
        const tempRes = await axios(`https://api.covid19api.com/country/${country}?from=${startDate}T00:00:00Z&to=${endDate}T00:00:00Z`, );
        const res = [tempRes.data]

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

    const settings = {
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        speed: 500,
        slidesToShow: 1.1,
        slidesToScroll: 1
    };

    useEffect(() => {
        getData()
    }, [])
    return (
        <div className="my-slider">
            <Slider {...settings}>
                <EachSlide styling="confirmed" title="Confirmed cases:"
                cases={confirmed} oldCases={oldConfirmed} newCases={newConfirmed} />
                
                <EachSlide styling="active" title="Active cases:" 
                cases={active} oldCases={oldActive} newCases={newActive} />
                
                <EachSlide styling="deaths" title="Deaths:" cases={deaths}
                oldCases={oldDeath} newCases={newDeaths} />
            </Slider>
        </div>
    )
}
