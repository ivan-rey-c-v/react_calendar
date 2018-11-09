import React from 'react'

import styled from 'styled-components'

const Div = styled.div`
	display: flex;
	flex-direction: column;
	width: 90%;
	min-width: 300px;
	max-width: 550px;
	background-color: white;
	padding: 1.5rem;
`

const FeatureLayout = props => {
	return <Div {...props}>{props.children}</Div>
}

export default React.memo(FeatureLayout)
