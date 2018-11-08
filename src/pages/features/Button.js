import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
	padding: 0.25rem 0.75rem;
	font-size: 1.1rem;
	font-weight: 600;
	border: 1px solid #304e7f;
	cursor: pointer;
	box-shadow: 2px 2px gray;
	color: #304e7f;
	background-color: transparent;

	&:not([disabled]) {
		&:hover {
			transform: translateY(-1px);
		}
		&:active {
			transform: scale(0.95);
		}
	}

	&[disabled] {
		opacity: 0.5;
	}

	&.primary {
		color: white;
		background-color: #1d3254;

		&:not([disabled]) {
			&:hover {
				transform: translateY(-1px);
				opacity: 0.9;
			}
		}
	}
`

function ButtonComponent(props) {
	return (
		<Button {...props} className={props.primary ? 'primary' : 'default'}>
			{props.value}
		</Button>
	)
}

export default React.memo(ButtonComponent)
