import React, { Component } from 'react';
import uuid from "uuid";
import request from "request";
import rp from "request-promise";

import Project from "./components/project";
import AddProject from "./components/addProject";
import Todos from "./components/todos";
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      projects: [],
      todos: []
    }
  }

  getTodos() {
    let self = this;
    rp("https://jsonplaceholder.typicode.com/todos")
      .then(function(data) {

        self.setState({todos:data}, function() {
          //console.log(self.state.todos);
        })
      })
      .catch(function(err) {
        console.log(err);
      })
  }

  getProjects() {
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

  componentWillMount() {
    this.getProjects()

    this.getTodos();
  }

  /*componentDidMount() {
    this.getTodos();
  }*/

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
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
