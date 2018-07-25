import React, { Component } from 'react';
import image_1 from '../images/story_1.jpg';

class Stories extends Component {
    render() {
        return (
            <div className="stories">
                <div className="stories__header">
                    <div className="stories__header--title">
                        Stories
                    </div>
                    <div className="stories__header--i f-option-s">
                    </div>
                </div>
                <div className="stories__body">
                    <ul className="stories__list">
                        <li className="stories__list--item">
                            <div className="story">
                                <div className="story__author">
                                    <div className="story__author--image">
                                        <img src={image_1} alt=""/>
                                    </div>
                                    <div className="story__author--info">
                                        <div className="story__author--name">
                                            Makasa Lee Marley
                                        </div>
                                        <div className="story__author--l-seen">
                                            15 hours ago
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Stories