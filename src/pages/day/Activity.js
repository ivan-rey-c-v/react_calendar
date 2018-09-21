import React, { Component } from 'react';
import styled from 'styled-components';

import TodoItem from './TodoItem';

const Div = styled.div`
	padding: 0.25rem 1rem;
	> div {
		margin-top: 0.25rem;
	}
	> .header {
		font-size: 90%;
		font-weight: 600;
		color: gray;
		> * {
			margin-left: 0.5rem;
		}
	}
	> .content {
		font-size: 1.1rem;
		font-weight: 600;
	}
`;

export default class Activity extends Component {
	render() {
		return (
			<Div>
				<div className="header">
					<small>{this.props.activity.type}</small>
					<span>{this.props.activity.title}</span>
				</div>
				<div className="content">{this.props.activity.content}</div>
				<div>
					{this.props.activity.todos &&
						this.props.activity.todos.map(todo => (
							<TodoItem
								key={todo.id}
								todo={todo}
								updateTodoItemStatus={{
									...this.props.updateTodoItemStatus,
									todoID: this.props.activity.id
								}}
							/>
						))}
				</div>
			</Div>
		);
	}
}
