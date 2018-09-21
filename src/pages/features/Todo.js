import React, { Component } from 'react';
import styled from 'styled-components';
import { RootContext } from '../../context/RootContext';
import setRandomID from '../../utils/setRandomID';

import Button from './Button';

const Main = styled.main`
	> form {
		margin-top: 1rem;
		padding: 1rem;
		display: flex;
		flex-direction: column;

		> h3 {
			align-self: center;
		}
		> label {
			margin-top: 1rem;
			font-weight: 600;

			> small {
				font-size: 0.75rem;
				color: gray;
			}
		}
		> input {
			border: none;
			border-bottom: 2px solid gray;
			padding: 0.25rem 0.5rem;
			font-size: 1.1rem;
		}

		> textarea {
			margin-top: 1rem;
			padding: 0.5rem;
		}

		> .todos {
			width: 100%;
			margin-top: 2rem;
			display: flex;
			flex-direction: column;
			background-color: red;

			> input {
				border: none;
				border-bottom: 2px solid lightgray;
				padding: 0.25rem 0.5rem;
				font-size: 1rem;
			}
		}
	}

	& .button-div {
		margin-top: 2rem;
		padding: 0 1rem;
		display: flex;
		justify-content: space-between;
	}
`;

export default class Todo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			todos: []
		};
	}

	addTodoItem = e => {
		const value = e.target.value;
		const id = e.target.getAttribute('id');

		const todosObject = this.state.todos.reduce(
			(accum, todo) => {
				if (todo.id === '') {
					todo.id = setRandomID('todo-item-');
					todo.text = value;
					accum.todos.push(todo);
					accum.existingInput = true;
					return accum;
				}

				if (todo.id === id) {
					todo.text = value;
					accum.todos.push(todo);
					accum.existingInput = true;
					return accum;
				} else if (todo.text === '') {
					return accum;
				} else {
					accum.todos.push(todo);
					return accum;
				}
			},
			{
				existingInput: false,
				todos: []
			}
		);

		this.setState({
			todos: todosObject.existingInput
				? todosObject.todos
				: [
						...todosObject.todos,
						{
							id: setRandomID('todo-item-'),
							done: false,
							text: value
						}
				  ]
		});
	};

	cancel = e => {
		e.preventDefault();
		const { monthIndex, dayIndex } = this.props.match.params;
		this.props.history.push(
			`/month-${monthIndex}/day-${dayIndex}/choosefeature`
		);
	};

	handleTitleChange = e => {
		const title = e.target.value;
		this.setState({ title });
	};

	handleContentChange = e => {
		const content = e.target.value;
		this.setState({ content });
	};

	addTodos = (e, rootState, events) => {
		e.preventDefault();
		const { monthIndex, dayIndex } = this.props.match.params;
		const { title, todos } = this.state;
		const activityID = `${
			rootState.currentDate.year
		}-${monthIndex}-${dayIndex}`;

		const payload = {
			type: 'Todo',
			title,
			todos,
			activityID,
			content: '',
			id: setRandomID('Todo-')
		};
		events.addFeatureItem(payload);
		this.props.history.push(`/month-${monthIndex}/day-${dayIndex}`);
		console.log('Todo was saved!');
	};

	render() {
		return (
			<RootContext.Consumer>
				{({ rootState, events }) => {
					return (
						<Main>
							<form action="">
								<h3>TODO</h3>
								<label htmlFor="">
									Title <small>OPTIONAL</small>
								</label>
								<input
									type="text"
									value={this.state.title}
									onChange={this.handleTitleChange}
								/>

								<div className="todos">
									{[...this.state.todos, {}].map((todo, index) => {
										return (
											<input
												key={index}
												type="text"
												value={todo.text}
												id={todo.id}
												onChange={this.addTodoItem}
											/>
										);
									})}
								</div>

								<div className="button-div">
									<Button value="Cancel" onClick={this.cancel} />
									<Button
										value="Add Todo"
										primary={true}
										onClick={e => {
											this.addTodos(e, rootState, events);
										}}
										disabled={
											!this.state.todos.filter(v => v.text !== '').length > 0
										}
									/>
								</div>
							</form>
						</Main>
					);
				}}
			</RootContext.Consumer>
		);
	}
}
