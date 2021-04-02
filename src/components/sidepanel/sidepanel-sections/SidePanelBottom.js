import React from 'react'
import CasesSlider from '../sidepanel-slider/CasesSlider'
import Alert from '../../../globalComponents/Alert'

export default function SidePanelBottom({alert, result, country, startDate, endDate}) {
    return (
        <div>
            <div className="bottom-area">
                {alert && <Alert alert={alert} /> }
                {result && 
                <CasesSlider country={country}
                startDate={startDate} endDate={endDate} /> }
            </div>
        </div>
    )
}
