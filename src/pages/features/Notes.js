import React, { Component } from 'react'
import { RootContext } from '../../context/RootContext'
import setRandomID from '../../utils/setRandomID'

import Button from './Button'
import TitleInput from './TitleInput'
import FormLayout from '../../layouts/FormLayout'
import HeaderField from '../../layouts/HeaderField'
import ActionsField from '../../layouts/ActionsField'
import TextAreaField from '../../layouts/TextAreaField'

function Notes(props) {
	return (
		<FormLayout>
			<HeaderField className="headerField">
				<h3>NOTES</h3>
			</HeaderField>

			<TitleInput />

			<TextAreaField>
				<textarea
					name="notes-content"
					id="notes-content"
					rows="10"
					// value={this.state.content}
					// onChange={this.handleContentChange}
				/>
			</TextAreaField>

			<ActionsField>
				<Button value="Cancel" />
				<Button
					value="Add Todo"
					primary={true}
					// disabled={!this.state.content}
					// onClick={e => {
					// 	this.addNotes(e, rootState, events)
					// }}
				/>
			</ActionsField>
		</FormLayout>
	)
}

export default React.memo(Notes)

// export default class Todo extends Component {
// 	constructor(props) {
// 		super(props)
// 		this.state = {
// 			title: '',
// 			content: ''
// 		}
// 	}

// 	cancel = e => {
// 		e.preventDefault()
// 		const { monthIndex, dayIndex } = this.props.match.params
// 		console.log({ monthIndex, dayIndex })
// 		this.props.history.push(
// 			`/month-${monthIndex}/day-${dayIndex}/choosefeature`
// 		)
// 	}

// 	handleTitleChange = e => {
// 		const title = e.target.value
// 		this.setState({ title })
// 	}

// 	handleContentChange = e => {
// 		const content = e.target.value
// 		this.setState({ content })
// 	}

// 	addNotes = (e, rootState, events) => {
// 		e.preventDefault()
// 		const { monthIndex, dayIndex } = this.props.match.params
// 		const { title, content } = this.state

// 		const activityID = `${
// 			rootState.currentDate.year
// 		}-${monthIndex}-${dayIndex}`

// 		const payload = {
// 			type: 'Notes',
// 			title,
// 			content,
// 			activityID,
// 			id: setRandomID('Notes-')
// 		}
// 		events.addFeatureItem(payload)
// 		this.props.history.push(`/month-${monthIndex}/day-${dayIndex}`)
// 		console.log('notes was saved!')
// 	}

// 	render() {
// 		return (
// 			<RootContext.Consumer>
// 				{({ rootState, events }) => {
// 					return (
// 						<Main>
// 							<form action="">
// 								<h3>NOTES</h3>
// 								<label htmlFor="">
// 									Title <small>OPTIONAL</small>
// 								</label>
// 								<input
// 									type="text"
// 									value={this.state.title}
// 									onChange={this.handleTitleChange}
// 								/>
// 								<textarea
// 									name="notes-content"
// 									id="notes-content"
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
// 										value="Add Todo"
// 										primary={true}
// 										disabled={!this.state.content}
// 										onClick={e => {
// 											this.addNotes(e, rootState, events)
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
