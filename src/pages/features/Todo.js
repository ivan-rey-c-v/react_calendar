import React, { Component } from 'react';
import styled from 'styled-components';

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
			padding: 0.25rem 0.3rem;
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
			content: '',
			todos: []
		};
	}

	addTodo = e => {
		const value = e.target.value;
		const index = e.target.getAttribute('index');
		const filteredTodos = this.state.todos.filter(todo => {
			if (todo.index === index) {
				return false;
			} else if (todo.value === '') {
				return false;
			} else {
				return true;
			}
		});

		const todos =
			value === ''
				? filteredTodos
				: [
						...filteredTodos,
						{
							index,
							value,
							done: false
						}
				  ];

		this.setState({
			todos
		});
	};

	cancel = e => {
		e.preventDefault();
		const { monthIndex, dayIndex } = this.props.match.params;
		console.log({ monthIndex, dayIndex });
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

	render() {
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
									index={index}
									onChange={this.addTodo}
								/>
							);
						})}
					</div>

					<div className="button-div">
						<Button value="Cancel" onClick={this.cancel} />
						<Button value="Add Todo" primary={true} />
					</div>
				</form>
			</Main>
		);
	}
}
