import React from 'react'

import styled from 'styled-components'

const StyledHeader = styled.header`
	padding: 0.75rem;
	border-bottom: 4px solid var(--color-border);
	display: flex;
	justify-content: center;
`

const Header = props => {
	return <StyledHeader>{props.children}</StyledHeader>
}

Header.Center = function HeaderCenter(props) {
	return <div className="header-center">{props.children}</div>
}

export default Header
