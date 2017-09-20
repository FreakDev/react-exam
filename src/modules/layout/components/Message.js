import React from 'react'

const Message = ({ data, type }) => {
    return (
        <div className={ 'message ' + type || 'normal' } >
            { data }
        </div>
    )
}

export default Message