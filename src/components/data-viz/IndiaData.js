import React, {useState, useEffect} from 'react'
import Chart from "react-apexcharts";
import axios from 'axios'

export default function IndiaData() {
    const [data, setData] = useState([])
    const [selected, setSelected] = useState('Andhra_Pradesh')
    const [stateList, setStateList] = useState([])
    const [passingDates, setPassingDates] = useState([])
    const [firstState, setfirstState] = useState([])
    const [secondState, setsecondState] = useState([])
    const [selected2, setSelected2] = useState('Karnataka')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get('https://api.covid19api.com/live/country/india')
        .then((res) => res.data)
        .then((data) => {
            setData(data)
        })
    }, [])

    useEffect(() => {
        let temp1 = []
        let tempDates = []
        let tempFirst = []
        let tempSecond = []
        let firstRecent = 0
        let secondRecent = 0
        data.forEach(element => {
            if (!temp1.includes(element.Province)){
                temp1.push(element.Province)
            }
            if (element.Province == unstich(selected)){
                tempDates.push(element.Date.substring(0, 10))
                let temp2 = element.Confirmed - firstRecent
                firstRecent = element.Confirmed
                tempFirst.push(temp2)
            }
            else if (element.Province == unstich(selected2)){
                let temp3 = element.Confirmed - secondRecent
                secondRecent = element.Confirmed
                tempSecond.push(temp3)
            }
        });
        setStateList(temp1.sort());
        setPassingDates(tempDates.splice(tempDates.length-25, tempDates.length))
        setfirstState(tempFirst.splice(tempFirst.length-25, tempFirst.length))
        setsecondState(tempSecond.splice(tempSecond.length-25, tempSecond.length))
        setLoading(false)
    }, [data, selected, selected2])

    const stich = (each) => {
        return each.replaceAll(' ', '_')
    }

    const unstich = (each) => {
        return each.replaceAll('_', ' ')
    }

    const handleSelect = (e) => {
        setSelected(e.target.value)
    }

    const handleSelect2 = (e) => {
        setSelected2(e.target.value)
    }

    let options = {

        xaxis: {
          categories: passingDates,
        },
        colors: ['#797BFA', '#F74964'],
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
        },
        dataLabels: {
            enabled: false
          },
    }
    let series = [
        {
          name: unstich(selected),
          data: firstState
        },
        {
            name: unstich(selected2),
            data: secondState
        }
    ]

    return (
        <>
        {loading ? <i className="fas fa-virus"> </i>
        : (<div className='India-data'>
            <h3>State-wise data</h3>
            <div className='d-flex'>
                <div className='eachdiv'>
                    Select First State: 
                    <select name="state" id="state" value={selected} 
                        className='dropdown' onChange={handleSelect}>
                        {stateList.map(state => {
                                if (state != unstich(selected2)){
                                    return <option value={stich(state)} key={stich(state)}>{state}</option>
                                }
                            }
                        )}
                    </select>
                </div>
                <div className='eachdiv'>
                    Select Second State: 
                    <select name="state" id="state2" value={selected2} 
                        className='dropdown' onChange={handleSelect2}>
                        {stateList.map(state => {
                                if (state != unstich(selected)){
                                    return <option value={stich(state)} key={stich(state)}>{state}</option>
                                }
                            }
                        )}
                    </select>
                </div>
            </div>
            <div className="card">
                <div className='card-title'>
                    <h4>{`Daily new cases of ${unstich(selected)} vs ${unstich(selected2)} in last 25 days`}</h4>
                </div>
                <div className='card-body'>
                    <div className="mixed-chart">
                        <Chart options={options} series={series}
                            type="area" height="350" />
                    </div>
                </div>
            </div>
        </div>)}
        </>
    )
}
