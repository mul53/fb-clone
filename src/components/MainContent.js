import React, { Component } from 'react';
import LeftSidebar from './LeftSidebar';
import Main from './Main';
import ChatBar from './ChatBar';

class MainContent extends Component {
	render() {
		return(
			<div id="main-content">
				<div className="wrapper">
					<LeftSidebar />
					<Main />
					<ChatBar />
				</div>
			</div>
		)
	}
}

export default MainContent