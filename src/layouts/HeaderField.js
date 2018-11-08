import React from 'react'

import styled from 'styled-components'

const Header = styled.div`
	display: flex;
	justify-content: center;
`

const HeaderField = props => {
	return <Header>{props.children}</Header>
}

export default React.memo(HeaderField)
