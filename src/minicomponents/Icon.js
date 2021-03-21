import React from 'react'

export default function Icon({change, iconName, wrapperName}) {
    return (    
        <div className={wrapperName}>
            <i onClick={change} className={iconName}></i>
        </div>
    )
}
