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

	position: relative;

	> .remove {
		position: absolute;
		top: 0;
		right: 0;
		height: 2rem;
		width: 2rem;
		font-weight: 600;
		color: crimson;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;

		&:hover {
			background-color: lightgray;
		}
		&:active {
			transform: scale(0.9);
		}
	}
`;

export default class Activity extends Component {
	handleRemoveActivity = () => {
		const { removeActivity, activity, updateTodoItemStatus } = this.props;

		removeActivity(updateTodoItemStatus.activitiesID, activity.id);
	};

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

				<span className="remove" onClick={this.handleRemoveActivity}>
					x
				</span>
			</Div>
		);
	}
}
