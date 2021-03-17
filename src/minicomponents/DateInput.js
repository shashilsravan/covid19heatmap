import React from 'react'

export default function DateInput({today, change, value, name}) {
    return (
        <div>
            <input type="date" name={name}
                min="2020-01-01" max={today}
                onChange={change}
                value={value} required>
            </input>
        </div>
    )
}
