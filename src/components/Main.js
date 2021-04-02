import React, {useEffect, useState} from 'react'
import {getData} from '../data/getData'
import './Data.css'
import WorldMap from './worldmap/WorldMap'
import SidePanel from './sidepanel/SidePanel'
import Icon from '../globalComponents/Icon'

export default function Main() {

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
                : (<Icon iconName="fas fa-virus" />)}
        </div>
    )
}
