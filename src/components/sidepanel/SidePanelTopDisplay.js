import React from 'react'
import Arena from '../../fragments/Arena'
import Global from '../../fragments/Global'
import Button from '../../minicomponents/Button'

export default function SidePanelTopDisplay({arena, handleGlobal, handleCountry, global, country}) {
    return (
        <div className="displayArea">
            <div className="buttons">
                <Button styling={arena == 'global' ? {background: "black", color: "white"} : {background: "white", color: "black"}}
                    change={handleGlobal} text="Global" />
                <Button styling={arena == 'country' ? {background: "black", color: "white"} : {background: "white", color: "black"}}
                    change={handleCountry} text="Country" />
            </div>
            {arena == 'global' && <Global global={global} />}
            {arena == 'country' && <Arena country={country} />}
        </div>
    )
}
