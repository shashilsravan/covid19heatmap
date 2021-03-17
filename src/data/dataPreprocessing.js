const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

let maximumValue = 0;
let d = {};
let info = '';
let eachCountry = '';
let countriesInfo = {};

const Dinf = (d) => {
    eachCountry = 'Country - ' + d.Country
    countriesInfo = {
        'Confirmed Cases': d.TotalConfirmed,
        'Active Cases': d.TotalConfirmed - d.TotalDeaths - d.TotalRecovered + `  (${(((d.TotalConfirmed - d.TotalDeaths - d.TotalRecovered) * 100)/d.TotalConfirmed).toFixed(1)}%)`,
        'Deceased': d.TotalDeaths + `  (${((d.TotalDeaths * 100)/d.TotalConfirmed).toFixed(1)}%)`,
        'Total Recovered': `${d.TotalRecovered} (${((d.TotalRecovered * 100)/d.TotalConfirmed).toFixed(1)}%)`,
        
    }
    info = Object.entries(countriesInfo).map(([key, value]) => {
        return (
            <tr key={key}>
                <td style={{fontWeight: "bold"}}>{key}</td>
                <td>{JSON.stringify(value)}</td>
            </tr>
        )
    })
    return (
        <div className="dinf">
            <h3>{eachCountry}</h3>
            <table className="table">
                <tbody>
                    {info}
                </tbody>
            </table>
        </div>
    )
}

const dataProcessing = (data, geo) => {
    let countries = data;
    for (const eachCountry in countries) {
        let countryData = countries[eachCountry].Countries;

        for (const prop in countryData) {
            let eachCountry = [countryData[prop]]
            let d_temp = eachCountry.find((s) => s['CountryCode'] === geo.properties.ISO_A2);
            if (d_temp !== undefined) {
                d = d_temp;
            }

            if (d['TotalConfirmed'] > maximumValue) {
                maximumValue = d['TotalConfirmed'];
            }
        }
    }
    return d;
}

export { geoUrl, dataProcessing, maximumValue, Dinf };