import React, { Component } from 'react';
import LeftSidebar from './LeftSidebar';
import Main from './Main';

class MainContent extends Component {
	render() {
		return(
			<div id="main-content">
				<div className="wrapper">
					<LeftSidebar />
					<Main />
				</div>
			</div>
		)
	}
}

export default MainContent