import React, { Component } from 'react';

class Mostvisited extends Component {
    render() {
        return (
            <div>
                <section className="fullwidth margin-top-65 padding-top-75 padding-bottom-70" data-background-color="#f8f8f8">

                    <div className="container">
                        <div className="row">

                            <div className="col-md-12">
                                <h3 className="headline centered margin-bottom-45">
                                    Most Visited Places
					<span>Discover top-rated local businesses</span>
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="simple-fw-slick-carousel dots-nav">

                        <div className="fw-carousel-item">
                            <a href="listings-single-page.html" className="listing-item-container compact">
                                <div className="listing-item">
                                    <img src="images/listing-item-01.jpg" alt="bbimg" />

                                    <div className="listing-badge now-open">Now Open</div>

                                    <div className="listing-item-content">
                                        <div className="numerical-rating" data-rating="3.5"></div>
                                        <h3>Tom's Restaurant</h3>
                                        <span>964 School Street, New York</span>
                                    </div>
                                    <span className="like-icon"></span>
                                </div>
                            </a>
                        </div>
                        <div className="fw-carousel-item">
                            <a href="listings-single-page.html" className="listing-item-container compact">
                                <div className="listing-item">
                                    <img src="images/listing-item-02.jpg" alt="bbimg" />
                                    <div className="listing-item-details">
                                        <ul>
                                            <li>Friday, August 10</li>
                                        </ul>
                                    </div>
                                    <div className="listing-item-content">
                                        <div className="numerical-rating" data-rating="5.0"></div>
                                        <h3>Sticky Band</h3>
                                        <span>Bishop Avenue, New York</span>
                                    </div>
                                    <span className="like-icon"></span>
                                </div>
                            </a>
                        </div>
                        <div className="fw-carousel-item">
                            <a href="listings-single-page.html" className="listing-item-container compact">
                                <div className="listing-item">
                                    <img src="images/listing-item-03.jpg" alt="bbimg" />
                                    <div className="listing-item-details">
                                        <ul>
                                            <li>Starting from $59 per night</li>
                                        </ul>
                                    </div>
                                    <div className="listing-item-content">
                                        <div className="numerical-rating" data-rating="2.0"></div>
                                        <h3>Hotel Govendor</h3>
                                        <span>778 Country Street, New York</span>
                                    </div>
                                    <span className="like-icon"></span>
                                </div>

                            </a>
                        </div>
                        <div className="fw-carousel-item">
                            <a href="listings-single-page.html" className="listing-item-container compact">
                                <div className="listing-item">
                                    <img src="images/listing-item-04.jpg" alt="bbimg" />

                                    <div className="listing-badge now-open">Now Open</div>

                                    <div className="listing-item-content">
                                        <div className="numerical-rating" data-rating="5.0"></div>
                                        <h3>Burger House</h3>
                                        <span>2726 Shinn Street, New York</span>
                                    </div>
                                    <span className="like-icon"></span>
                                </div>
                            </a>
                        </div>
                        <div className="fw-carousel-item">
                            <a href="listings-single-page.html" className="listing-item-container compact">
                                <div className="listing-item">
                                    <img src="images/listing-item-05.jpg" alt="bbimg" />
                                    <div className="listing-item-content">
                                        <div className="numerical-rating" data-rating="3.5"></div>
                                        <h3>Airport</h3>
                                        <span>1512 Duncan Avenue, New York</span>
                                    </div>
                                    <span className="like-icon"></span>
                                </div>
                            </a>
                        </div>
                        <div className="fw-carousel-item">
                            <a href="listings-single-page.html" className="listing-item-container compact">
                                <div className="listing-item">
                                    <img src="images/listing-item-06.jpg" alt="bbimg" />

                                    <div className="listing-badge now-closed">Now Closed</div>

                                    <div className="listing-item-content">
                                        <div className="numerical-rating" data-rating="4.5"></div>
                                        <h3>Think Coffee</h3>
                                        <span>215 Terry Lane, New York</span>
                                    </div>
                                    <span className="like-icon"></span>
                                </div>
                            </a>
                        </div>
                    </div>

                </section>
            </div>
        );
    }
}

export default Mostvisited;
