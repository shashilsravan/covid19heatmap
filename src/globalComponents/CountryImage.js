import React from 'react'

export default function CountryImage({CountryCode}) {
    return (
        <img className="imge" 
            src={`https://www.countryflags.io/${CountryCode.toLowerCase()}/flat/64.png`}>
        </img>
    )
}
