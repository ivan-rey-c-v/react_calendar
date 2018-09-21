import React, { Component } from 'react';
import getNewDate from '../utils/getNewDate';

export const RootContext = React.createContext();

export class RootStore extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todoItems: {},
			activities: {
				'2018-8-21': [
					{
						type: 'Notes',
						id: 'Notes-823-Z*#90',
						title: 'Title of my Notes',
						content:
							'Lorem Ipsum Precision touchpad with bluelight shield, HDMI port and Gigabit LAN.'
					},
					{
						type: 'Reminder',
						id: 'Reminder-411-KHG$',
						title: '4:30',
						content: 'Do something within this time'
					},
					{
						type: 'Todo',
						id: 'Todo-360-%lg^cvv',
						title: 'Grocery',
						content: '',
						todos: [
							{
								id: 'todo-item-23187',
								text: 'Milk',
								done: true
							},
							{
								id: 'todo-item-asdfg1',
								text: 'Bread',
								done: false
							},
							{
								id: 'todo-item-43v234v',
								text: 'Cooking oil',
								done: false
							}
						]
					}
				]
			},
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
		const currentDate = getNewDate();
		this.setState({ currentDate });
	}

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

	getTodoItems = idArray => {
		return idArray.map(todoID => {
			return this.state.todoItems[todoID];
		});
	};

	componentDidUpdate() {
		console.log('root context app did mount', this.state);
	}

	render() {
		return (
			<RootContext.Provider
				value={{
					rootState: this.state,
					setRootState: this.setState.bind(this),
					events: {
						addFeatureItem: this.addFeatureItem,
						getTodoItems: this.getTodoItems,
						updateTodoItemStatus: this.updateTodoItemStatus
					}
				}}
			>
				{this.props.children}
			</RootContext.Provider>
		);
	}
}
