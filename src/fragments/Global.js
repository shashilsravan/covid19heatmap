import React from 'react'
import TableRow from '../minicomponents/TableRow'

export default function Global({global}) {
    return (
        <div className="text-global">
            {global && (
                <table className="dataTable dataTable2">
                    <tbody>
                        <TableRow title={"Total Confirmed: "} cases={global.TotalConfirmed} />
                        <TableRow title={"Total Active: "} cases={global.TotalRecovered} />
                        <TableRow title={"Total Deaths: "} cases={global.TotalDeaths} />
                        <TableRow title={"New Confirmed: "} cases={global.NewConfirmed} />
                        <TableRow title={"New Recovered: "} cases={global.NewRecovered} />
                        <TableRow title={"New Deaths: "} cases={global.NewDeaths} />
                    </tbody>
                </table>
            )}
        </div>
    )
}
