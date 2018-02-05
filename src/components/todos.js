import React, { Component } from "react";
import PropTypes from "prop-types";

import TodosItems from "./todoItem";

class Todos extends Component {

	deleteTodo(id) {
		this.props.onDelete(id);
	}

	render() {
		let todoItem;

		if(this.props.todos) {
			let todoDetails = this.props.todos;
			todoItem = todoDetails.map(todo => {

				return (
					<TodosItems key={todo.title} todo={todo} todoDelete={this.deleteTodo.bind(this)}/>
				)
			})
		}

		return (
			<div className="Todos">
				<h3>Todos List</h3>
				{todoItem}
			</div>
		)
	}

}

Todos.propTypes = {
	todos: PropTypes.array,
	onDelete: PropTypes.func
}

export default Todos;