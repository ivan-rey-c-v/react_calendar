import React, { useState, useCallback } from 'react'
import Overlay from './Overlay'
import ChooseFeature from './ChooseFeature'
import Notes from './Notes'
import Reminder from './Reminder'
import Todo from './Todo'

const Modal = props => {
	const [chosenFeature, setChosenFeature] = useState('ChooseFeature')

	const handleChooseFeature = useCallback(e => {
		const featName = e.target.textContent
		setChosenFeature(featName)
	})

	return (
		<Overlay>
			{chosenFeature === 'ChooseFeature' && (
				<ChooseFeature
					closeModal={props.toggleModal}
					handleChooseFeature={handleChooseFeature}
				/>
			)}
			{chosenFeature === 'Notes' && (
				<Notes
					closeModal={props.toggleModal}
					dayID={props.dayID}
					monthID={props.monthID}
				/>
			)}
			{chosenFeature === 'Reminder' && (
				<Reminder
					closeModal={props.toggleModal}
					dayID={props.dayID}
					monthID={props.monthID}
				/>
			)}
			{chosenFeature === 'Todo' && (
				<Todo
					closeModal={props.toggleModal}
					dayID={props.dayID}
					monthID={props.monthID}
				/>
			)}
		</Overlay>
	)
}

export default Modal
