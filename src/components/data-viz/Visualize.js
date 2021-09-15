import React, {useState, useEffect} from 'react'
import './Visualize.css'
import Chart from "react-apexcharts";
import axios from 'axios'
import IndiaData from './IndiaData';

export default function Visualize() {

    const [data, setData] = useState({})
    const [covidDates, setCovidDates] = useState([])
    const [covidCases, setCovidCases] = useState([])
    const [passingDates, setPassingDates] = useState([])
    const [passingCases, setPassingCases] = useState([])
    const [selected, setSelected] = useState('30')
    const [loading, setLoading] = useState(true)

    let date = new Date();
    let prevDate = new Date();
    prevDate.setMonth(prevDate.getMonth() - 1)
    let url = `https://api.covid19api.com/country/india/status/confirmed?from=${prevDate.getFullYear()}-${prevDate.getMonth()+1}-${prevDate.getDate()}T00:00:00Z&to=${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}T00:00:00Z`
    useEffect(() => {
        axios.get(url)
        .then(res => res.data)
        .then(data1 => {
            setData(data1)
            let tempDates = []
            let tempCases = []
            data1.forEach(element => {
                tempDates.push(element.Date.substring(0, 10));
                tempCases.push(element.Cases);
            });
            setCovidDates(tempDates)
            setPassingDates(tempDates)
            setCovidCases(tempCases)
            setPassingCases(tempCases)
            setLoading(false)
        })
    }, [])

    let options = {
        xaxis: {
          categories: passingDates
        },
        colors: ['#F74964'],
        chart: {
            dropShadow: {
                enabled: true,
                enabledOnSeries: undefined,
                top: 10,
                left: 0,
                blur: 5,
                color: '#000',
                opacity: 0.1
            }
        }
    }
    let series = [
        {
          name: "Confirmed cases",
          data: passingCases
        }
    ]

    const handleSelect = (e) => {
        setSelected(e.target.value)
        if (e.target.value == '30'){
            setPassingCases(covidCases)
            setPassingDates(covidDates)
        }
        else if (e.target.value == '20'){
            setPassingCases(covidCases.slice(covidCases.length-20, covidCases.length))
            setPassingDates(covidDates.slice(covidDates.length-20, covidDates.length))
        }
        else if (e.target.value == '15'){
            setPassingCases(covidCases.slice(covidCases.length-15, covidCases.length))
            setPassingDates(covidDates.slice(covidDates.length-15, covidDates.length))
        }
        else if (e.target.value == '7'){
            setPassingCases(covidCases.slice(covidCases.length-7, covidCases.length))
            setPassingDates(covidDates.slice(covidDates.length-7, covidDates.length))
        }
    }
    return (
        <>
        { loading
        ?  <i className='fas fa-virus'></i>
        : (<div>
            <div className='visualize-header'>
                <ul>
                    <li>
                        <a href='/' className='link title'>
                            <i className="fas fa-viruses"></i>
                            {"      "}
                            Covid19
                        </a>
                    </li>
                    <li>
                        <a href='/news' className='link'>
                            <i className="fas fa-newspaper"></i>
                            {"      "}
                            News
                        </a>
                    </li>
                    <li>
                        <a href='/visualize' className='link selected'>
                            <i className="fas fa-chart-bar"></i>
                            {"      "}
                            Visualize
                        </a>
                    </li>
                    <li>
                        <a href='/about' className='link'>
                            <i className="fas fa-user"></i>
                            {"      "}
                            About
                        </a>
                    </li>
                </ul>
            </div>
            <br />
            <div className='m-y5'></div>
            <div className='my-container'>
                <IndiaData />
                <div className='m-y5'></div>
                Select one: 
                <select name="days" id="days" className='dropdown'
                value={selected}
                onChange={handleSelect}>
                    <option value="30">30 days</option>
                    <option value="20">20 days</option>
                    <option value="15">15 days</option>
                    <option value="7">7 days</option>
                </select>
                
                <div className="card">
                    <div className='card-title'>
                        <h4>{`Confirmed cases in India over last ${selected} days`}</h4>
                    </div>
                    <div className='card-body'>
                        <div className="mixed-chart">
                            <Chart options={options} series={series}
                                type="line" height="350" />
                        </div>
                    </div>
                </div>
            </div>
        </div>)}
        </>
    )
}
