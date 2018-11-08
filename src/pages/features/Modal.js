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
		console.log({ featName })
		setChosenFeature(featName)
	})

	return (
		<Overlay>
			{chosenFeature === 'ChooseFeature' && (
				<ChooseFeature
					handleChooseFeature={handleChooseFeature}
					closeModal={props.toggleModal}
					handleChooseFeature={handleChooseFeature}
				/>
			)}
			{chosenFeature === 'Notes' && <Notes />}
			{chosenFeature === 'Reminder' && <Reminder />}
			{chosenFeature === 'Todo' && <Todo />}
		</Overlay>
	)
}

export default Modal
