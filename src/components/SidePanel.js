import React, {useState, useEffect} from 'react'
import Arena from '../fragments/Arena'
import Global from '../fragments/Global'
import SidePanelBottom from '../fragments/SidePanelBottom'
import DateInput from '../minicomponents/DateInput'
import './SidePanel.css'
import { getGlobalData, getCountriesData } from './SidePanelData'

export default function SidePanel() {
    const [closedState, setClosedState] = useState(false)
    const [arena, setArena] = useState("global")
    const [country, setCountry] = useState([])
    const [global, setGlobal] = useState({})
    const [selectionCntry, setSelectionCntry] = useState("india")
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [alert, setAlert] = useState("")
    const [result, setResult] = useState(false)
    let today = new Date(new Date().getTime() + 1 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

    useEffect(() => {
        getGlobalData().then(data => setGlobal(data))
        getCountriesData().then(data => setCountry(data))
    }, [])

    function closePanel(){ setClosedState(true) }
    function openPanel(){ setClosedState(false) }

    function handleGlobal(){ setArena("global") }
    function handleCountry(){ setArena("country") }

    function countryHandler(e){
        setSelectionCntry(e.target.value)
        setResult(false)
    }
    function changeStartDate(e){
        setStartDate(e.target.value)
        setResult(false)
    }

    function changeEndDate(e){
        setEndDate(e.target.value)
        setResult(false)
    }
    function handleClick(){
        if (startDate == "" || endDate == ""){
            setAlert("Please select start and end dates!!!")
        }
        else{
            setAlert("")
            setResult(true)
        }
    }

    return (
        <>
            {closedState && (<div className="open-icon">
                <i onClick={openPanel} className="fas fa-caret-square-right"></i>
            </div>)}
            <div className={closedState ? "sidebar hide" : "sidebar"}>
                <div className="close-icon">
                    <i onClick={closePanel} className="fas fa-caret-square-left"></i>
                </div>
                <div className="top-sidebar">
                    <h4>Covid-19 Statistics</h4>
                    <div className="displayArea">
                        <div className="buttons">
                            <button
                            style={arena == 'global' ? {background: "black", color: "white"} : {background: "white", color: "black"}}
                            onClick={handleGlobal}> Global </button>
                            <button 
                            style={arena == 'country' ? {background: "black", color: "white"} : {background: "white", color: "black"}}
                            onClick={handleCountry}>Country</button>
                        </div>
                        {arena == 'global' && <Global global={global} />}
                        {arena == 'country' && <Arena country={country} />}
                    </div>
                </div>
                <div className="bottom-sidebar">
                    <div className="top-area">
                        <select className="countrySelect" name="country" 
                        onChange={countryHandler}
                        value={selectionCntry} required>
                            <option> Select a Country </option>
                            {country && country.map(cntry => 
                                <option key={cntry.ID} value={cntry.Slug}>
                                    {cntry.Country} </option>
                            )}
                        </select>
                        <div className="dates">
                            <DateInput today={today} startDate={startDate} value={startDate}
                                change={changeStartDate} name="startDate" />
                            <DateInput today={today} startDate={startDate} value={endDate}
                                change={changeEndDate} name="endDate" />
                        </div>
                        <button className="btn" onClick={handleClick}>
                            Get Data
                        </button>
                    </div>
                    <SidePanelBottom alert={alert} result={result} endDate={endDate} 
                    country={selectionCntry} startDate={startDate} />
                </div>
            </div>
        </>
    )
}