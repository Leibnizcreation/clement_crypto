import React, { Component } from 'react';
import {Link} from "react-router-dom"
class Search extends Component {
    render() {
        return (
            <div>
                <div className="main-search-container dark-overlay">
                    <div className="main-search-inner">

                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <h2>Find Nearby Attractions</h2>
                                    <h4>Expolore top-rated attractions, activities and more</h4>

                                    <div className="main-search-input">

                                        <div className="main-search-input-item">
                                            <input type="text" placeholder="What are you looking for?" value="" />
                                        </div>

                                        <div className="main-search-input-item location">
                                            <input type="text" placeholder="Location" value="" />
                                            <Link to="#"><i className="fa fa-dot-circle-o"></i></Link>
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

                                        <button className="button" onClick={()=>window.location.href='listings-half-screen-map-list.html'}>Search</button>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                    <div className="video-container">
                        <video poster="images/main-search-video-poster.jpg" loop autoPlay muted>
                            <source src="images/main-search-video.mp4" type="video/mp4" />
                        </video>
                    </div>

                </div>
            </div>
        );
    }
}

export default Search;
