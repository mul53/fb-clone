import React, { Component } from 'react';

class DropdownMenu extends Component {
	constructor(props) {
		super(props);
		this.state = {
			menuOpen: false
		}
		this.menu;
		this.handleClick = this.handleClick.bind(this);
		this.toggleMenu = this.toggleMenu.bind(this);
	}

	componentWillMount() {
		document.addEventListener('mousedown', this.handleClick, false);
	}

	componentWillUnmount() {
		document.removeEventListener('mousedown', this.handleClick, false);
	}

	handleClick(e) {
		// when clicked outside and pop is open
		if (!this.menu.contains(e.target) && this.state.menuOpen) {
			this.toggleMenu();
		}
	}

	toggleMenu() {
		this.setState({
			menuOpen: !this.state.menuOpen
		})
	}

	render() {
		const { menuOpen } = this.state;
		const menuCss = menuOpen ? 'navbar__social--right-icon navbar__dropdown active' : 'navbar__social--right-icon navbar__dropdown';
		return (
			<div className={menuCss} ref={node => this.menu = node}>
				<i className="f-caret-down" onClick={this.toggleMenu}></i>
				<div className="navbar__drop">
					<div className="navbar__drop--content">
						<ul className="navbar__drop--list">
							<li className="navbar__drop--list-item">Create Page</li>
							<li className="navbar__drop--list-item">Manage Page</li>
						</ul>
						<ul className="navbar__drop--list">
							<li className="navbar__drop--list-item">Create Group</li>
							<li className="navbar__drop--list-item">New Groups</li>
						</ul>
						<ul className="navbar__drop--list">
							<li className="navbar__drop--list-item">Create Ads</li>
							<li className="navbar__drop--list-item">Advertising on Facebook</li>
						</ul>
						<ul className="navbar__drop--list no-border">
							<li className="navbar__drop--list-item">Activity Log</li>
							<li className="navbar__drop--list-item">News Feed Preferences</li>
							<li className="navbar__drop--list-item">Settings</li>
							<li className="navbar__drop--list-item">Log Out</li>

						</ul>
					</div>
				</div>
			</div>
		)
	}
}

export default DropdownMenu