import React, { useContext, useState, useCallback } from 'react'

import { RootContext } from '../../context/RootContext'
import DayHeader from './DayHeader'
import DaySection from './DaySection'
import Modal from '../features/Modal'

function Day(props) {
	const store = useContext(RootContext)

	const { monthID: monthIndex, dayID: dayIndex } = props
	const { year, month, day } = store.rootState.currentDate
	const monthName = store.rootState.monthsList[monthIndex]

	const isCurrentMonth = month === Number(monthIndex)
	const dayOfMonth = isCurrentMonth && day === Number(dayIndex)

	const activitiesID = `${year}-${monthIndex}-${dayIndex}`
	const activities = store.rootState.activities[activitiesID]

	const [isModalOpen, setIsModalOpen] = useState(false)
	const toggleModal = useCallback(() => {
		setIsModalOpen(!isModalOpen)
	})

	console.log({ dayOfMonth, isCurrentMonth, day, dayIndex })

	return (
		<main>
			<DayHeader
				year={year}
				monthName={monthName}
				isCurrentMonth={isCurrentMonth}
				dayOfMonth={dayOfMonth}
				dayIndex={Number(dayIndex)}
				monthIndex={monthIndex}
				openModal={toggleModal}
			/>
			<DaySection
				activities={activities}
				updateTodoItemStatus={{
					activitiesID,
					event: store.events.updateTodoItemStatus
				}}
				removeActivity={store.events.removeActivity}
			/>

			{isModalOpen && <Modal toggleModal={toggleModal} />}
		</main>
	)
}

export default React.memo(Day)
