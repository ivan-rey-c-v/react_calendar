import React from 'react'
import HeaderNav from '../../components/header/HeaderNav'
import GoBack from '../../components/header/GoBack'
import IsABox from '../../components/IsABox'
import AddButton from './AddButton'

function DayHeader(props) {
	return (
		<HeaderNav>
			<GoBack to={`/month/${props.monthIndex}`}>
				<p>{props.year}</p>
				<IsABox isABox={props.isCurrentMonth} value={props.monthName} />
				<IsABox isABox={props.dayOfMonth} value={props.dayIndex} />
			</GoBack>

			<div onClick={props.openModal}>
				<AddButton />
			</div>
		</HeaderNav>
	)
}

export default React.memo(DayHeader)
