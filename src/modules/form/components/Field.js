import React, { PropTypes } from 'react'
import uuid from 'uuid/v4'

const Field = ({ name, type, label }) => {
    const fieldId = uuid()
    return (
        <div>
            { label && (<label for={ fieldId }>{ label }</label>) }
            <input id={ fieldId } name={ name } type={ type || 'text' } />
        </div>
    )
}

Field.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    label: PropTypes.string
}

export default Field