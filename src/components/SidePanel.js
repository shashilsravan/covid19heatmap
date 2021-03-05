import React, {useState, useEffect} from 'react'
import CasesSlider from './CasesSlider'
import './SidePanel.css'
import { getGlobalData, getCountriesData } from './SidePanelData'
import ReactTooltip from 'react-tooltip';


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

    function closePanel(){
        document.querySelector('.sidebar').classList.add('hide')
        setClosedState(true)
    }
    function openPanel(){
        document.querySelector('.sidebar').classList.remove('hide')
        setClosedState(false)
    }

    function handleGlobal(){
        setArena("global")
    }

    function handleCountry(){
        setArena("country")
    }

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

    function handleClick(e){
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
            <div className="sidebar">
                <div className="close-icon">
                    <i onClick={closePanel} className="fas fa-caret-square-left"></i>
                </div>
                <div className="top-sidebar">
                    <h4>Covid-19 Statistics</h4>
                    <div className="displayArea">
                        <div className="buttons">
                            <button
                            style={arena == 'global' ? {background: "black", color: "white"} : {background: "white", color: "black"}}
                            onClick={handleGlobal}>
                                Global
                            </button>
                            <button 
                            style={arena == 'country' ? {background: "black", color: "white"} : {background: "white", color: "black"}}
                            onClick={handleCountry}>Country</button>
                        </div>
                    
                        {arena == 'global' && <div className="text-global">
                            {global && (
                                <table className="dataTable dataTable2">
                                    <tbody>
                                    <tr>
                                        <td>
                                            Total Cases: 
                                        </td>
                                        <td className="count">
                                            {global.TotalConfirmed}
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            Total Recovered: 
                                        </td>
                                        <td className="count">
                                            {global.TotalRecovered}
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            Total Deaths: 
                                        </td>
                                        <td className="count">
                                            {global.TotalDeaths}
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            New Confirmed: 
                                        </td>
                                        <td className="count">
                                            {global.NewConfirmed}
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            New Recovered: 
                                        </td>
                                        <td className="count">
                                            {global.NewRecovered}
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td>
                                            New Deaths: 
                                        </td>
                                        <td className="count">
                                            {global.NewDeaths}
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            )}
                        </div>}

                        {arena == 'country' && <div className="text-country">
                            {country && (
                                <table className="dataTable">
                                    {country.map(cntry => 
                                        <tbody>
                                        <tr key={cntry.ID}>
                                            <td style={{display: "flex", alignItems: "center"}}>
                                                
                                                <img className="imge" src={`https://www.countryflags.io/${cntry.CountryCode.toLowerCase()}/flat/64.png`}></img>
                                                {cntry.Country.length < 12
                                                ? cntry.Country : `${cntry.Country.substring(0, 11)} ...`}
                                                
                                            </td>
                                            <td>
                                                {cntry.TotalConfirmed}
                                            </td>
                                        </tr>
                                        </tbody>)}
                                </table>
                            )

                            }
                        </div>}
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
                                    {cntry.Country}
                                </option>
                            )}
                        </select>
                        <div className="dates">
                            <input type="date" name="startDate"
                                min="2020-01-01" max={today}
                                onChange={changeStartDate}
                                value={startDate} required>
                            </input>
                            <input type="date" name="endDate"
                                min="2020-01-01" max={today}
                                onChange={changeEndDate}
                                value={endDate}>
                            </input>
                        </div>
                        <button className="btn" onClick={handleClick}>
                            Get Data
                        </button>

                    </div>
                    <div className="bottom-area">
                        {alert && 
                        <span className="alert">{alert}</span>
                        }
                        {result && 
                        <CasesSlider country={selectionCntry}
                        startDate={startDate} endDate={endDate} /> }
                    </div>
                </div>
            </div>
        </>
    )
}
