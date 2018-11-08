import React, { useReducer } from 'react'
import getNewDate from '../utils/getNewDate'
import { getStateFromStorage, setStateToStorage } from '../utils/localStorage'

export const RootContext = React.createContext()

const initialState = {
	monthsList: [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	],
	currentDate: {},
	activities: {}
}

function _reducer(state, action) {
	switch (action.type) {
		case 'SET_NEWDATE': {
			let currentDate = getNewDate()
			return { ...state, currentDate }
		}

		case 'ADD_ACTIVITY': {
			const { activityDateID, activity } = action
			const activityList = state.activities[activityDateID]
				? state.activities[activityDateID]
				: []

			activityList.push(activity)

			return {
				...state,
				activities: {
					...state.activities,
					[activityDateID]: activityList
				}
			}
		}

		case 'REMOVE_ACTIVITY': {
			const { activitiesID, activityID } = action
			const activities = state.activities[activitiesID].filter(
				activity => activity.id !== activityID
			)

			return {
				...state,
				activities: {
					[activitiesID]: activities
				}
			}
		}

		case 'TOGGLE_TODO_ITEM': {
			const { activitiesID, activityID, todoID } = action

			const prevActivities = state.activities[activitiesID]
			const activities = prevActivities.map(activity => {
				if (activity.id === activityID) {
					activity.todos = activity.todos.map(todo => {
						if (todo.id === todoID) {
							todo.isDone = !todo.isDone
							return todo
						} else return todo
					})

					return activity
				}

				return activity
			})

			return {
				...state,
				activities: {
					[activitiesID]: activities
				}
			}
		}

		default: {
			return state
		}
	}
}

function reducer(state, action) {
	/*	use if statement instead of switch statement
	 *	since saving to localStorage is necessary in all cases
	 *		and have it in one place -> the last part of the function itself
	*/

	let newState = state

	if (action.type === 'SET_NEWDATE') {
		let currentDate = getNewDate()
		newState = { ...state, currentDate }
	}

	if (action.type === 'ADD_ACTIVITY') {
		const { activityDateID, activity } = action
		const activityList = state.activities[activityDateID]
			? state.activities[activityDateID]
			: []

		activityList.push(activity)

		newState = {
			...state,
			activities: {
				...state.activities,
				[activityDateID]: activityList
			}
		}
	}

	if (action.type === 'REMOVE_ACTIVITY') {
		const { activitiesID, activityID } = action
		const activities = state.activities[activitiesID].filter(
			activity => activity.id !== activityID
		)

		newState = {
			...state,
			activities: {
				[activitiesID]: activities
			}
		}
	}

	if (action.type === 'TOGGLE_TODO_ITEM') {
		const { activitiesID, activityID, todoID } = action

		const prevActivities = state.activities[activitiesID]
		const activities = prevActivities.map(activity => {
			if (activity.id === activityID) {
				activity.todos = activity.todos.map(todo => {
					if (todo.id === todoID) {
						todo.isDone = !todo.isDone
						return todo
					} else return todo
				})

				return activity
			}

			return activity
		})

		newState = {
			...state,
			activities: {
				[activitiesID]: activities
			}
		}
	}

	setStateToStorage(newState)
	return newState
}

export function RootStore(props) {
	const stateFromStorage = getStateFromStorage()
	let defaultState = stateFromStorage ? stateFromStorage : initialState

	const [state, dispatch] = useReducer(reducer, defaultState, {
		type: 'SET_NEWDATE'
	})

	const value = {
		state,
		dispatch
	}
	return (
		<RootContext.Provider value={value}>
			{props.children}
		</RootContext.Provider>
	)
}
