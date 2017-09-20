import React from 'react';

import './App.css';

import Header from './modules/layout/components/Header'
import JediList from './modules/jedi/components/JediList'

export default () => (
  <div className="App">
    <Header />
    <JediList />
  </div>
)
