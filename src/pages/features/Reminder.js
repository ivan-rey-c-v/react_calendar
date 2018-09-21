import React, { Component } from 'react';
import styled from 'styled-components';
import { RootContext } from '../../context/RootContext';
import setRandomID from '../../utils/setRandomID';

import ReminderTime from './ReminderTime';
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
		> .time {
			margin-top: 1rem;
			align-self: center;
			display: flex;
			> .colon {
				padding: 0 1rem;
				font-size: 200%;
				font-weight: 600;
			}
		}
		> textarea {
			margin-top: 1rem;
			padding: 0.5rem;
		}

		> .button-div {
			margin-top: 2rem;
			display: flex;
			justify-content: space-between;
			padding: 0 1rem;
		}
	}
`;

export default class Reminder extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hour: 1,
			minutes: 1,
			content: ''
		};
	}

	setNewHour = hour => {
		this.setState({ hour });
	};
	setNewMinutes = minutes => {
		this.setState({ minutes });
	};
	handleContentChange = e => {
		const content = e.target.value;
		this.setState({ content });
	};
	cancel = e => {
		e.preventDefault();
		const { monthIndex, dayIndex } = this.props.match.params;
		this.props.history.push(
			`/month-${monthIndex}/day-${dayIndex}/choosefeature`
		);
	};

	addReminder = (e, rootState, events) => {
		e.preventDefault();
		const { monthIndex, dayIndex } = this.props.match.params;
		const { hour, minutes, content } = this.state;
		const title = `${String(hour).padStart(2, '0')}:${String(minutes).padStart(
			2,
			'0'
		)}`;
		const activityID = `${
			rootState.currentDate.year
		}-${monthIndex}-${dayIndex}`;

		const payload = {
			type: 'Reminder',
			title,
			content,
			activityID,
			id: setRandomID('Reminder-')
		};
		events.addFeatureItem(payload);
		this.props.history.push(`/month-${monthIndex}/day-${dayIndex}`);
		console.log('Reminder was saved!');
	};

	render() {
		return (
			<RootContext.Consumer>
				{({ rootState, events }) => {
					return (
						<Main>
							<form action="">
								<h3>REMINDER</h3>
								<div className="time">
									<ReminderTime limit={24} onChange={this.setNewHour} />
									<p className="colon">:</p>
									<ReminderTime limit={60} onChange={this.setNewMinutes} />
								</div>
								<textarea
									name="reminder-content"
									id="reminder-content"
									cols="30"
									rows="10"
									value={this.state.content}
									onChange={this.handleContentChange}
								/>

								<div className="button-div">
									<Button value="Cancel" onClick={this.cancel} />
									<Button
										value="Add Reminder"
										primary={true}
										disabled={!this.state.content}
										onClick={e => {
											this.addReminder(e, rootState, events);
										}}
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
