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
                            <div className="categories-boxes-container margin-top-5 ">

                                <a href="listings-list-with-sidebar.html" className="category-small-box">
                                    <i className="im im-icon-Add-UserStar"></i>
                                    <h4>Consultation</h4>
                                </a>

                                <a href="listings-list-with-sidebar.html" className="category-small-box">
                                    <i className="im  im-icon-Hair"></i>
                                    <h4>Natural Hair Services</h4>
                                </a>

                                <a href="listings-list-with-sidebar.html" className="category-small-box">
                                    <i className="im im-icon-Hair-3"></i>
                                    <h4>Relaxed Hair Styles</h4>
                                </a>

                                <a href="listings-list-with-sidebar.html" className="category-small-box">
                                    <i className="im im-icon-Hair-4"></i>
                                    <h4>Weave</h4>
                                </a>

                                <a href="listings-list-with-sidebar.html" className="category-small-box">
                                    <i className="im im-icon-Hair"></i>
                                    <h4>Wigs</h4>
                                </a>

                                <a href="listings-list-with-sidebar.html" className="category-small-box">
                                    <i className="im im-icon-Hair"></i>
                                    <h4>Short Hair Cuts</h4>
                                </a>

                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="categories-boxes-container margin-top-5">

                                <a href="listings-list-with-sidebar.html" className="category-small-box">
                                    <i className="im im-icon-Baby"></i>
                                    <h4>Kids Hair</h4>
                                </a>

                                <a href="listings-list-with-sidebar.html" className="category-small-box">
                                    <i className="im  im-icon-Business-Man"></i>
                                    <h4>Mens Hair Style</h4>
                                </a>

                                <a href="listings-list-with-sidebar.html" className="category-small-box">
                                    <i className="im im-icon-Knife"></i>
                                    <h4>Nail Services</h4>
                                </a>

                                <a href="listings-list-with-sidebar.html" className="category-small-box">
                                    <i className="im  im-icon-Chair"></i>
                                    <h4>Message/Spa Services</h4>
                                </a>

                                <a href="listings-list-with-sidebar.html" className="category-small-box">
                                    <i className="im im-icon-Sports-Clothings2"></i>
                                    <h4>Clothing Styles</h4>
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
