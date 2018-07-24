import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import pp from '../images/profile_img_100.jpg';
import a_icon from '../icons/add_icon.png';

class AccountSwitcher extends Component {
	constructor(props) {
		super(props);
		this.state = {
			aSwitcherOpen: false
		}
		this.pop;
		this.handleClick = this.handleClick.bind(this);
		this.togglePopUp = this.togglePopUp.bind(this);
	}

	componentWillMount() {
		document.addEventListener('mousedown', this.handleClick, false);
	}

	componentWillUnmount() {
		document.removeEventListener('mousedown', this.handleClick, false);
	}

	handleClick(e) {
		// when clicked outside and pop is open
		if (!this.pop.contains(e.target) && this.state.aSwitcherOpen) {
			this.togglePopUp(e);
		}
	}

	togglePopUp(event) {
		event.preventDefault();
		this.setState({
			aSwitcherOpen: !this.state.aSwitcherOpen
		});
	}

	render() {
		const { aSwitcherOpen } = this.state;
		const aSwitcherBtnCss = aSwitcherOpen ? 'a-switcher__btn active' : 'a-switcher__btn';
		const aSwitcherPopUpCss = aSwitcherOpen ? 'a-switcher__pop-up active' : 'a-switcher__pop-up'
		return (
			<div id="a-switcher" className="double-border" ref={node => this.pop = node}>
				<a className={aSwitcherBtnCss} href="/" onClick={this.togglePopUp}>
					<i className="a-switcher__btn--icon"></i>
				</a>
				<div className={aSwitcherPopUpCss}>
					<div className="a-switcher__pop-up--header">
						<div className="a-switcher__pop-up--header-h1">
							Log Into Another Account
						</div>
						<i className="a-switcher__pop-up--header-icon"></i>
					</div>
					<div className="a-switcher__pop-up--p">
						You'll be logged out first. Then someone else can log in or add their account.
					</div>
					<div className="a-switcher__accounts">
						<button className="a-switcher__account active">
							<div className="a-switcher__account--content">
								<div className="a-switcher__account--image">
									<img src={pp} alt="profile-picture-2" />
								</div>
								<div className="a-switcher__account--name">
									Harry
								</div>
							</div>
							<span className="a-switcher__account--status-i"></span>
						</button>
						<button className="a-switcher__account add">
							<div className="a-switcher__account--content">
								<div className="a-switcher__account--add">
									<img src={a_icon} className="f-add-account" width="24px" height="24px" />
								</div>
								<div className="a-switcher__account--name">
									Add Account
								</div>
							</div>
							<span className="a-switcher__account--status-i"></span>
						</button>
					</div>
				</div>
			</div>
		)
	}
}

export default AccountSwitcher