import React, { Component } from 'react';
import PropTypes from "prop-types";

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

Project.propTypes = {
	projects: PropTypes.array,
	onDelete: PropTypes.func
}

export default Project;
