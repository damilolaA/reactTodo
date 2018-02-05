import React, { Component } from 'react';
import uuid from "uuid";

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

    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(function(response) {
        if(response.status !== 200) {
          console.log("An error occured with status: " + response.status);
          return;
        }

        response.json().then(function(data) {
          let todos = self.state.todos;

          todos.push(data);
          self.setState(todos);
        })
      })
      .catch(function(err) {
        return console.log(err);
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

  deleteTodo(id) {
    let todos = this.state.todos[0];

    todos.forEach(function(todo) {
      let index = todo;

      if(index.id === id) {
        todos.splice(index, 1);
      }
    })

    this.setState(todos);
  }

  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)}/>

        <Project projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/>
        <Todos todos={this.state.todos[0]} onDelete={this.deleteTodo.bind(this)}/>
      </div>
    );
  }
}

export default App;
