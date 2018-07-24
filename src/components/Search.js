import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Search extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isInputFocus: false
		}
		this.toggleBtn = this.toggleBtn.bind(this);
	}

	toggleBtn() {
		this.setState({
			isInputFocus: !this.state.isInputFocus
		})
	}

	render() {
		const searchButtonCss = this.state.isInputFocus ? 'navbar__search--button active' : 'navbar__search--button';
		return (
			<div className="navbar__search">
				<div className="navbar__search--input" onFocus={this.toggleBtn} onBlur={this.toggleBtn}>
					<input type="text" placeholder="Search" ref="search"/>
				</div>
				<div className={searchButtonCss}>
					<button>
						<i className="navbar__search--icon"></i>
					</button>
				</div>
			</div>
		)
	}
}

export default Search