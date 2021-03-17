import React from 'react'

export default function TableRow({cases, title}) {
    return (
        <tr>
            <td>
                {title}
            </td>
            <td className="count">
                {cases}
            </td>
        </tr>
    )
}
