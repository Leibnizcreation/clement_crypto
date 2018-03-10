import React, { Component } from 'react';
import Navbar from "../navbar/index"
import Footer from "../footer/index"
class City extends Component {
    render() {
        return (
            <div >
                < Navbar />
                <div className="fs-container">

                    <div className=" content">
                        <div className="fs-content">

                            <section className="search" style={{ paddingBottom: "0px" }}>

                                <div className="row">
                                    <div className="col-md-12">

                                        <div className="row with-forms">

                                            <div className="col-lg-23">
                                                <div className="input-with-icon">
                                                    <i className="sl sl-icon-magnifier"></i>
                                                    <input type="text" placeholder="What are you looking for?" />
                                                </div>
                                            </div>

                                            <div className="col-fs-12">

                                                <div className="panel-dropdown">
                                                    <a href="#">Categories</a>
                                                    <div className="panel-dropdown-content checkboxes categories">

                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <input id="check-1" type="checkbox" name="check" checked className="all" />
                                                                <label for="check-1">All Categories</label>

                                                                <input id="check-2" type="checkbox" name="check" />
                                                                <label for="check-2">Shops</label>

                                                                <input id="check-3" type="checkbox" name="check" />
                                                                <label for="check-3">Hotels</label>
                                                            </div>

                                                            <div className="col-md-6">
                                                                <input id="check-4" type="checkbox" name="check" />
                                                                <label for="check-4">Eat & Drink</label>

                                                                <input id="check-5" type="checkbox" name="check" />
                                                                <label for="check-5">Fitness</label>

                                                                <input id="check-6" type="checkbox" name="check" />
                                                                <label for="check-6">Events</label>
                                                            </div>
                                                        </div>

                                                        <div className="panel-buttons">
                                                            <button className="panel-cancel">Cancel</button>
                                                            <button className="panel-apply">Apply</button>
                                                        </div>

                                                    </div>
                                                </div>

                                                <div className="panel-dropdown wide">
                                                    <a href="#">More Filters</a>
                                                    <div className="panel-dropdown-content checkboxes">

                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <input id="check-a" type="checkbox" name="check" />
                                                                <label for="check-a">Elevator in building</label>

                                                                <input id="check-b" type="checkbox" name="check" />
                                                                <label for="check-b">Friendly workspace</label>

                                                                <input id="check-c" type="checkbox" name="check" />
                                                                <label for="check-c">Instant Book</label>

                                                                <input id="check-d" type="checkbox" name="check" />
                                                                <label for="check-d">Wireless Internet</label>
                                                            </div>

                                                            <div className="col-md-6">
                                                                <input id="check-e" type="checkbox" name="check" />
                                                                <label for="check-e">Free parking on premises</label>

                                                                <input id="check-f" type="checkbox" name="check" />
                                                                <label for="check-f">Free parking on street</label>

                                                                <input id="check-g" type="checkbox" name="check" />
                                                                <label for="check-g">Smoking allowed</label>

                                                                <input id="check-h" type="checkbox" name="check" />
                                                                <label for="check-h">Events</label>
                                                            </div>
                                                        </div>

                                                        <div className="panel-buttons">
                                                            <button className="panel-cancel">Cancel</button>
                                                            <button className="panel-apply">Apply</button>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div className="panel-dropdown">
                                                    <a href="#">Distance Radius</a>
                                                    <div className="panel-dropdown-content">
                                                        <input className="distance-radius" type="range" min="1" max="100" step="1" value="50" data-title="Radius around selected destination" />
                                                        <div className="panel-buttons">
                                                            <button className="panel-cancel">Disable</button>
                                                            <button className="panel-apply">Apply</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="listings-container margin-top-30">
                                <div className="row fs-listings">

                                    <div className="col-lg-3 col-md-6">
                                        <a href="listings-single-page.html" className="listing-item-container compact" data-marker-id="1">
                                            <div className="listing-item">
                                                <img src="../../images/listing-item-01.jpg" alt="" />

                                                <div className="listing-badge now-open">Now Open</div>

                                                <div className="listing-item-content">
                                                    <div className="numerical-rating" data-rating="3.5"></div>
                                                    <h3>Tom's Restaurant <i className="verified-icon"></i></h3>
                                                    <span>964 School Street, New York</span>
                                                </div>
                                                <span className="like-icon"></span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <a href="listings-single-page.html" className="listing-item-container compact" data-marker-id="2">
                                            <div className="listing-item">
                                                <img src="../../images/listing-item-02.jpg" alt="" />
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
                                    <div className="col-lg-3 col-md-12">
                                        <a href="listings-single-page.html" className="listing-item-container compact" data-marker-id="3">
                                            <div className="listing-item">
                                                <img src="../../images/listing-item-03.jpg" alt="" />
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
                                    <div className="col-lg-3 col-md-12">
                                        <a href="listings-single-page.html" className="listing-item-container compact" data-marker-id="4">
                                            <div className="listing-item">
                                                <img src="../../images/listing-item-04.jpg" alt="" />

                                                <div className="listing-badge now-open">Now Open</div>

                                                <div className="listing-item-content">
                                                    <div className="numerical-rating" data-rating="5.0"></div>
                                                    <h3>Burger House <i className="verified-icon"></i></h3>
                                                    <span>2726 Shinn Street, New York</span>
                                                </div>
                                                <span className="like-icon"></span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-lg-3 col-md-12">
                                        <a href="listings-single-page.html" className="listing-item-container compact" data-marker-id="5">
                                            <div className="listing-item">
                                                <img src="../../images/listing-item-05.jpg" alt="" />
                                                <div className="listing-item-content">
                                                    <div className="numerical-rating" data-rating="3.5"></div>
                                                    <h3>Airport</h3>
                                                    <span>1512 Duncan Avenue, New York</span>
                                                </div>
                                                <span className="like-icon"></span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-lg-3 col-md-12">
                                        <a href="listings-single-page.html" className="listing-item-container compact" data-marker-id="6">
                                            <div className="listing-item">
                                                <img src="../../images/listing-item-06.jpg" alt="" />

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
                                <div className="row fs-listings">
                                    <div className="col-md-12">

                                        <div className="clearfix"></div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="pagination-container margin-top-15 margin-bottom-40">
                                                    <nav className="pagination">
                                                        <ul>
                                                            <li><a href="#" className="current-page">1</a></li>
                                                            <li><a href="#">2</a></li>
                                                            <li><a href="#">3</a></li>
                                                            <li><a href="#"><i className="sl sl-icon-arrow-right"></i></a></li>
                                                        </ul>
                                                    </nav>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="clearfix"></div>

                                        <div className="copyrights margin-top-0">© 2017 Listeo. All Rights Reserved.</div>

                                    </div>
                                </div>
                            </section>

                        </div>
                    </div >
                    {/* <div className="fs-inner-container map-fixed">

                        <div id="map-container">
                            <div id="map" data-map-zoom="9" data-map-scroll="true">
                            </div>
                        </div>

                    </div> */}
                </div >
                <div className="clearfix"></div>
                <div>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default City;
