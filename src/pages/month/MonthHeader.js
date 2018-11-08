import React from 'react'
import HeaderNav from '../../components/header/HeaderNav'
import GoBack from '../../components/header/GoBack'
import IsABox from '../../components/IsABox'

function MonthHeader(props) {
	return (
		<HeaderNav>
			<GoBack to="/">
				<p>2018</p>
			</GoBack>

			<div>
				<IsABox isABox={props.isCurrentMonth} value={props.monthName} />
			</div>
		</HeaderNav>
	)
}

export default React.memo(MonthHeader)
