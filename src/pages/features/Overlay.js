import React from 'react'

import styled from 'styled-components'

const Div = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;

	display: flex;
	justify-content: center;
	align-items: center;

	background-color: rgba(107, 107, 107, 0.95);
`

const Overlay = props => {
	return <Div {...props}>{props.children}</Div>
}

export default React.memo(Overlay)
