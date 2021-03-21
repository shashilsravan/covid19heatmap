import React from 'react'

export default function DateInput({change, value, name}) {
    let today = new Date(new Date().getTime() + 1 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
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
