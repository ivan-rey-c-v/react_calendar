import React, { useState, useCallback } from 'react'

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
		font-weight: 900;
		letter-spacing: 1px;
		padding: 0.5rem 0.5rem 0.25rem 1rem;
		border: none;
		border-bottom: 1px solid darkgray;
	}
`

const TitleInput = props => {
	const [title, setTitle] = useState('')
	const handleChange = useCallback(e => {
		setTitle(e.target.value)
	})

	return (
		<InputField>
			<label htmlFor="">
				<p>
					Title <small>OPTIONAL</small>{' '}
				</p>
			</label>
			<input
				type="text"
				name="title"
				value={title}
				onChange={handleChange}
			/>
		</InputField>
	)
}

export default TitleInput
