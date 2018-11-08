import React from 'react'

import styled from 'styled-components'

const Field = styled.div`
	margin-top: 1.25rem;
	padding: 0 0.5rem;
	display: flex;
	justify-content: space-between;
`

const ActionsField = props => {
	return <Field>{props.children}</Field>
}

export default React.memo(ActionsField)
