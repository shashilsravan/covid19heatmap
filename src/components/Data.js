import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './Data.css'
import WorldMap from './WorldMap'
import SidePanel from './SidePanel'

export default function Data() {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const getData = async () => {
        const tempRes = await axios('https://api.covid19api.com/summary', )
        const res = [tempRes.data]
        setData(res)
        setLoading(false)
    }

    useEffect(() => {
        getData()
    }, [])
    
    return (
        <div> 
            {   data && loading === false
                ? (<>
                        <WorldMap data={data} />
                        <SidePanel data={data} />
                    </>)
                : (<i className="fas fa-virus"></i>)}
        </div>
    )
}
