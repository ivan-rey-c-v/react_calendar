import React, { useState, useCallback, useRef, useContext } from 'react'
import { RootContext } from '../../context/RootContext'
import useInput from '../../hooks/useInput'
import setRandomID from '../../utils/setRandomID'

import Button from './Button'
import TitleInput from './TitleInput'
import FeatureLayout from '../../layouts/FeatureLayout'
import HeaderField from '../../layouts/HeaderField'
import ActionsField from '../../layouts/ActionsField'

import styled from 'styled-components'

const TodosField = styled.div`
	width: 100%;
	margin: 1rem 0;
	padding: 0 1rem;
	display: flex;
	flex-direction: column;

	> input {
		border: none;
		font-size: 1rem;
		font-weight: 600;
		letter-spacing: 1px;
		padding: 0.25rem 0.5rem 0.25rem 0.75rem;
		color: #5b5063;
		border-bottom: 2px solid #c388ea;
	}
`

function Todo(props) {
	const store = useContext(RootContext)
	const todosNode = useRef(null)
	const titleInput = useInput('')
	const [todos, setTodos] = useState([])

	const handleAddTodo = useCallback(e => {
		const { value, id } = e.target

		if (id) {
			let newTodos = todos.reduce((accum, todo, index) => {
				if (todo.id === id) {
					// this is the current input
					todo.text = value
					accum.push(todo)
				} else if (todo.text === '') {
					// do not include
				} else {
					// include todo that has content
					accum.push(todo)
				}

				return accum
			}, [])

			return setTodos(newTodos)
		} else {
			const todo = {
				id: setRandomID('todo-item'),
				text: value,
				isDone: false
			}
			const noEmptyTodos = todos.filter(todo => todo.text !== '')

			// does not focus on intended input
			// when removing empty todo,
			// 	  it updates todos yet still focuses to placeholder todo item
			// yay! spaghetti code!
			// check if there are empty todo that was removed
			//    and there is previous sibling
			if (noEmptyTodos.length > 0 && todos.length > noEmptyTodos.length) {
				let { previousSibling } = e.target
				previousSibling.focus()
			}

			return setTodos([...noEmptyTodos, todo])
		}
	})

	const handleAddTodos = useCallback(e => {
		const { monthID, dayID } = props
		const { year } = store.state.currentDate
		const activityDateID = `${year}-${monthID}-${dayID}`
		const activity = {
			id: setRandomID('Todo'),
			type: 'Todo',
			title: titleInput.value,
			todos
		}

		store.dispatch({ type: 'ADD_ACTIVITY', activityDateID, activity })
		props.closeModal()
	})

	return (
		<FeatureLayout>
			<HeaderField>
				<h3>TODO</h3>
			</HeaderField>

			<TitleInput {...titleInput} />

			<TodosField ref={todosNode}>
				{[...todos, { text: '' }].map((todo, index) => {
					// {text: ''} above requires to be explicitly be ''
					// there is a bug that updates this placeholder input when no text: '' provided
					return (
						<input
							key={index}
							type="text"
							value={todo.text}
							id={todo.id}
							onChange={handleAddTodo}
						/>
					)
				})}
			</TodosField>

			<ActionsField>
				<Button value="Cancel" onClick={props.closeModal} />
				<Button
					value="Add Todo"
					primary={true}
					disabled={todos.length === 0}
					onClick={handleAddTodos}
				/>
			</ActionsField>
		</FeatureLayout>
	)
}

export default React.memo(Todo)
