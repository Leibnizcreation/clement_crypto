import React, { Component } from 'react';

class Category extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">

                        <div className="col-md-12">
                            <h3 className="headline centered margin-top-75">
                                Browse Categories
			</h3>
                        </div>

                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="categories-boxes-container margin-top-5 margin-bottom-30">

                                <a href="listings-list-with-sidebar.html" className="category-small-box">
                                    <i className="im im-icon-Hamburger"></i>
                                    <h4>Eat & Drink</h4>
                                </a>

                                <a href="listings-list-with-sidebar.html" className="category-small-box">
                                    <i className="im  im-icon-Sleeping"></i>
                                    <h4>Hotels</h4>
                                </a>

                                <a href="listings-list-with-sidebar.html" className="category-small-box">
                                    <i className="im im-icon-Shopping-Bag"></i>
                                    <h4>Shops</h4>
                                </a>

                                <a href="listings-list-with-sidebar.html" className="category-small-box">
                                    <i className="im im-icon-Cocktail"></i>
                                    <h4>Nightlife</h4>
                                </a>

                                <a href="listings-list-with-sidebar.html" className="category-small-box">
                                    <i className="im im-icon-Electric-Guitar"></i>
                                    <h4>Events</h4>
                                </a>

                                <a href="listings-list-with-sidebar.html" className="category-small-box">
                                    <i className="im im-icon-Dumbbell"></i>
                                    <h4>Fitness</h4>
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Category;
