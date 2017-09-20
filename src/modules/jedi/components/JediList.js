import React, { Component } from 'react'
import { connect } from 'react-redux'

import Jedi from './Jedi'
import Form from '../../form/components/Form'
import Field from '../../form/components/Field'
import List from '../../layout/components/List'

import { fetchJedi } from '../action';

function mapStateToProps(state) {
  return {
    list: state.jedi.list,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onLoad: () => dispatch(fetchJedi())
  }
}

export class JediListCmp extends Component {
    componentDidMount() {
        this.props.onLoad();
    }

    render () {
        const { list } = this.props
        return (
            <div className="App-jedi-list">
                <Form>
                    <Field />
                </Form>
                <List data={list} cmp={Jedi} />
            </div>
        )
    }
}

const JediList = connect(mapStateToProps, mapDispatchToProps)(JediListCmp)

export default JediList