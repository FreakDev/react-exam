import React, { Component } from 'react'
import { connect } from 'react-redux'

import Jedi from './Jedi'

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
            {list.map((jedi, index) => (
                <Jedi key={index} {...jedi}/>
            ))}
            </div>
        )
    }
}

const JediList = connect(mapStateToProps, mapDispatchToProps)(JediListCmp)

export default JediList