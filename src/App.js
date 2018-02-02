import React, { Component } from 'react';
import Project from "./components/project";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        My React App

        <Project />
      </div>
    );
  }
}

export default App;
