import React, { Component } from "react";
import { hot } from 'react-hot-loader';
import { Home } from '../Home';
import { Board } from '../Board';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css"

class App extends Component {
  render () {
    return(
      <div className="App">
        <h1> Hello, World!</h1>
      </div>
    )
  }
}

export default hot(module)(App); // TODO: Look at what this syntax is doing
