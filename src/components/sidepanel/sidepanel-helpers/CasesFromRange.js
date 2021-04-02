import React from 'react'
import DateInput from '../../../globalComponents/DateInput'
import Button from '../../../globalComponents/Button'
import CntryDropdown from './CntryDropdown'

export default function CasesFromRange({handleChange, selectionCntry, country, 
startDate, endDate, handleClick}) {
    return (
        <div className="top-area">
            <CntryDropdown handleChange={handleChange} countryName={selectionCntry}
                country={country} />
            <div className="dates">
                <DateInput value={startDate} change={handleChange} name="startDate" />
                <DateInput value={endDate} change={handleChange} name="endDate" />
            </div>
            <Button text="Get Data" change={handleClick} nameOfClass="btn" />
        </div>
    )
}
