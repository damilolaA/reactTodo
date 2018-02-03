import React, { Component } from 'react';
import uuid from "uuid";

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
          id: uuid.v4(),
          title: "Learn React",
          category: "FrontEnd Javascript"
        },
        {
          id:uuid.v4(),
          title: "Finish ScribbleNote App",
          category: "Web Development"
        }
    ]})
  }

  handleAddProject(project) {
    let projects = this.state.projects
    projects.push(project)

    this.setState(projects);
  }

  handleDeleteProject(id) {
    let projects = this.state.projects

    for(var i = 0; i < projects.length; i++) {
      let index = projects[i];

      if(index.id === id) {
        projects.splice(index, 1);
      }
    }

    this.setState(projects)
  }

  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)}/>

        <Project projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/>
      </div>
    );
  }
}

export default App;
