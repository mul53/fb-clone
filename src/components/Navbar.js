import React from 'react';
import Search from './Search';
import SocialBar from './SocialBar';

const Navbar = props => {
	return (
		<div className="navbar">
			<div className="navbar__wrapper">
				<div className="navbar__left">
					<div className="navbar__brand">
						<a href="/" className="navbar__brand--logo">
							<i className="navbar__brand--logo-icon"></i>
						</a>
					</div>
					<Search />
				</div>
				<div className="navbar__right">
					<SocialBar />
				</div>
			</div>
		</div>
	)
}

export default Navbar