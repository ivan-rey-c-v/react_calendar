import React from 'react'
import { Link } from '@reach/router'

import styled from 'styled-components'

const Wrapper = styled.main`
	height: 100vh;
	width: 100vw;
	padding-top: 5rem;

	> div {
		margin: 0 auto;
		font-size: 1.75rem;

		display: flex;
		flex-direction: column;
		align-items: center;

		p {
			text-align: center;
		}

		span {
			margin-top: 2rem;

			a {
				color: darkviolet;

				:hover {
					opacity: 0.75;
				}
			}
		}
	}
`

const NotFound = props => {
	return (
		<Wrapper>
			<div>
				<h1>
					4
					<span role="img" aria-label="confused emoji">
						😕
					</span>
					4
				</h1>
				<p>Page Not Found!</p>
				<span>
					<Link to="/">Go to Homepage</Link>
				</span>
			</div>
		</Wrapper>
	)
}

export default React.memo(NotFound)
