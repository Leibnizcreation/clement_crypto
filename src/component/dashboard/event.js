import React, { Component } from 'react';
import moment from "moment"
class Event extends Component {
    render() {
        return (


            <div classNam="row">
                {this.props.events.map((event) => (
                    <div className="col-lg-4 col-md-6">
                        <a href="listings-single-page.html" className="listing-item-container compact">
                            <div className="listing-item">
                                <img src={event.imgUrl} alt="" />
                                <div className="listing-item-details" >
                                    <ul>
                                        <li>{moment(event.checkedDate).format("LL")}</li>
                                    </ul>
                                </div>
                                <div className="listing-item-content" >
                                    <div className="numerical-rating high" data-rating="5.0"></div>
                                    <h3 style={{ textTransform: "capitalize" }}>{event.title}</h3>
                                    <span style={{ textTransform: "capitalize" }}>{event.location}</span>
                                </div>
                                <span className="like-icon"></span>
                            </div>
                        </a>
                    </div>
                ))}

            </div>
        );
    }
}

export default Event;