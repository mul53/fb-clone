import React, { Component } from 'react';
import Navbar from './Navbar';
import MainContent from './MainContent';

class HomeContainer extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<MainContent />
			</div>
		)
	}
}

export default HomeContainer