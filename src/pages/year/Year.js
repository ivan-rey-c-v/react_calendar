import React, { useContext } from 'react'
import { RootContext } from '../../context/RootContext'

import YearSection from './YearSection'

import Header from '../../components/header/Header'
import Box from '../../components/Box'

function Year(props) {
	const store = useContext(RootContext)

	let year = store.rootState.currentDate.year

	return (
		<main>
			<Header>
				<Box>
					<h1>{year}</h1>
				</Box>
			</Header>
			<YearSection
				monthsList={store.rootState.monthsList}
				currentMonthIndex={store.rootState.currentDate.month}
			/>
		</main>
	)
}

export default React.memo(Year)
