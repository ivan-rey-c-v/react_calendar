import React, { useState, useCallback, useContext } from 'react'
import { RootContext } from '../../context/RootContext'
import useInput from '../../hooks/useInput'
import setRandomID from '../../utils/setRandomID'

import Button from './Button'
import TitleInput from './TitleInput'
import FeatureLayout from '../../layouts/FeatureLayout'
import HeaderField from '../../layouts/HeaderField'
import ActionsField from '../../layouts/ActionsField'
import TextAreaField from '../../layouts/TextAreaField'

function Notes(props) {
	const [note, setNote] = useState('')
	const store = useContext(RootContext)
	const titleInput = useInput('')

	const handleNoteChange = useCallback(e => {
		setNote(e.target.value)
	})

	const handleAddNote = useCallback(e => {
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
		<FeatureLayout>
			<HeaderField className="headerField">
				<h3>NOTES</h3>
			</HeaderField>

			<TitleInput {...titleInput} />

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
					onClick={handleAddNote}
				/>
			</ActionsField>
		</FeatureLayout>
	)
}

export default React.memo(Notes)
