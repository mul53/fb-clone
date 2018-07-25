import React, { Component } from 'react';
import pp from '../images/profie_img_40.jpg.jpg';

class PostCreator extends Component {
	constructor(props) {
		super(props);
		this.state = {
			editorOpen: false
		}
		this.editor;
		this.handleClick = this.handleClick.bind(this);
		this.toggleEditor = this.toggleEditor.bind(this);
	}

	componentWillMount() {
		document.addEventListener('mousedown', this.handleClick, false);
	}

	componentWillUnmount() {
		document.removeEventListener('mousedown', this.handleClick, false);
	}

	handleClick(e) {
		// when clicked outside and pop is open
		if (!this.editor.contains(e.target) && this.state.editorOpen) {
			this.toggleEditor();
		}
	}

	toggleEditor() {
		this.setState({
			editorOpen: !this.state.editorOpen
		})
	}

	render() {
		const { editorOpen } = this.state;
		const editorCss = editorOpen ? 'post-editor active' : 'post-editor';
		return (
			<div className={editorCss}>
				<div className="post-editor__block" ref={node => this.editor = node}>
					<div className="post-editor__header">
						<ul className="post-editor__nav">
							<li className="post-editor__nav--item active">
								<span className="post-editor__nav--item-i f-pencil"></span>
								<span className="post-editor__nav--item-t">Make Post</span>
							</li>
							<li className="post-editor__nav--item d-b">
								<span className="post-editor__nav--item-i f-album"></span>
								<span className="post-editor__nav--item-t">Photo/Video Album</span>
							</li>
							<li className="post-editor__nav--item">
								<span className="post-editor__nav--item-i f-video"></span>
								<span className="post-editor__nav--item-t">Live Video</span>
							</li>
						</ul>
						<span className="post-editor__close" onClick={this.toggleEditor}></span>
					</div>
					<div className="post-editor__body">
						<div className="post-editor__body--image">
							<img src={pp} alt="profile image" />
						</div>
						<div className="post-editor__body--textarea">
							<div className="post-editor__body--textarea-pholder" onClick={this.toggleEditor}>What's on your mind?</div>
							<textarea placeholder="What's on your mind"></textarea>
						</div>
					</div>
					<div className="post-editor__footer">
						<div className="post-editor__footer--primary">
							<div className="post-editor__button">
								<i className="post-editor__button--icon f-image"></i>
								<span className="post-editor__button--text">Photo/Video</span>
							</div>
							<div className="post-editor__button">
								<i className="post-editor__button--icon f-smile"></i>
								<span className="post-editor__button--text">Feeling/Activity</span>
							</div>
							<div className="post-editor__button" onClick={this.toggleEditor}>
								<i className="post-editor__button--icon f-options"></i>
							</div>
						</div>
						<div className="post-editor__footer--secondary">
							<div className="post-editor__options">
								<div className="post-editor__options--row">
									<div className="post-editor__button">
										<i className="post-editor__button--icon f-list"></i>
										<span className="post-editor__button--text">List</span>
									</div>
									<div className="post-editor__button">
										<i className="post-editor__button--icon f-image"></i>
										<span className="post-editor__button--text">Photo/Video</span>
									</div>
								</div>
								<div className="post-editor__options--row">
									<div className="post-editor__button">
										<i className="post-editor__button--icon f-tag"></i>
										<span className="post-editor__button--text">Tag Friends</span>
									</div>
									<div className="post-editor__button">
										<i className="post-editor__button--icon f-smile"></i>
										<span className="post-editor__button--text">Feeling/Activity</span>
									</div>
								</div>
								<div className="post-editor__options--row">
									<div className="post-editor__button">
										<i className="post-editor__button--icon f-sticker"></i>
										<span className="post-editor__button--text">Sticker</span>
									</div>
									<div className="post-editor__button">
										<i className="post-editor__button--icon f-check"></i>
										<span className="post-editor__button--text">Check in</span>
									</div>
								</div>
								<div className="post-editor__options--row">
									<div className="post-editor__button">
										<i className="post-editor__button--icon f-tag-event"></i>
										<span className="post-editor__button--text">Tag Event</span>
									</div>
									<div className="post-editor__button">
										<i className="post-editor__button--icon f-gif"></i>
										<span className="post-editor__button--text">GIF</span>
									</div>
								</div>
							</div>
							<div className="post-editor__submit">
								<div className="post-editor__submit--public">
									<i className="post-editor__submit-icon f-world"></i>
									Public
								</div>
								<div className="post-editor__submit--btn">Post</div>
							</div>
						</div>
					</div>
				</div>
				<div className="post-editor__presentation"></div>
			</div>
		)
	}
}

export default PostCreator