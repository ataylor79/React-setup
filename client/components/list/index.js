import React from 'react';
import Todo from '../item'

import './list.css'

class TodoList extends React.Component {
	constructor (props) {
		super(props);
		props.onLoadTodos();
	}

	render() {
		return (
			<div className="list">
				<ul>
					{this.props.todos.map(todo =>
						<Todo
								key={todo.id}
								{...todo}
								onDone={() => this.props.onDoneTodo(todo.id, todo.done)}
								onDelete={() => this.props.onDeleteTodo(todo.id)}
						/>
					)}
				</ul>
			</div>
		);
	}
};

export default TodoList;
