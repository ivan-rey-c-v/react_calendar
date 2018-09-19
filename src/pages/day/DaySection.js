import React, { Component } from 'react';
import styled from 'styled-components';

import AddButton from './AddButton';

const Section = styled.section`
	background-color: lightblue;
	width: 100%;
	height: calc(100% - 2.5rem);
	min-height: 350px;
	position: relative;
`;

export default class DaySection extends Component {
	render() {
		return (
			<Section>
				<AddButton onClick={this.props.onClick} />
			</Section>
		);
	}
}
