import React, { Component } from 'react';
import image_1 from '../images/request_1.jpg';

class FRequest extends Component {
    render() {
        return (
            <div className="request">
                <div className="request__header">
                    <div className="request__header--title">
                        Friend Requests
                    </div>
                    <div className="request__header--link">
                        See All
                    </div>
                </div>
                <ul className="request__list">
                    <li className="request__list--item">
                        <div className="request-info">
                            <div className="request-info__image">
                                <img src={image_1} alt=""/>
                            </div>
                            <div className="request-info__d">
                                <div className="request-info__d--name">
                                    Collins Chachi
                                </div>
                                <div className="request-info__d--mutual">
                                    3 mutual friends
                                </div>
                                <div className="request-info__d--btn">
                                    <button><i className="f-add-friend"></i><span>Confirm Friend</span></button>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}

export default FRequest