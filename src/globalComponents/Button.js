import React from 'react'

export default function Button({text, nameOfClass, change, styling}) {
    return (
        <button 
        style={styling ? styling : {opacity: 1}}
        className={nameOfClass} onClick={change}>
            {text}
        </button>
    )
}
