import axios from 'axios'
import React from 'react'
import TableRow from '../../../globalComponents/TableRow'

export default function Global({global}) {
    const { TotalConfirmed, TotalRecovered, TotalDeaths, 
    NewConfirmed, NewRecovered, NewDeaths } = global
    const getData = async () => {
        const tempRes = await axios('https://api.covid19api.com/summary', )
    }
    getData()
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
            <a href='/news' className='btn btn-ternary'
                style={{margin: '0 14px'}}> 
                News </a>
            <a href='/visualize' className='btn btn-secondary'> Visualize </a>
        </div>
    )
}
