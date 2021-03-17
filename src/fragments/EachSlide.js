import React from 'react'

export default function EachSlide({styling, title, oldCases, cases, newCases}) {

    const slideCss = {
        position: 'relative',
        minWidth: '100%',
    }

    return (
        <div style={slideCss} className={styling}>
            <h4>{title}</h4>
            <p>{cases} 
                {cases > 0 ? (<i className="fas fa-level-up-alt"></i>)
                : (<i className="fas fa-level-down-alt"></i>) }
            </p>
            {`${oldCases} - ${newCases}`}
        </div>
    )
}
