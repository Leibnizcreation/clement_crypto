import React, { Component } from 'react';
import Navbar from "../navbar/index"
import Footer from "../footer/index"
class Search extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div id="titlebar" className="gradient">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">

                                <h2>Search</h2><span>Explore some of the best services from around the world </span>

                                <nav id="breadcrumbs">
                                    <ul>
                                        <li><a href="/">Home</a></li>
                                        <li>search</li>
                                    </ul>
                                </nav>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">

                        <div className="col-md-12">
                            <div className="main-search-input gray-style margin-top-0 margin-bottom-10">

                                <div className="main-search-input-item">
                                    <input type="text" placeholder="What are you looking for?" value="" />
                                </div>

                                <div className="main-search-input-item location">
                                    <input type="text" placeholder="Location" value="" />
                                    <a href="#"><i className="fa fa-dot-circle-o"></i></a>
                                </div>

                                <div className="main-search-input-item">
                                    <select data-placeholder="All Categories" className="chosen-select" >
                                        <option>All Categories</option>
                                        <option>Shops</option>
                                        <option>Hotels</option>
                                        <option>Restaurants</option>
                                        <option>Fitness</option>
                                        <option>Events</option>
                                    </select>
                                </div>

                                <button className="button">Search</button>
                            </div>
                        </div>


                        <div className="col-md-12">

                            <div className="row margin-bottom-25 margin-top-30">

                                <div className="col-md-6">
                                    <div className="layout-switcher">
                                        <a href="#" className="grid active"><i className="fa fa-th"></i></a>
                                        <a href="listings-list-full-width.html" className="list"><i className="fa fa-align-justify"></i></a>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="fullwidth-filters">
                                        <div className="panel-dropdown wide float-right">
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
                                        <div className="panel-dropdown float-right">
                                            <a href="#">Distance Radius</a>
                                            <div className="panel-dropdown-content">
                                                <input className="distance-radius" type="range" min="1" max="100" step="1" value="50" data-title="Radius around selected destination" />
                                                <div className="panel-buttons">
                                                    <button className="panel-cancel">Disable</button>
                                                    <button className="panel-apply">Apply</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sort-by">
                                            <div className="sort-by-select">
                                                <select data-placeholder="Default order" className="chosen-select-no-single">
                                                    <option>Default Order</option>
                                                    <option>Highest Rated</option>
                                                    <option>Most Reviewed</option>
                                                    <option>Newest Listings</option>
                                                    <option>Oldest Listings</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="row">

                                <div className="col-lg-4 col-md-6">
                                    <a href="listings-single-page.html" className="listing-item-container compact">
                                        <div className="listing-item">
                                            <img src="images/listing-item-01.jpg" alt="" />

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
                                <div className="col-lg-4 col-md-6">
                                    <a href="listings-single-page.html" className="listing-item-container compact">
                                        <div className="listing-item">
                                            <img src="images/listing-item-02.jpg" alt="" />
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
                                <div className="col-lg-4 col-md-6">
                                    <a href="listings-single-page.html" className="listing-item-container compact">
                                        <div className="listing-item">
                                            <img src="images/listing-item-03.jpg" alt="" />
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
                                <div className="col-lg-4 col-md-6">
                                    <a href="listings-single-page.html" className="listing-item-container compact">
                                        <div className="listing-item">
                                            <img src="images/listing-item-04.jpg" alt="" />

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
                                <div className="col-lg-4 col-md-6">
                                    <a href="listings-single-page.html" className="listing-item-container compact">
                                        <div className="listing-item">
                                            <img src="images/listing-item-05.jpg" alt="" />
                                            <div className="listing-item-content">
                                                <div className="numerical-rating" data-rating="3.5"></div>
                                                <h3>Airport</h3>
                                                <span>1512 Duncan Avenue, New York</span>
                                            </div>
                                            <span className="like-icon"></span>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <a href="listings-single-page.html" className="listing-item-container compact">
                                        <div className="listing-item">
                                            <img src="images/listing-item-06.jpg" alt="" />

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

                            <div className="clearfix"></div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="pagination-container margin-top-20 margin-bottom-40">
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

                        </div>

                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Search;
