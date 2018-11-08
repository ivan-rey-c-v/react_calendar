import React, { useCallback, useContext } from 'react'
import { RootContext } from '../../context/RootContext'

import styled from 'styled-components'

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
		<Div className="todo-item" key={todo.id}>
			<input
				type="checkbox"
				value={todo.isDone}
				checked={todo.isDone}
				onChange={handleToggleTodo}
			/>
			<span className={todo.isDone ? 'done' : ''}>{todo.text}</span>
		</Div>
	)
}

export default React.memo(TodoItem)

// export default class _TodoItem extends Component {
// 	updateTodoItemStatus = () => {
// 		const { updateTodoItemStatus, todo } = this.props
// 		const { event, activitiesID, todoID } = updateTodoItemStatus
// 		event(activitiesID, todoID, todo.id)
// 	}

// 	render() {
// 		const { todo } = this.props
// 		return (
// 			<Div className="todo-item" key={todo.id}>
// 				<input
// 					type="checkbox"
// 					value={todo.done}
// 					checked={todo.done}
// 					onChange={this.updateTodoItemStatus}
// 				/>
// 				<span className={todo.done ? 'done' : ''}>{todo.text}</span>
// 			</Div>
// 		)
// 	}
// }

// TOGGLE_TODO_ITEM
