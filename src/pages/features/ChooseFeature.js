import React from 'react'
import Button from './Button'
import FormLayout from '../../layouts/FormLayout'

import styled from 'styled-components'

const UnorderedList = styled.ul`
	font-size: 150%;
	font-weight: 600;
	color: white;
	background-color: #5e4f63;
	cursor: pointer;
`
const List = styled.li`
	padding: 1.5rem;
	text-align: center;
	&:hover {
		background-color: #33cccc;
		color: black;
	}
	&:active {
		transform: scale(0.95);
	}
`
const ButtonWrapper = styled.div`
	padding-top: 1.5rem;
	display: flex;
	justify-content: center;
`

function ChooseFeature(props) {
	return (
		<FormLayout>
			<UnorderedList onClick={props.handleChooseFeature}>
				<List>Reminder</List>
				<List>Todo</List>
				<List>Notes</List>
			</UnorderedList>

			<ButtonWrapper>
				<Button value="Close" onClick={props.closeModal} />
			</ButtonWrapper>
		</FormLayout>
	)
}

export default React.memo(ChooseFeature)
