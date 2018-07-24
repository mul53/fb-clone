import React from 'react';
import pp from '../images/profie_img_24.jpg';

const LeftSidebar = () => {
	return (
		<div class="left-sidebar">
			<div className="left-sidebar__list">
				<ul className="left-sidebar__list--block">
					<li className="left-sidebar__list--item options" title="Jon Snow">
						<div className="left-sidebar__list--item-l">
							<img className="l-sidebar--img" src={pp} />
							<span className="l-sidebar--text">Jon Snow</span>
						</div>
						<div className="left-sidebar__list--item-r">
							<i className="f-options"></i>
						</div>
					</li>
				</ul>
				<ul className="left-sidebar__list--block mr-t-10">
					<li className="left-sidebar__list--item active options">
						<div className="left-sidebar__list--item-l">
							<i className="l-sidebar--icon f-feed"></i>
							<span className="l-sidebar--text">News Feed</span>
						</div>
						<div className="left-sidebar__list--item-r">
							<i className="f-options"></i>
						</div>
					</li>
					<li className="left-sidebar__list--item">
						<div className="left-sidebar__list--item-l">
							<i className="l-sidebar--icon f-messenger"></i>
							<span className="l-sidebar--text">Messenger</span>
						</div>
						<div className="left-sidebar__list--item-r">
							<i className="f-options"></i>
						</div>
					</li>
				</ul>
				<ul className="left-sidebar__list--block mr-t-10">
					<div className="left-sidebar__list--header">
						Explore
					</div>
					<li className="left-sidebar__list--item">
						<div className="left-sidebar__list--item-l">
							<i className="l-sidebar--icon f-events"></i>
							<span className="l-sidebar--text">Events</span>
						</div>
						<div className="left-sidebar__list--item-r">
							<i className="f-options"></i>
						</div>
					</li>
					<li className="left-sidebar__list--item">
						<div className="left-sidebar__list--item-l">
							<i className="l-sidebar--icon f-pages"></i>
							<span className="l-sidebar--text">Pages</span>
						</div>
						<div className="left-sidebar__list--item-r">
							<i className="f-options"></i>
						</div>
					</li>
					<li className="left-sidebar__list--item">
						<div className="left-sidebar__list--item-l">
							<i className="l-sidebar--icon f-groups"></i>
							<span className="l-sidebar--text">Groups</span>
						</div>
						<div className="left-sidebar__list--item-r">
							<i className="f-options"></i>
						</div>
					</li>
					<li className="left-sidebar__list--item">
						<div className="left-sidebar__list--item-l">
							<i className="l-sidebar--icon f-flist"></i>
							<span className="l-sidebar--text">Friend Lists</span>
						</div>
						<div className="left-sidebar__list--item-r">
							<i className="f-options"></i>
						</div>
					</li>
					<li className="left-sidebar__list--item">
						<div className="left-sidebar__list--item-l">
							<i className="l-sidebar--icon f-memories"></i>
							<span className="l-sidebar--text">Memories</span>
						</div>
						<div className="left-sidebar__list--item-r">
							<i className="f-options"></i>
						</div>
					</li>
					<li className="left-sidebar__list--item">
						<div className="left-sidebar__list--item-l">
							<i className="l-sidebar--icon f-page-feed"></i>
							<span className="l-sidebar--text">Pages Feed</span>
						</div>
						<div className="left-sidebar__list--item-r">
							<i className="f-options"></i>
						</div>
					</li>
					<li className="left-sidebar__list--item">
						<div className="left-sidebar__list--item-l">
							<i className="l-sidebar--icon f-f-friends"></i>
							<span className="l-sidebar--text">Find Friends</span>
						</div>
						<div className="left-sidebar__list--item-r">
							<i className="f-options"></i>
						</div>
					</li>
					<li className="left-sidebar__list--item">
						<div className="left-sidebar__list--item-l">
							<i className="l-sidebar--icon f-insights"></i>
							<span className="l-sidebar--text">Insights</span>
						</div>
						<div className="left-sidebar__list--item-r">
							<i className="f-options"></i>
						</div>
					</li>
					<li className="left-sidebar__list--item">
						<div className="left-sidebar__list--item-l">
							<i className="l-sidebar--icon f-games"></i>
							<span className="l-sidebar--text">Games</span>
						</div>
						<div className="left-sidebar__list--item-r">
							<i className="f-options"></i>
						</div>
					</li>
					<li className="left-sidebar__list--item">
						<div className="left-sidebar__list--item-l">
							<i className="l-sidebar--icon f-photos"></i>
							<span className="l-sidebar--text">Photos</span>
						</div>
						<div className="left-sidebar__list--item-r">
							<i className="f-options"></i>
						</div>
					</li>
				</ul>
				<ul className="left-sidebar__list--block">
					<div className="left-sidebar__list--header mr-t-10">
						Create
					</div>
					<li className="left-sidebar__list--item-n"><a href="/">Ad </a>·<a href="/"> Page </a>·<a href="/"> Group </a>·<a href="/"> Event </a></li>
				</ul>
			</div>
		</div>
	)
}

export default LeftSidebar