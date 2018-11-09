import React from 'react'

import styled from 'styled-components'

const InputField = styled.div`
	margin-top: 0.75rem;
	display: flex;
	flex-direction: column;
	font-weight: 600;
	font-family: serif;

	label {
		font-size: 0.8rem;
		letter-spacing: 1px;
		cursor: pointer;

		small {
			color: lightgray;
		}
	}

	input {
		font-size: 1.25rem;
		font-weight: 900;
		letter-spacing: 1px;
		padding: 0.5rem 0.5rem 0.25rem 1rem;
		border: none;
		border-bottom: 1px solid darkgray;
	}
`

const TitleInput = props => {
	return (
		<InputField>
			<label htmlFor="title-input">
				<p>
					Title <small>OPTIONAL</small>
				</p>
			</label>
			<input
				type="text"
				name="title-input"
				id="title-input"
				value={props.value}
				onChange={props.onChange}
			/>
		</InputField>
	)
}

export default TitleInput
