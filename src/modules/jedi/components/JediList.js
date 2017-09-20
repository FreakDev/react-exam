import React, { Component } from 'react'
import { connect } from 'react-redux'

import Jedi from './Jedi'
import Form from '../../form/components/Form'
import Field from '../../form/components/Field'
import List from '../../layout/components/List'

import { fetchJedi, addJedi } from '../action';

function mapStateToProps(state) {
  return {
    list: state.jedi.list,
    formLoad: state.jedi.formLoad,
    formError: state.jedi.formError
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onLoad: () => dispatch(fetchJedi()),
    onAdd: (formData) => dispatch(addJedi(formData))
  }
}

export class JediListCmp extends Component {
    componentDidMount() {
        this.props.onLoad();
    }

    render () {
        const { list, onAdd, formLoad, formError } = this.props
        return (
            <div className="App-jedi-list">
                <Form title="add a Jedi" 
                      onSubmit={ onAdd } 
                      loading={ formLoad }
                      error={ formError }>
                    <Field label="id" name="id" type="id" required/>
                    <Field label="name" name="name" required/>
                </Form>
                <List data={list} cmp={Jedi} />
            </div>
        )
    }
}

const JediList = connect(mapStateToProps, mapDispatchToProps)(JediListCmp)

export default JediList