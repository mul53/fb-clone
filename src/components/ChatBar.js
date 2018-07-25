import React, { Component } from 'react';
import image_1 from '../images/nevas.jpg';

class ChatBar extends Component {
    render() {
        return (
            <div className="chat">
                <div className="chat__contact">
                    <div className="chat__contact--header">
                        contacts
                    </div>
                    <ul className="contact__list">
                        <li className="contact__list--item">
                            <img className="contact__list--pp" src={image_1} alt="pp-2"/>
                            <span className="contact__list--name">Nevers Mara</span>
                        </li>
                    </ul>
                </div>
                <div className="chat__status">
                    <div className="chat__status--top">
                        <i className="chat__status--icon f-ac-status">
                        </i>
                        <div className="chat__status--text">
                            <a href="">Turn on Active Status</a> to see who's available.
                        </div>
                    </div>
                    <div className="chat__status--bottom">
                        <span className="chat__status-i f-search"></span>
                        <input type="text" placeholder="Search" />
                        <span className="chat__status-i h f-s-settings"></span>
                        <span className="chat__status-i h f-edit"></span>
                        <span className="chat__status-i h f-add-group"></span>
                    </div>
                </div>
            </div>
        )
    }
}

export default ChatBar