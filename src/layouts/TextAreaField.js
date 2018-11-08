import React from 'react'

import styled from 'styled-components'

const Field = styled.div`
	margin-top: 1rem;

	textarea {
		font-size: 1rem;
		width: 100%;
		padding: 0.5rem 0.75rem;
	}
`

const TextAreaField = props => {
	return <Field>{props.children}</Field>
}

export default React.memo(TextAreaField)
