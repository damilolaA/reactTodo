import React, { Component } from 'react';
import ProjectItem from "./projectItem";

class Project extends Component {
	deleteProject(id) {
		this.props.onDelete(id)
	}

  	render() {
	  	let projectItems;

		if(this.props.projects) {
		  	projectItems = this.props.projects.map(project => {
		  		
		  		return (
		  			<ProjectItem onDelete={this.deleteProject.bind(this)} key={project.title} project={project} />
		  		)
		  	});
		}

		return (
			<div className="Project">
				<h3>Latest Projects</h3>
			  {projectItems}
			</div>
		);
	}
}

export default Project;
