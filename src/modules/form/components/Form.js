import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import Message from '../../layout/components/Message'

export class FormCmp extends Component {

    constructor(props) {
        super(props)

        this.formData = {}

        this._onFieldChange = this._onFieldChange.bind(this)
        this._onSubmit = this._onSubmit.bind(this)
    }

    state = {
        error: '' 
    }

    _onFieldChange(e) {
        Object.assign(this.formData, {
            [e.name]: e.value
        })
    }

    _onSubmit(e) {
        e.preventDefault()

        const errorMessages = Object.keys(this.formData)
                                        .map((key) => {
                                            const val = this.formData[key]
                                            if (typeof val === 'object' && val.error && val.message)
                                                return val.message
                                            else 
                                                return null
                                        })
                                        .filter(v => v !== null)

        this.setState({
            error: errorMessages.join(', ')
        })

        if (!errorMessages.length)
            this.props.onSubmit && this.props.onSubmit(this.formData)
    }

    render() {
        const { children, title, loading } = this.props

        const error = this.props.error || this.state.error

        return (
            <form onSubmit={ this._onSubmit }>
                { title ? 
                    (<h2>{ title }</h2>) :
                    '' }
                { error ?
                    <Message data={ error } type="error"/> :
                    '' } 
                { React.Children.map( children, child => React.cloneElement(child, { onFieldChange: this._onFieldChange }) ) }
                    <input type="submit" />
                <div className={"loading-layer" + loading ? " visible" : ""}></div>
            </form>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return Object.assign({
        error: state.form.error,
        loading: state.form.loading,
    }, ownProps)
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

const Form = connect(mapStateToProps, mapDispatchToProps)(FormCmp)

Form.propTypes = {
    onSubmit: PropTypes.func,
    title: PropTypes.string
}

export default Form