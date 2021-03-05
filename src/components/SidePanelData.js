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

export { getGlobalData, getCountriesData }

