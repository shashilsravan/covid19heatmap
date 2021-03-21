import React, {useState, useEffect} from 'react'
import SidePanelBottom from './sidepanel/SidePanelBottom'
import './SidePanel.css'
import { getGlobalData, getCountriesData } from '../data/SidePanelData'
import Title from '../minicomponents/Title'
import Icon from '../minicomponents/Icon'
import SidePanelTopDisplay from './sidepanel/SidePanelTopDisplay'
import CasesFromRange from './sidepanel/CasesFromRange'

export default function SidePanel() {
    const [closedState, setClosedState] = useState(false)
    const [arena, setArena] = useState("global")
    const [country, setCountry] = useState([])
    const [global, setGlobal] = useState({})
    const [selection, setSelection] = useState({
        selectionCntry: "india", startDate: "", endDate: ""
    })
    const [alert, setAlert] = useState("")
    const [result, setResult] = useState(false)
    
    useEffect(() => {
        getGlobalData().then(data => setGlobal(data))
        getCountriesData().then(data => setCountry(data))
    }, [])

    function closePanel(){ setClosedState(true) }
    function openPanel(){ setClosedState(false) }

    function handleGlobal(){ setArena("global") }
    function handleCountry(){ setArena("country") }

    function handleChange(e){
        if (e.target.name == "startDate"){
            setSelection({
                selectionCntry: selection.selectionCntry,
                startDate: e.target.value, endDate: selection.endDate
            })
        }
        else if (e.target.name == "country"){
            setSelection({
                selectionCntry: e.target.value,
                startDate: selection.startDate, endDate: selection.endDate
            })
        }
        else{
            setSelection({
                selectionCntry: selection.selectionCntry,
                startDate: selection.startDate, endDate: e.target.value
            })
        }
        setResult(false)
    }

    function handleClick(){
        if (selection.startDate == "" || selection.endDate == ""){
            setAlert("Please select start and end dates!!!")
        }
        else{
            setAlert("")
            setResult(true)
        }
    }

    return (
        <>
            {closedState && (
                <Icon wrapperName="open-icon" change={openPanel} iconName="fas fa-caret-square-right" />
            )}
            <div className={closedState ? "sidebar hide" : "sidebar"}>
                <Icon wrapperName="close-icon" change={closePanel} iconName="fas fa-caret-square-left" />
                <div className="top-sidebar">
                    <Title text="Covid-19 Statistics" />
                    <SidePanelTopDisplay arena={arena} handleGlobal={handleGlobal}
                        handleCountry={handleCountry} global={global} country={country} />
                </div>

                <div className="bottom-sidebar">
                    <CasesFromRange handleChange={handleChange} selectionCntry={selection.selectionCntry}
                    country={country} startDate={selection.startDate} endDate={selection.endDate} handleClick={handleClick} />
                    <SidePanelBottom alert={alert} result={result} endDate={selection.endDate} 
                        country={selection.selectionCntry} startDate={selection.startDate} />
                </div>
            </div>
        </>
    )
}