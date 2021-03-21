import React from 'react'
import TableRow from '../minicomponents/TableRow'

export default function Global({global}) {
    const { TotalConfirmed, TotalRecovered, TotalDeaths, 
    NewConfirmed, NewRecovered, NewDeaths } = global
    return (
        <div className="text-global">
            {global && (
                <table className="dataTable dataTable2">
                    <tbody>
                        <TableRow title={"Total Confirmed: "} cases={TotalConfirmed} />
                        <TableRow title={"Total Recovered: "} cases={TotalRecovered} />
                        <TableRow title={"Total Deaths: "} cases={TotalDeaths} />
                        <TableRow title={"New Confirmed: "} cases={NewConfirmed} />
                        <TableRow title={"New Recovered: "} cases={NewRecovered} />
                        <TableRow title={"New Deaths: "} cases={NewDeaths} />
                    </tbody>
                </table>
            )}
        </div>
    )
}
