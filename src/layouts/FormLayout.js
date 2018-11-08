import React from 'react'

import styled from 'styled-components'

const Form = styled.form`
	display: flex;
	flex-direction: column;
	width: 90%;
	min-width: 300px;
	max-width: 550px;
	background-color: white;
	padding: 1.5rem;
`

const FormLayout = props => {
	return <Form>{props.children}</Form>
}

export default React.memo(FormLayout)
