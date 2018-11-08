import React from 'react'
import { Link } from '@reach/router'
import { ReactComponent as ArrowLeft } from '../../assets/icons/arrowleft.svg'

import styled from 'styled-components'

const Div = styled.div`
	cursor: pointer;
	display: flex;
	align-items: center;

	.content {
		display: flex;
		align-items: center;

		> * {
			margin-right: 0.5rem;
		}
	}
`

const ArrowWrapper = styled.span`
	padding: 0.1rem 0.5rem;
	margin-right: 0.5rem;

	&:hover {
		background-color: #e8f4f4;
	}
	&:active {
		transform: translateX(-5px);
	}
`

const StyledArrow = styled(ArrowLeft)`
	height: 1.5rem;
	width: 1.5rem;
	fill: darkviolet;
`

const GoBack = props => {
	return (
		<Div>
			<ArrowWrapper as={Link} to={props.to}>
				<StyledArrow />
			</ArrowWrapper>

			<span className="content">{props.children}</span>
		</Div>
	)
}

export default GoBack
