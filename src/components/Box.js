import React from 'react'

import styled from 'styled-components'

const Wrapper = styled.div`
	padding: 0.25rem 0.75rem;
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
