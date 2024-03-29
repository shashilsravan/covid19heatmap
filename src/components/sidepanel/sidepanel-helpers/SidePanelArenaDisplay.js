import React from 'react'
import CountryImage from '../../../globalComponents/CountryImage'

export default function SidePanelArenaDisplay({data}) {
    const tableStyling = {
        display: "flex", alignItems: "center"
    }
    const {Country, CountryCode, TotalConfirmed} = data
    return (
        <tr key={data.ID}>
            <td style={tableStyling}>
                <CountryImage CountryCode={CountryCode} />
                {Country.length < 12 ? Country : `${Country.substring(0, 10)} ...`}
            </td>
            <td>
                {TotalConfirmed}
            </td>
        </tr>
    )
}
