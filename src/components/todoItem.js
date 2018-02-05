import React, { Component } from "react";
import PropTypes from "prop-types";

class TodoItems extends Component {

	deleteTodo(id) {
		this.props.todoDelete(id);
	}

	render() {
		return (
			<li className="Todo">
				<strong>{this.props.todo.id}</strong> : {this.props.todo.title} <a href="#" onClick={this.deleteTodo.bind(this, this.props.todo.id)}>Delete</a>
			</li>
		)
	}
}

TodoItems.propTypes = {
	todoDelete: PropTypes.func,
	todo: PropTypes.object
}

export default TodoItems;