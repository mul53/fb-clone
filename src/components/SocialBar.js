import React from 'react';
import profile_default from '../images/default_profile_img.jpg'
import AccountSwitcher from './AccountSwitcher';
import HelpMenu from './HelpMenu';
import DropdownMenu from './DropdownMenu';

const SocialBar = props => {
	return (
		<ul className="navbar__social">
			<li className="navbar__social--profile">
				<img src={profile_default} alt="profile-image" /><span className="navbar__social--profile-text">Jon</span>
			</li>
			<li className="navbar__social--account">
				<AccountSwitcher />
			</li>
			<li className="navbar__social--link border-right">
				<a href="/">Home</a>
			</li>
			<li className="navbar__social--link">
				<a href="/">Find Friends</a>
			</li>
			<li className="navbar__social--group double-border">
				<div className="navbar__social--group-item">
					<i className="f-request"></i>
				</div>
				<div className="navbar__social--group-item">
					<i className="f-messenger"></i>
				</div>
				<div className="navbar__social--group-item active">
					<i className="f-notif"></i>
					<span className="f-notif--n">1</span>
				</div>
			</li>
			<li className="navbar__social--right">
				<HelpMenu />
				<DropdownMenu />
			</li>
		</ul>
	)
}

export default SocialBar