import React, { Component } from 'react';

class AddProject extends Component {

	constructor() {
		super()
		this.state = {
			newProject: {}
		}
	}

	static defaultProps = {
		categories: ["FrontEnd Javascript", "Web Development"]
	}

	handleSubmit(e) {
		if(this.refs.title.value === "") {
			alert("Title is required");
		} else {
			this.setState({newProject:{
				title: this.refs.title.value,
				category: this.refs.category.value
			}}, function() {
				//console.log(this.state);
				this.props.addProject(this.state.newProject)
			})
		}

		e.preventDefault();
	}

    render() {

    	let categoryOptions = this.props.categories.map(category => {
    		return <option key={category} value={category}>{category}</option>
    	});

		return (
			<div>
			  	<h3>Add Projects</h3>
				<form onSubmit={this.handleSubmit.bind(this)}>
				  	<div>
				  		<b><label>Title:</label></b> <br />
				  		<input type="text" ref="title"/>
				  	</div>
				  	<div>
				  		<b><label>Category:</label></b> <br />
				  		<select ref="category">
				  			{categoryOptions}
				  		</select>
				  	</div>
				  	<br/>
				  	<input type="submit" value="Submit"/>
				</form>
			</div>
		);
	}
}

export default AddProject;
