import React from 'react'

export default function Icon({change, iconName, wrapperName}) {
    return (  
        <>  
        {wrapperName ? <div className={wrapperName}>
            <i onClick={change} className={iconName}></i>
        </div>
        : <i className={iconName}></i> }
        </>
    )
}
