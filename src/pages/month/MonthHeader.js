import React, { Component } from 'react'
import HeaderNav from '../../components/header/HeaderNav'
import GoBack from '../../components/header/GoBack'
import IsABox from '../../components/IsABox'

import styled from 'styled-components'

const Header = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 2px solid indigo;
	height: 2.5rem;
	padding: 0 0.5rem 0 0.25rem;

	> .nav {
		display: flex;
		font-weight: 600;
		font-size: 125%;
		cursor: pointer;
		color: #009933;
		> p {
			padding-left: 0.25rem;
		}
		&:hover {
			opacity: 0.75;
		}
		&:active {
			transform: scale(0.95);
		}
	}

	& .month-name {
		font-weight: 600;
		font-size: 125%;
	}
`

function MonthHeader(props) {
	//

	return (
		<HeaderNav>
			<GoBack>
				<p>2018</p>
			</GoBack>

			<div>
				<IsABox isABox={props.isCurrentMonth} value={props.monthName} />
			</div>
		</HeaderNav>
	)
}

export default React.memo(MonthHeader)

class _MonthHeader extends Component {
	render() {
		return (
			<Header>
				<div className="nav" onClick={this.props.onClick}>
					<p> &lt; </p>
					<p> {this.props.year} </p>
				</div>
			</Header>
		)
	}
}
