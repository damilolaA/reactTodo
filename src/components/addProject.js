import React, { Component } from 'react';

class AddProject extends Component {

	static defaultProps = {
		categories: ["FrontEnd Javascript", "Web Development"]
	}

	handleSubmit(e) {
		console.log("submitted");

		e.preventDefault();
	}

    render() {
    	let categoryOptions = this.props.categories.map(category => {
    		return <option key={category} value="category">{category}</option>
    	})
		return (
			<div>
			  <h3>Add Projects</h3>
			  <form onSubmit={this.handleSubmit}>
			  	<div>
			  		<label>Title</label> <br />
			  		<input type="text" ref="Title"/>
			  	</div>
			  	<div>
			  		<label>Category</label> <br />
			  		<select>
			  			{categoryOptions}
			  		</select>
			  	</div>
			  	<input type="submit" value="Submit"/>
			  </form>
			</div>
		);
	}
}

export default AddProject;
