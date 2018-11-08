import React, { useState, useCallback, useContext } from 'react'
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
	padding-bottom: 0.25rem;
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
const Memo = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	color: gray;
	font-size: 0.75rem;
	font-weight: 600;
`

function Reminder(props) {
	const [hour, setHour] = useState('')
	const [minute, setMinute] = useState('')
	const [reminder, setReminder] = useState('')
	const store = useContext(RootContext)

	const handleSetHour = useCallback(e => {
		let val = e.target.value
		val = val.replace(/[A-Z]/gi, '')

		let withinBounds = Number(val) >= 0 && Number(val) < 24
		if (withinBounds) {
			setHour(val)
		}
	})
	const handleSetMinute = useCallback(e => {
		let val = e.target.value
		val = val.replace(/[A-Z]/gi, '')

		let withinBounds = Number(val) >= 0 && Number(val) < 60
		if (withinBounds) {
			setMinute(val)
		}
	})
	const handleSetReminder = useCallback(e => {
		setReminder(e.target.value)
	})

	const handleAddReminder = useCallback(e => {
		e.preventDefault()

		const { monthID, dayID } = props
		const { year } = store.state.currentDate
		const activityDateID = `${year}-${monthID}-${dayID}`
		const activity = {
			id: setRandomID('Reminder'),
			type: 'Reminder',
			title: `${hour.padStart(2, '0')}:${minute.padStart(2, '0')}`,
			content: reminder
		}

		store.dispatch({ type: 'ADD_ACTIVITY', activityDateID, activity })
		props.closeModal()
	})

	const hasContents = hour !== '' && minute !== '' && reminder !== ''

	return (
		<FormLayout onSubmit={handleAddReminder}>
			<HeaderField>
				<h3>REMINDER</h3>
			</HeaderField>
			<TimeField>
				<label htmlFor="">
					<small>HOUR</small>
					<input
						type="tel"
						maxLength="2"
						value={hour}
						onChange={handleSetHour}
					/>
				</label>

				<label htmlFor="">
					<small>MINUTE</small>
					<input
						type="tel"
						maxLength="2"
						value={minute}
						onChange={handleSetMinute}
					/>
				</label>
			</TimeField>
			<Memo>
				<p>
					24 <small> Hour format</small>
				</p>
			</Memo>

			<TextAreaField>
				<textarea
					name="reminder-content"
					id="reminder-content"
					rows="6"
					value={reminder}
					onChange={handleSetReminder}
				/>
			</TextAreaField>

			<ActionsField>
				<Button value="Cancel" onClick={props.closeModal} />
				<Button
					value="Add Reminder"
					primary={true}
					disabled={!hasContents}
				/>
			</ActionsField>
		</FormLayout>
	)
}

export default React.memo(Reminder)
