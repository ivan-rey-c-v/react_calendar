import React, { useState, useCallback, useContext } from 'react'
import { RootContext } from '../../context/RootContext'
import setRandomID from '../../utils/setRandomID'

import Button from './Button'
import TitleInput from './TitleInput'
import FormLayout from '../../layouts/FormLayout'
import HeaderField from '../../layouts/HeaderField'
import ActionsField from '../../layouts/ActionsField'
import TextAreaField from '../../layouts/TextAreaField'

function Notes(props) {
	const [note, setNote] = useState('')
	const store = useContext(RootContext)

	const handleNoteChange = useCallback(e => {
		setNote(e.target.value)
	})
	const handleAddNote = useCallback(e => {
		e.preventDefault()
		const { title: titleInput } = e.target.elements

		const { monthID, dayID } = props
		const { year } = store.state.currentDate
		const activityDateID = `${year}-${monthID}-${dayID}`
		const activity = {
			id: setRandomID('Notes'),
			type: 'Notes',
			title: titleInput.value,
			content: note
		}

		store.dispatch({ type: 'ADD_ACTIVITY', activityDateID, activity })
		props.closeModal()
	})

	return (
		<FormLayout onSubmit={handleAddNote}>
			<HeaderField className="headerField">
				<h3>NOTES</h3>
			</HeaderField>

			<TitleInput />

			<TextAreaField>
				<textarea
					name="note"
					id="note"
					rows="10"
					value={note}
					onChange={handleNoteChange}
				/>
			</TextAreaField>

			<ActionsField>
				<Button value="Cancel" onClick={props.closeModal} />
				<Button
					value="Add Todo"
					primary={true}
					disabled={note === ''}
				/>
			</ActionsField>
		</FormLayout>
	)
}

export default React.memo(Notes)
