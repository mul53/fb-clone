import React from 'react';
import PostCreator from './PostCreator';
import Stories from './Stories';
import FRequest from './FRequests';

const Main = () => {
	return (
		<div className="main">
			<div className="left-col">
				<PostCreator />
			</div>
			<div className="right-col">
				<Stories />
				<FRequest />
			</div>
		</div>
	)
}

export default Main