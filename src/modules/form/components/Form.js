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

    _onFieldChange(e) {
        Object.assign(this.formData, {
            [e.name]: e.value
        })
    }

    _onSubmit(e) {
        e.preventDefault()
        this.props.onSubmit && this.props.onSubmit(this.formData)
    }

    render() {
        const { children, title, loading, error, errorMessage } = this.props

        return (
            <form onSubmit={ this._onSubmit }>
                { title ? 
                    (<h2>{ title }</h2>) :
                    '' }
                { error ?
                    <Message msg={ error && errorMessage } type="error"/> :
                    '' } 
                { React.Children.map( children, child => React.cloneElement(child, { onChange: this._onFieldChange }) ) }
                    <input type="submit" />
                <div className={"loading-layer" + loading ? " visible" : ""}></div>
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        error: state.form.error,
        errorMessage: state.form.error && state.form.error.message,
        loading: state.form.loading,
    }
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