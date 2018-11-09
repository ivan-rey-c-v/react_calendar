import React, { useCallback, useContext } from 'react'
import { RootContext } from '../../context/RootContext'

import styled from 'styled-components'

const Div = styled.div`
	padding: 0.1rem 0;
`
const Checkbox = styled.input`
	margin-left: 2rem;
	cursor: pointer;
`
const Item = styled('label')`
	margin-left: 0.5rem;
	font-weight: 600;
	cursor: pointer;

	&.done {
		text-decoration: line-through;
		opacity: 0.75;
	}
`

function TodoItem(props) {
	const { todo, activitiesID, activityID } = props
	const store = useContext(RootContext)

	const handleToggleTodo = useCallback(e => {
		store.dispatch({
			type: 'TOGGLE_TODO_ITEM',
			activitiesID,
			activityID,
			todoID: todo.id
		})
	})

	return (
		<Div>
			<Checkbox
				type="checkbox"
				id={`todo-checkbox-${todo.id}`}
				value={todo.isDone}
				checked={todo.isDone}
				onChange={handleToggleTodo}
			/>
			<Item
				className={todo.isDone ? 'done' : ''}
				htmlFor={`todo-checkbox-${todo.id}`}
			>
				{todo.text}
			</Item>
		</Div>
	)
}

export default React.memo(TodoItem)
