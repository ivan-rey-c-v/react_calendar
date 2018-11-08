import React, { useContext, useState, useCallback } from 'react'

import { RootContext } from '../../context/RootContext'
import DayHeader from './DayHeader'
import DaySection from './DaySection'
import Modal from '../features/Modal'

function Day(props) {
	const store = useContext(RootContext)
	const [isModalOpen, setIsModalOpen] = useState(false)

	const { monthID, dayID } = props
	const { year, month, day } = store.state.currentDate

	const monthName = store.state.monthsList[monthID]

	const isCurrentMonth = month === Number(monthID)
	const dayOfMonth = isCurrentMonth && day === Number(dayID)

	const activitiesID = `${year}-${monthID}-${dayID}`
	const activities = store.state.activities[activitiesID]

	const toggleModal = useCallback(e => {
		e.preventDefault()
		setIsModalOpen(!isModalOpen)
	})

	return (
		<main>
			<DayHeader
				year={year}
				monthName={monthName}
				isCurrentMonth={isCurrentMonth}
				dayOfMonth={dayOfMonth}
				dayID={dayID}
				monthID={monthID}
				openModal={toggleModal}
			/>
			<DaySection activities={activities} activitiesID={activitiesID} />

			{isModalOpen && (
				<Modal
					toggleModal={toggleModal}
					dayID={dayID}
					monthID={monthID}
				/>
			)}
		</main>
	)
}

export default React.memo(Day)
