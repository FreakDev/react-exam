import React, { PropTypes } from 'react'

const Jedi = ({ id, name }) => (
    <div>
        Jedi: id: {id} name: {name}
    </div>
)

Jedi.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
};

export default Jedi