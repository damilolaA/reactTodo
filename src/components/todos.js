import React, { Component } from "react";

import TodosItems from "./todoItem";

class Todos extends Component {

	render() {
		let todoItem;

		if(this.props.todos) {
			let todoDetails = this.props.todos;
			console.log(todoDetails.length);
			todoItem = todoDetails.forEach(todo => {

				return (
					<TodosItems todo={todo}/>
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

export default Todos;