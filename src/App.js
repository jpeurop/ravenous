import React, { Component } from 'react';
import './App.css';
import BusinessList from './components/BusinessList/BusinessList.js'
import SearchBar from './components/SearchBar/SearchBar.js'

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar />
        <BusinessList /> 
      </div>
    );
  }
}

export default App;
