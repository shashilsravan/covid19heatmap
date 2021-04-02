import React, { useEffect, useState } from 'react'
import './CasesSlider.css'
import { getRangeCases } from '../sidepanel-helpers/SidePanelData'
import EachSlide from './EachSlide';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function CasesSlider({country, startDate, endDate}) {
    const [confirmed, setConfirmed] = useState({
        current: 0, old: 0, new: 0
    })
    const [active, setActive] = useState({
        current: 0, old: 0, new: 0
    })
    const [deaths, setDeaths] = useState({
        current: 0, old: 0, new: 0
    })

    const getData = async () => {
        const res = await getRangeCases(country, startDate, endDate)
        const temp1 = res[0][res[0].length - 1]
        const temp2 = res[0][0]

        setConfirmed({
            current: temp1.Confirmed - temp2.Confirmed, 
            old: temp2.Confirmed, new: temp1.Confirmed
        })

        setActive({
            current: temp1.Active - temp2.Active,
            old: temp2.Active, new: temp1.Active
        })

        setDeaths({
            current: temp1.Deaths - temp2.Deaths,
            old: temp1.Deaths, new: temp2.Deaths
        })
    };

    const settings = {
        infinite: true, autoplay: true,
        autoplaySpeed: 4000, arrows: false, speed: 500,
        slidesToShow: 1.1, slidesToScroll: 1
    };

    useEffect(() => {
        getData()
    }, [])
    return (
        <div className="my-slider">
            <Slider {...settings}>
                <EachSlide styling="confirmed" title="Confirmed cases:"
                cases={confirmed.current} oldCases={confirmed.old} newCases={confirmed.new} />
                
                <EachSlide styling="active" title="Active cases:" 
                cases={active.current} oldCases={active.old} newCases={active.new} />
                
                <EachSlide styling="deaths" title="Deaths:" cases={deaths.current}
                oldCases={deaths.old} newCases={deaths.new} />
            </Slider>
        </div>
    )
}
