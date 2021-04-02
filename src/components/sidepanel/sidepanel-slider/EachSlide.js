import React from 'react'
import Icon from '../../../globalComponents/Icon'
import Title from '../../../globalComponents/Title'

export default function EachSlide({styling, title, oldCases, cases, newCases}) {

    const slideCss = {
        position: 'relative',
        minWidth: '100%',
    }

    return (
        <div style={slideCss} className={styling}>
            <Title text={title} />
            <p>{cases} 
                {cases > 0 ? (<Icon iconName="fas fa-level-up-alt" />)
                : (<Icon iconName="fas fa-level-down-alt" />) }
            </p>
            {`${oldCases} - ${newCases}`}
        </div>
    )
}
