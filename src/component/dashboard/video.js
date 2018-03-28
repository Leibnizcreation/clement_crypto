import React, { Component } from 'react';

class Video extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (

            <div className="row">

                <div className="col-lg-12 col-md-12">
                    <div className="dashboard-list-box margin-top-0">
                        <h4>Video Listings</h4>
                        <ul>
                            {this.props.videos.map((video) => (
                                <li>
                                    <div className="list-box-listing">
                                        <div className="list-box-listing-img"><a href="#"><img src={`${video.imgUrl}`}alt="" /></a></div>
                                        <div className="list-box-listing-content">
                                            <div className="inner" style={{textTransform:"capitalize"}}>
                                                <h3><a href="#" style={{ textTransform: "capitalize" }}>{video.title} </a></h3>
                                                <span style={{ textTransform: "capitalize" }}>date {video.date}</span>
                                                <div className="star-rating" data-rating="3.5">
                                                    <div className="rating-counter">(12 reviews)</div>
                                                    <span className="star"></span><span className="star"></span><span className="star"></span><span className="star half"></span><span className="star empty"></span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="buttons-to-right">
                                        <a href="#" className="button gray"><i className="sl sl-icon-note"></i> Edit</a>
                                        <a href="#" className="button gray"><i className="sl sl-icon-close"></i> Delete</a>
                                    </div>
                                </li>
                            ))}


                        </ul>
                    </div>
                </div>


            </div>
        );
    }
}

export default Video;