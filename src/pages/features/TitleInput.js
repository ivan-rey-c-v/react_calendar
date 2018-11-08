import React from 'react'

import styled from 'styled-components'

const InputField = styled.div`
	margin-top: 0.75rem;
	display: flex;
	flex-direction: column;
	font-weight: 600;

	label {
		font-size: 0.8rem;
		letter-spacing: 1px;

		small {
			color: lightgray;
		}
	}

	input {
		font-size: 1rem;
		padding: 0.25rem 0.25rem 0.1rem 0.25rem;
		border: none;
		border-bottom: 1px solid darkgray;
	}
`

const TitleInput = props => {
	return (
		<InputField>
			<label htmlFor="">
				<p>
					Title <small>OPTIONAL</small>{' '}
				</p>
			</label>
			<input type="text" />
		</InputField>
	)
}

export default TitleInput
