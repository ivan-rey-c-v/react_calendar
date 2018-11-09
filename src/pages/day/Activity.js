import React, { useContext, useCallback } from 'react'
import { RootContext } from '../../context/RootContext'
import TodoItem from './TodoItem'

import styled from 'styled-components'

const Div = styled.div`
	padding: 0.25rem 1rem 0.5rem 1rem;
	font-weight: 600;
	position: relative;
`
const Header = styled.div`
	padding: 0.25rem;
	color: teal;
	letter-spacing: 1px;

	span {
		font-family: serif;
		font-size: 1.3rem;
		margin-left: 1.5rem;
	}
	small {
		opacity: 0.75;
	}
`
const RemoveItem = styled.span`
	position: absolute;
	top: 0;
	right: 0;
	height: 2rem;
	width: 2rem;
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
`

function Activity(props) {
	const { activity, activitiesID } = props
	const store = useContext(RootContext)

	const handleRemoveActivity = useCallback(e => {
		store.dispatch({
			type: 'REMOVE_ACTIVITY',
			activitiesID,
			activityID: activity.id
		})
	})

	return (
		<Div>
			<Header className="header">
				<small>{activity.type}</small>
				<span>{activity.title}</span>
			</Header>
			<div className="content">{activity.content}</div>
			<div>
				{activity.todos &&
					activity.todos.map(todo => (
						<TodoItem
							key={todo.id}
							todo={todo}
							activitiesID={activitiesID}
							activityID={activity.id}
						/>
					))}
			</div>

			<RemoveItem className="remove" onClick={handleRemoveActivity}>
				x
			</RemoveItem>
		</Div>
	)
}

export default React.memo(Activity)
