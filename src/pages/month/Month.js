import React, { useContext } from 'react'
import { RootContext } from '../../context/RootContext'
import createDaysArray from '../../utils/createDaysArray'
import getStartOfMonth from '../../utils/getStartOfMonth'
import { navigate } from '@reach/router'

import MonthHeader from './MonthHeader'
import WeekDays from './WeekDays'
import MonthSection from './MonthSection'

function Month(props) {
	const store = useContext(RootContext)

	const { month, year, day } = store.rootState.currentDate
	const monthIndex = props.monthID
	const isCurrentMonth = month === Number(monthIndex)
	const monthName = store.rootState.monthsList[monthIndex]
	const daysArray = createDaysArray(year, monthIndex)
	const dayOfMonth = isCurrentMonth && day
	const startOfMonth = getStartOfMonth(year, monthIndex)

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
				monthIndex={monthIndex}
				startOfMonth={startOfMonth}
			/>
		</main>
	)
}

export default Month
