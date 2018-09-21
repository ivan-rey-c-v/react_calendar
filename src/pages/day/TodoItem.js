import React, { Component } from 'react';
import styled from 'styled-components';

const Div = styled.div`
	> input {
		margin-left: 1rem;
	}
	> span {
		margin-left: 1rem;
		font-weight: 600;
	}

	> .done {
		text-decoration: line-through;
		opacity: 0.75;
	}
`;

export default class TodoItem extends Component {
	updateTodoItemStatus = () => {
		const { updateTodoItemStatus, todo } = this.props;
		const { event, activitiesID, todoID } = updateTodoItemStatus;
		event(activitiesID, todoID, todo.id);
	};

	render() {
		const { todo } = this.props;
		return (
			<Div className="todo-item" key={todo.id}>
				<input
					type="checkbox"
					value={todo.done}
					checked={todo.done}
					onChange={this.updateTodoItemStatus}
				/>
				<span className={todo.done ? 'done' : ''}>{todo.text}</span>
			</Div>
		);
	}
}
