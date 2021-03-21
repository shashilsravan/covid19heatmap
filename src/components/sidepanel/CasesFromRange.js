import React from 'react'
import DateInput from '../../minicomponents/DateInput'
import Button from '../../minicomponents/Button'
import CntryDropdown from './CntryDropdown'

export default function CasesFromRange({handleChange, selectionCntry, country, 
startDate, endDate, handleClick}) {
    return (
        <div className="top-area">
            <CntryDropdown handleChange={handleChange} countryName={selectionCntry}
                country={country} />
            <div className="dates">
                <DateInput startDate={startDate} value={startDate}
                    change={handleChange} name="startDate" />
                <DateInput startDate={startDate} value={endDate}
                    change={handleChange} name="endDate" />
            </div>
            <Button text="Get Data" change={handleClick} nameOfClass="btn" />
        </div>
    )
}
