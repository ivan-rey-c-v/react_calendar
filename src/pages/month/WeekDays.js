import React from 'react'
import styled from 'styled-components'

const UnorderedList = styled.ul`
	display: grid;
	grid-template-columns: repeat(7, 1fr);
	justify-items: center;
	align-items: center;
	height: 3rem;
	font-size: 1rem;
	font-weight: 600;
	color: gray;
	border-bottom: 2px solid lightgray;
`

function WeekDays(props) {
	const weeks = ['Sun', 'M', 'Tu', 'W', 'Th', 'F', 'Sat']

	return (
		<UnorderedList>
			{weeks.map(day => (
				<li key={day}>{day}</li>
			))}
		</UnorderedList>
	)
}

export default React.memo(WeekDays)
