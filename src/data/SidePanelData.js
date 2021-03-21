import axios from 'axios';

const getGlobalData = async () => {
    const tempRes = await axios('https://api.covid19api.com/summary', )
    const res = [tempRes.data][0].Global
    return res
}

const getCountriesData = async () => {
    const tempRes = await axios('https://api.covid19api.com/summary', )
    const res = [tempRes.data.Countries][0]
    return res
}

const getRangeCases = async (country, startDate, endDate) => {
    const tempRes = await axios(`https://api.covid19api.com/country/${country}?from=${startDate}T00:00:00Z&to=${endDate}T00:00:00Z`, );
    return [tempRes.data]
}

export { getGlobalData, getCountriesData, getRangeCases }

