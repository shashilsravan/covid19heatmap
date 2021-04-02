import React from 'react'
import SidePanelArenaDisplay from '../sidepanel-helpers/SidePanelArenaDisplay'

export default function Arena({country}) {
    return (
        <div className="text-country">
            {country && (
                <table className="dataTable">
                    <tbody>
                    {country.map(cntry => 
                        <SidePanelArenaDisplay key={cntry.ID} data={cntry} />
                    )}
                    </tbody>
                </table>
            )}
        </div>
    )
}
