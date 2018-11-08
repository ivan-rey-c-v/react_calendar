import React from 'react'
import { ReactComponent as AddSVG } from '../../assets/icons/add.svg'

import styled from 'styled-components'

const Wrapper = styled.div`
	height: 2rem;
	width: 2rem;
	border-radius: 2px;
	background-color: purple;
	box-shadow: 1px 1px 2px gray;

	cursor: pointer;
	&:hover {
		transform: translateY(-1px);
	}
	&:active {
		transform: scale(0.95);
	}

	display: flex;
	justify-content: center;
	align-items: center;

	svg {
		fill: white;
		height: 1.75rem;
		width: 1.75rem;
	}
`

function AddButton(props) {
	return (
		<Wrapper onClick={props.onClick}>
			<AddSVG />
		</Wrapper>
	)
}

export default React.memo(AddButton)
