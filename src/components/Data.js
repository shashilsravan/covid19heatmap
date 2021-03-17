import React, {useEffect, useState} from 'react'
import {getData} from '../data/getData'
import './Data.css'
import WorldMap from './WorldMap'
import SidePanel from './SidePanel'

export default function Data() {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getData(setData, setLoading)
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
