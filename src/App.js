import React, { Component } from 'react';
import './App.css';
import TwitterParent from './TwitterParent.js'
import SearchBox from'./SearchBox.js';

class App extends Component {
  render() {
    return (
      <div>
      <header id="top-nav">
        <div id="brand">Lil' Twitter API</div>
        <SearchBox />
      </header>
        <TwitterParent />
      </div>
    );
  }
}

export default App;
