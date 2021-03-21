import React from 'react'
import CasesSlider from '../../fragments/CasesSlider'
import Alert from '../../minicomponents/Alert'

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