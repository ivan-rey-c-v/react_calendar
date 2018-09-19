import React, { Component } from 'react';
import styled from 'styled-components';

const Main = styled.main``;

export default class Month extends Component {
	render() {
		return (
			<Main>
				<header>
					<div>
						<p> - </p>
						<p> 2018 </p>
					</div>
					<div>
						<p>September</p>
					</div>
				</header>
			</Main>
		);
	}
}
