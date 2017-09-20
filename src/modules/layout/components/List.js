import React from 'react'

const List = ({ data, cmp }) => {
    return (
        <ul>
            {data.map((jedi, index) => (
                <li key={ index }>
                    { cmp ? React.createElement(cmp, jedi, null) : jedi }
                </li>
            ))} 
        </ul>   
    )
}

export default List