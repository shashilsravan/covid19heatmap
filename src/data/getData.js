import axios from 'axios'
export const getData = async (setData, setLoading) => {
    const tempRes = await axios('https://api.covid19api.com/summary', )
    const res = [tempRes.data]
    setData(res)
    setLoading(false)
}