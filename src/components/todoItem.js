import React, { Component } from "react";

class TodoItems extends Component {

	render() {

		return (
			<li className="Todo">
				<strong>{this.props.todo.title}</strong>
			</li>
		)
	}
}

export default TodoItems;