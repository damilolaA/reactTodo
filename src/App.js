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

  handleAddProject(project) {
    let projects = this.state.projects
    projects.push(project)

    this.setState(projects);
  }

  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)}/>

        <Project projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
