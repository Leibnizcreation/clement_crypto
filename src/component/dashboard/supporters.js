import React, { Component } from 'react';

class Supporters extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (

            <div className="row">

                <div className="col-lg-12 col-md-12">
                    <div className="dashboard-list-box margin-top-0">
                        <h4>Supporters Listings</h4>
                        <ul>
                            {this.props.supporters.map((artist) => (
                                <li>
                                    <div className="list-box-listing">
                                        <div className="list-box-listing-img"><a href="#"><img src={`${artist.dpUrl}`}alt="" /></a></div>
                                        <div className="list-box-listing-content">
                                            <div className="inner" style={{textTransform:"capitalize"}}>
                                                <h3><a href="#" style={{ textTransform: "capitalize" }}>{artist.firstName} {artist.lastName}</a></h3>
                                                <span style={{ textTransform: "capitalize" }}>{artist.location}</span>
                                                <div className="star-rating" data-rating="3.5">
                                                    <div className="rating-counter">({artist.views} views)</div>
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

export default Supporters;