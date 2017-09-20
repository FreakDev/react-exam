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

    componentDidMount() {
        if (this.props.required) {
            this.props.onFieldChange({
                name: this.props.name,
                value: { error: true, message : `${this.props.name} is invalid` }
            })    
        }
    }

    _validate(value) {
        let isValid;

        const validateNotEmpty = (val) => {
            return val.length !== 0
        }
        const validateNumbers = (val) => {
            return !isNaN(parseFloat(val))
        }

        switch (this.props.type) {
            case 'id':
                isValid = validateNumbers(value)
                break;
            default:
                isValid = true
        }

        if (this.props.required) {
            isValid = isValid && validateNotEmpty(value)
        }

        if (this.props.onValid) {
            isValid = isValid && this.props.onValid(value)
        }

        return isValid
    }

    _onChange(e) {
        const value = e.target.value, isValid = this._validate(value)
        this.setState({
            value,
            isValid
        })

        this.props.onFieldChange({
            name: this.props.name,
            value: isValid ? value : { error: true, message : `${this.props.name} is invalid` }
        })
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
                       onChange={ this._onChange }
                       onBlur={ this._onChange } />
            </div>
        )
    }    

}

export default Field