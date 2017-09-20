import React, { Component, PropTypes } from 'react'
import uuid from 'uuid/v4'

import './css/Field.css'

class Field extends Component {

    constructor(props) {
        super(props)

        this._onChange = this._onChange.bind(this)
    }

    state = {
        value: '',
        isValid: true
    }

    static propTypes = {
        name: PropTypes.string.isRequired,
        type: PropTypes.oneOf(['text', 'name', 'id']),
        label: PropTypes.string
    }    

    _validate(value) {
        switch (this.props.type) {
            case 'name':
                return value.length !== 0
            case 'id':
                return (-(-value)) == value // enforce toNumber conversion without throwing error if NaN
            default:
                return true
        }
    }

    _onChange(e) {
        const value = e.target.value, isValid = this._validate(value)
        this.setState({
            value,
            isValid
        })

        if (isValid) {
            this.props.onChange({
                name: this.props.name,
                value
            })
        }
    }

    render() {
        const { name, type, label } = this.props
        const fieldId = uuid()
        return (
            <div className={ 'field' + (!this.state.isValid ? ' error' : '') }>
                { label && (<label htmlFor={ fieldId }>{ label }</label>) } : 
                <input id={ fieldId } 
                       name={ name } 
                       value={ this.state.value } 
                       type={ type || 'text' }
                       onChange={ this._onChange } />
            </div>
        )
    }    

}

export default Field