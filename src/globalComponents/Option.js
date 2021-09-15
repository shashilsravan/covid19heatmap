import React from 'react'

export default function Option({data}) {
    const {Slug, Country} = data
    return (
        <option value={Slug} style={{fontSize: 16}}>
            {Country}
        </option>
    )
}
