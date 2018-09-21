import React, { Component } from 'react';
import getNewDate from '../utils/getNewDate';

export const RootContext = React.createContext();

export class RootStore extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activities: {},
			currentDate: {},
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
			]
		};
	}

	componentWillMount() {
		// const currentDate = getNewDate();
		// this.setState({ currentDate });
		this.setNewDate();
		const stateFromStorage = this.getStateFromLocalStorage();
		if (stateFromStorage) {
			this.setState(stateFromStorage);
		}
	}

	componentDidUpdate() {
		this.saveStateToLocalStorage();
	}

	saveStateToLocalStorage = () => {
		const JSONState = JSON.stringify(this.state);
		const appName = 'react_calendar_simple_example';
		console.log('saving state to localstorage');
		window.localStorage.setItem(appName, JSONState);
	};

	getStateFromLocalStorage = () => {
		const appName = 'react_calendar_simple_example';
		const JSONState = window.localStorage.getItem(appName);
		console.log(`getting state from localstorage.... project-name: ${appName}`);
		return JSON.parse(JSONState);
	};

	setNewDate = () => {
		const currentDate = getNewDate();
		this.setState({ currentDate });
	};

	addFeatureItem = payload => {
		const { activityID } = payload;
		const activityList = this.state.activities[activityID]
			? this.state.activities[activityID]
			: [];

		const updatedActivityList = [...activityList, payload];

		this.setState(prevState => {
			return {
				activities: {
					...prevState.activities,
					[activityID]: updatedActivityList
				}
			};
		});
	};

	updateTodoItemStatus = (activitiesID, todoID, itemID) => {
		this.setState(prevState => {
			const activities = prevState.activities[activitiesID];
			const updatedActivities = activities.map(activity => {
				if (activity.id === todoID) {
					const updatedTodos = activity.todos.map(todo => {
						if (todo.id === itemID) {
							todo.done = !todo.done;
							return todo;
						} else return todo;
					});

					activity.todos = updatedTodos;
					return activity;
				} else return activity;
			});

			return {
				activities: {
					...prevState.activities,
					[activitiesID]: updatedActivities
				}
			};
		});
	};

	removeActivity = (activitiesID, activityID) => {
		this.setState(prevState => {
			const newActivities = prevState.activities[activitiesID].filter(
				activity => activity.id !== activityID
			);

			return {
				activities: {
					...prevState.activities,
					[activitiesID]: newActivities
				}
			};
		});
	};

	render() {
		return (
			<RootContext.Provider
				value={{
					rootState: this.state,
					setRootState: this.setState.bind(this),
					events: {
						addFeatureItem: this.addFeatureItem,
						removeActivity: this.removeActivity,
						updateTodoItemStatus: this.updateTodoItemStatus
					}
				}}
			>
				{this.props.children}
			</RootContext.Provider>
		);
	}
}
