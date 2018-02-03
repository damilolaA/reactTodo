import React, { Component } from 'react';
import Project from "./components/project";
import AddProject from "./components/addProject";
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      projects: []
    }
  }

  componentWillMount() {
    this.setState({projects: [
      {
          title: "Learn React",
          category: "FrontEnd Javascript"
        },
        {
          title: "Finish ScribbleNote App",
          category: "Web Development"
        }
    ]})
  }

  render() {
    return (
      <div className="App">
        <AddProject />
        
        <Project projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
