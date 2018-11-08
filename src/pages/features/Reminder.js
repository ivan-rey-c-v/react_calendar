import React, { Component } from 'react'
import { RootContext } from '../../context/RootContext'
import setRandomID from '../../utils/setRandomID'

import Button from './Button'
import FormLayout from '../../layouts/FormLayout'
import HeaderField from '../../layouts/HeaderField'
import TextAreaField from '../../layouts/TextAreaField'
import ActionsField from '../../layouts/ActionsField'

import styled from 'styled-components'

const TimeField = styled.div`
	margin-top: 0.75rem;
	display: flex;
	justify-content: center;

	label {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0 0.75rem;

		small {
			font-size: 0.75rem;
			font-weight: 600;
			opacity: 0.75;
		}

		input {
			width: 3.5rem;
			font-size: 1rem;
			padding: 0.4rem 0.715rem;
			text-align: center;
		}
	}
`

function Reminder(props) {
	return (
		<FormLayout>
			<HeaderField>
				<h3>REMINDER</h3>
			</HeaderField>
			<TimeField>
				<label htmlFor="">
					<small>HOUR</small>
					<input type="tel" maxLength="2" />
				</label>

				<label htmlFor="">
					<small>MINUTE</small>
					<input type="tel" maxLength="2" />
				</label>
			</TimeField>

			<TextAreaField>
				<textarea
					name="reminder-content"
					id="reminder-content"
					rows="6"
				/>
			</TextAreaField>

			<ActionsField>
				<Button value="Cancel" />
				<Button value="Add Reminder" primary={true} />
			</ActionsField>
		</FormLayout>
	)
}

export default React.memo(Reminder)

// export default class Reminder extends Component {
// 	constructor(props) {
// 		super(props)
// 		this.state = {
// 			hour: 1,
// 			minutes: 1,
// 			content: ''
// 		}
// 	}

// 	setNewHour = hour => {
// 		this.setState({ hour })
// 	}
// 	setNewMinutes = minutes => {
// 		this.setState({ minutes })
// 	}
// 	handleContentChange = e => {
// 		const content = e.target.value
// 		this.setState({ content })
// 	}
// 	cancel = e => {
// 		e.preventDefault()
// 		const { monthIndex, dayIndex } = this.props.match.params
// 		this.props.history.push(
// 			`/month-${monthIndex}/day-${dayIndex}/choosefeature`
// 		)
// 	}

// 	addReminder = (e, rootState, events) => {
// 		e.preventDefault()
// 		const { monthIndex, dayIndex } = this.props.match.params
// 		const { hour, minutes, content } = this.state
// 		const title = `${String(hour).padStart(2, '0')}:${String(
// 			minutes
// 		).padStart(2, '0')}`
// 		const activityID = `${
// 			rootState.currentDate.year
// 		}-${monthIndex}-${dayIndex}`

// 		const payload = {
// 			type: 'Reminder',
// 			title,
// 			content,
// 			activityID,
// 			id: setRandomID('Reminder-')
// 		}
// 		events.addFeatureItem(payload)
// 		this.props.history.push(`/month-${monthIndex}/day-${dayIndex}`)
// 		console.log('Reminder was saved!')
// 	}

// 	render() {
// 		return (
// 			<RootContext.Consumer>
// 				{({ rootState, events }) => {
// 					return (
// 						<Main>
// 							<form action="">
// 								<h3>REMINDER</h3>
// 								<div className="time">
// 									<ReminderTime
// 										limit={24}
// 										onChange={this.setNewHour}
// 									/>
// 									<p className="colon">:</p>
// 									<ReminderTime
// 										limit={60}
// 										onChange={this.setNewMinutes}
// 									/>
// 								</div>
// 								<textarea
// 									name="reminder-content"
// 									id="reminder-content"
// 									cols="30"
// 									rows="10"
// 									value={this.state.content}
// 									onChange={this.handleContentChange}
// 								/>

// 								<div className="button-div">
// 									<Button
// 										value="Cancel"
// 										onClick={this.cancel}
// 									/>
// 									<Button
// 										value="Add Reminder"
// 										primary={true}
// 										disabled={!this.state.content}
// 										onClick={e => {
// 											this.addReminder(
// 												e,
// 												rootState,
// 												events
// 											)
// 										}}
// 									/>
// 								</div>
// 							</form>
// 						</Main>
// 					)
// 				}}
// 			</RootContext.Consumer>
// 		)
// 	}
// }
