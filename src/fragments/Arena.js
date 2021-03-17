import React from 'react'

export default function Arena({country}) {
    return (
        <div className="text-country">
            {country && (
                <table className="dataTable">
                    <tbody>
                    {country.map(cntry => 
                        <tr key={cntry.ID}>
                            <td style={{display: "flex", alignItems: "center"}}>
                                <img className="imge" src={`https://www.countryflags.io/${cntry.CountryCode.toLowerCase()}/flat/64.png`}></img>
                                {cntry.Country.length < 12
                                ? cntry.Country : `${cntry.Country.substring(0, 11)} ...`}
                                
                            </td>
                            <td>
                                {cntry.TotalConfirmed}
                            </td>
                        </tr>)}
                        </tbody>
                </table>
            )}
        </div>
    )
}
