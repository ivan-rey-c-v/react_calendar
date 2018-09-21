import React, { Component } from 'react';
import getNewDate from '../utils/getNewDate';

export const RootContext = React.createContext();

export class RootStore extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todoItems: {},
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
		console.log('Mounting RootStore');
		const currentDate = getNewDate();
		this.setState({ currentDate });
	}

	addFeatureItem = payload => {
		const { activityID } = payload;
		const activityList = this.state.activities[activityID]
			? this.state.activities[activityID]
			: [];

		const updatedActivityList = [...activityList, payload];

		console.log({ payload, activityID, updatedActivityList });

		this.setState(prevState => {
			return {
				activities: {
					...prevState.activities,
					[activityID]: updatedActivityList
				}
			};
		});
	};

	updateTodoItemStatus = itemID => {
		this.setState(prevState => {
			const todoItem = prevState.todoItems[itemID];
			todoItem.done = !todoItem.done;

			return {
				todoItems: {
					...prevState.todoItems[itemID],
					[itemID]: todoItem
				}
			};
		});
	};

	getTodoItems = idArray => {
		return idArray.map(todoID => {
			return this.state.todoItems[todoID];
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
