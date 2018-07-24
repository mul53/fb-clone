import React, { Component } from 'react';

class HelpMenu extends Component {
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
		const menuCss = menuOpen ? 'navbar__social--right-icon help-menu active' : 'navbar__social--right-icon help-menu'
		return (
			<div className={menuCss} ref={node => this.menu = node}>
				<i className="f-help" onClick={this.toggleMenu}></i>
				<div className="help-menu__dropdown">
				  <div className="help-menu__dropdown--block frst">
				  	<div className="help-menu__header">
				  		<div className="help-menu__header--h1">Quick Help</div>
				  		<a className="help-menu__header--link" href="/">Help Center</a>
				  	</div>
				  	<div className="help-menu__search">
				  		<input type="text" placeholder="How can we help?" />
				  		<span className="f-search"></span>
				  	</div>
				  	<div className="help-menu__list">
				  		<div className="help-menu__list--header">
				  			help with this page
				  		</div>
				  		<ul className="help-menu__list--block">
				  			<li className="help-menu__list--item">
				  				<span className="help-menu__list--item-t">Home Page</span>
				  				<span className="help-menu__list--item-i"></span>
				  			</li> 
				  			<li className="help-menu__list--item">
				  				<span className="help-menu__list--item-t">Timeline</span>
				  				<span className="help-menu__list--item-i"></span>
				  			</li> 
				  			<li className="help-menu__list--item">
				  				<span className="help-menu__list--item-t">Chats and Messages</span>
				  				<span className="help-menu__list--item-i"></span>
				  			</li> 
				  			<li className="help-menu__list--item">
				  				<span className="help-menu__list--item-t">Account Security</span>
				  				<span className="help-menu__list--item-i"></span>
				  			</li> 
				  			<li className="help-menu__list--item">
				  				<span className="help-menu__list--item-t">Privacy</span>
				  				<span className="help-menu__list--item-i"></span>
				  			</li> 
				  		</ul>
				  	</div>
				  </div>
				  <div className="help-menu__dropdown--block mr-t">
				  	<ul className="help-menu__list-2">
				  		<li className="help-menu__list-2--item br-b">
				  			<i className="fa-lock help-menu__list-2--item-i"></i>
				  			<span>Privacy Checkup</span>
				  		</li>
				  		<li className="help-menu__list-2--item">
				  			<i className="fa-setting help-menu__list-2--item-i"></i>
				  			<span>Privacy Shortcuts</span>
				  		</li>
				  	</ul>
				  </div>
				  <div className="help-menu__dropdown--block mr-t">
				  	<ul className="help-menu__list-2">
				  		<li className="help-menu__list-2--item br-b">
				  			<i className="fa-mail help-menu__list-2--item-i"></i>
				  			<span>Support Inbox</span>
				  		</li>
				  		<li className="help-menu__list-2--item">
				  			<i className="fa-bubble help-menu__list-2--item-i"></i>
				  			<span>Report a Problem</span>
				  		</li>
				  	</ul>
				  </div>
				</div>
			</div>
		)
	}
}

export default HelpMenu