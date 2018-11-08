import React from 'react'

import styled from 'styled-components'

const Wrapper = styled.div`
	padding: 0.15rem 0.5rem;
	color: var(--color-box-foreground);
	background-color: var(--color-box);
	font-weight: 600;
	font-size: 125%;
	letter-spacing: 1.25px;
`

const Box = props => {
	return <Wrapper>{props.children}</Wrapper>
}

export default React.memo(Box)
