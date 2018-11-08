import React, { useContext } from 'react'
import { RootContext } from '../../context/RootContext'
import createDaysArray from '../../utils/createDaysArray'
import getStartOfMonth from '../../utils/getStartOfMonth'

import MonthHeader from './MonthHeader'
import WeekDays from './WeekDays'
import MonthSection from './MonthSection'

function Month(props) {
	const store = useContext(RootContext)
	const monthID = props.monthID
	const { month, year, day } = store.state.currentDate

	const monthName = store.state.monthsList[monthID]
	const daysArray = createDaysArray(year, monthID)
	const startOfMonth = getStartOfMonth(year, monthID)

	const isCurrentMonth = month === Number(monthID)
	const dayOfMonth = isCurrentMonth && day

	return (
		<main>
			<MonthHeader
				monthName={monthName}
				isCurrentMonth={isCurrentMonth}
				year={year}
			/>
			<WeekDays />
			<MonthSection
				daysArray={daysArray}
				dayOfMonth={dayOfMonth}
				monthID={monthID}
				startOfMonth={startOfMonth}
			/>
		</main>
	)
}

export default Month
