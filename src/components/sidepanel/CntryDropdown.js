import React from 'react'
import Option from '../../minicomponents/Option'

export default function CntryDropdown({handleChange, countryName, country}) {
    return (
        <select className="countrySelect" name="country" 
            onChange={handleChange} value={countryName} required>
                <option> Select a Country </option>
                {country && country.map(cntry => 
                    <Option key={cntry.ID} data={cntry} />
                )}
        </select>
    )
}
