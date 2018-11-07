import React from 'react'
import { navigate } from '@reach/router'
import { ReactComponent as ArrowLeft } from '../../assets/icons/arrowleft.svg'

import styled from 'styled-components'

const Div = styled.div`
	cursor: pointer;
	&:hover {
		background-color: lightseagreen;
	}
	&:active {
		transform: translateX(-2px);
	}

	display: flex;
	align-items: center;
`

const StyledArrow = styled(ArrowLeft)`
	height: 1.5rem;
	width: 1.5rem;
	fill: darkviolet;
	margin-right: 0.5rem;
`

const GoBack = props => {
	const handleGoBack = e => {
		navigate('../')
	}

	return (
		<Div onClick={handleGoBack}>
			<span>
				<StyledArrow />
			</span>
			{props.children}
		</Div>
	)
}

export default GoBack
