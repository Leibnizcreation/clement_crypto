import React, { Component } from 'react';
import Sidebar from "./sidebar"
import { Link } from "react-router-dom"
import classnames from "classnames"
import { connect } from "react-redux"
import { bindActionCreator } from "redux"
import setAuthorizationToken from "../auth"
import auth from "../../reducer/index"
import $ from "jquery"
function mapStateToProps(state) {
    return {
        auth: state.auth,
    }
}
class Navbar extends Component {


    logout() {
        localStorage.removeItem("jwToken");
        setAuthorizationToken(false);
        var url = window.location.pathname;
        window.location.assign("/")
    }
    render() {
        return (
            <div className="setnav" >
                <header id="header-container">

                    <div id="header">
                        <div className="container">

                            <div className="left-side">

                                <div id="logo">
                                    <Link to="index.html">
                                    {/* BlackBooked */}
                                    <img src="images/logo.png" alt="" />
                                    </Link>
                                </div>

                                <div className="mmenu-trigger">
                                    <button className="hamburger hamburger--collapse" type="button">
                                        <span className="hamburger-box">
                                            <span className="hamburger-inner"></span>
                                        </span>
                                    </button>
                                </div>

                                <nav id="navigation" className="style-1">
                                    <ul id="responsive">

                                        <li><Link className="current" to="#">Home</Link>
                                            <ul>
                                                <li><Link to="index.html">Home 1</Link></li>
                                                <li><Link to="index-2.html">Home 2</Link></li>
                                                <li><Link to="index-3.html">Home 3</Link></li>
                                                <li><Link to="index-4.html">Home 4</Link></li>
                                            </ul>
                                        </li>

                                        <li><Link to="#">Listings</Link>
                                            <ul>
                                                <li><Link to="#">List Layout</Link>
                                                    <ul>
                                                        <li><Link to="listings-list-with-sidebar.html">With Sidebar</Link></li>
                                                        <li><Link to="listings-list-full-width.html">Full Width</Link></li>
                                                        <li><Link to="listings-list-full-width-with-map.html">Full Width + Map</Link></li>
                                                    </ul>
                                                </li>
                                                <li><Link to="#">Grid Layout</Link>
                                                    <ul>
                                                        <li><Link to="listings-grid-with-sidebar-1.html">With Sidebar 1</Link></li>
                                                        <li><Link to="listings-grid-with-sidebar-2.html">With Sidebar 2</Link></li>
                                                        <li><Link to="listings-grid-full-width.html">Full Width</Link></li>
                                                        <li><Link to="listings-grid-full-width-with-map.html">Full Width + Map</Link></li>
                                                    </ul>
                                                </li>
                                                <li><Link to="#">Half Screen Map</Link>
                                                    <ul>
                                                        <li><Link to="listings-half-screen-map-list.html">List Layout</Link></li>
                                                        <li><Link to="listings-half-screen-map-grid-1.html">Grid Layout 1</Link></li>
                                                        <li><Link to="listings-half-screen-map-grid-2.html">Grid Layout 2</Link></li>
                                                    </ul>
                                                </li>
                                                <li><Link to="listings-single-page.html">Single Listing</Link></li>
                                            </ul>
                                        </li>

                                        <li><Link to="#">User Panel</Link>
                                            <ul>
                                                <li><Link to="dashboard.html">Dashboard</Link></li>
                                                <li><Link to="dashboard-messages.html">Messages</Link></li>
                                                <li><Link to="dashboard-bookings.html">Bookings</Link></li>
                                                <li><Link to="dashboard-my-listings.html">My Listings</Link></li>
                                                <li><Link to="dashboard-reviews.html">Reviews</Link></li>
                                                <li><Link to="dashboard-bookmarks.html">Bookmarks</Link></li>
                                                <li><Link to="dashboard-add-listing.html">Add Listing</Link></li>
                                                <li><Link to="dashboard-my-profile.html">My Profile</Link></li>
                                                <li><Link to="dashboard-invoice.html">Invoice</Link></li>
                                            </ul>
                                        </li>

                                        <li><Link to="#">Pages</Link>
                                            <ul>
                                                <li><Link to="pages-user-profile.html">User Profile</Link></li>
                                                <li><Link to="pages-booking.html">Booking Page</Link></li>
                                                <li><Link to="pages-add-listing.html">Add Listing</Link></li>
                                                <li><Link to="pages-blog.html">Blog</Link>
                                                    <ul>
                                                        <li><Link to="pages-blog.html">Blog</Link></li>
                                                        <li><Link to="pages-blog-post.html">Blog Post</Link></li>
                                                    </ul>
                                                </li>
                                                <li><Link to="pages-contact.html">Contact</Link></li>
                                                <li><Link to="pages-coming-soon.html">Coming Soon</Link></li>
                                                <li><Link to="pages-elements.html">Elements</Link></li>
                                                <li><Link to="pages-pricing-tables.html">Pricing Tables</Link></li>
                                                <li><Link to="pages-typography.html">Typography</Link></li>
                                                <li><Link to="pages-masonry-filtering.html">Masonry Filtering</Link></li>
                                                <li><Link to="pages-404.html">404 Page</Link></li>
                                                <li><Link to="pages-icons.html">Icons</Link></li>
                                            </ul>
                                        </li>

                                    </ul>
                                </nav>
                                <div className="clearfix"></div>

                            </div>


                            <div className="right-side">
                                <div className="header-widget">
                                    <Link to="#sign-in-dialog" className="sign-in popup-with-zoom-anim"><i className="sl sl-icon-login"></i> Sign In</Link>
                                    <Link to="dashboard-add-listing.html" className="button border with-icon">Add Listing <i className="sl sl-icon-plus"></i></Link>
                                </div>
                            </div>

                            <div id="sign-in-dialog" className="zoom-anim-dialog mfp-hide">

                                <div className="small-dialog-header">
                                    <h3>Sign In</h3>
                                </div>

                                <div className="sign-in-form style-1">

                                    <ul className="tabs-nav">
                                        <li className=""><Link to="#tab1">Log In</Link></li>
                                        <li><Link to="#tab2">Register</Link></li>
                                    </ul>

                                    <div className="tabs-container alt">

                                        <div className="tab-content" id="tab1" style={{display: "none"}}>
                                            <form method="post" className="login">

                                                <p className="form-row form-row-wide">
                                                    <label for="username">Username:
										<i className="im im-icon-Male"></i>
                                                        <input type="text" className="input-text" name="username" id="username" value="" />
                                                    </label>
                                                </p>

                                                <p className="form-row form-row-wide">
                                                    <label for="password">Password:
										<i className="im im-icon-Lock-2"></i>
                                                        <input className="input-text" type="password" name="password" id="password" />
                                                    </label>
                                                    <span className="lost_password">
                                                        <Link to="#" >Lost Your Password?</Link>
                                                    </span>
                                                </p>

                                                <div className="form-row">
                                                    <input type="submit" className="button border margin-top-5" name="login" value="Login" />
                                                    <div className="checkboxes margin-top-10">
                                                        <input id="remember-me" type="checkbox" name="check" />
                                                        <label for="remember-me">Remember Me</label>
                                                    </div>
                                                </div>

                                            </form>
                                        </div>

                                        <div className="tab-content" id="tab2" style={{display: "none"}}>

                                            <form method="post" className="register">

                                                <p className="form-row form-row-wide">
                                                    <label for="username2">Username:
									<i className="im im-icon-Male"></i>
                                                        <input type="text" className="input-text" name="username" id="username2" value="" />
                                                    </label>
                                                </p>

                                                <p className="form-row form-row-wide">
                                                    <label for="email2">Email Address:
									<i className="im im-icon-Mail"></i>
                                                        <input type="text" className="input-text" name="email" id="email2" value="" />
                                                    </label>
                                                </p>

                                                <p className="form-row form-row-wide">
                                                    <label for="password1">Password:
									<i className="im im-icon-Lock-2"></i>
                                                        <input className="input-text" type="password" name="password1" id="password1" />
                                                    </label>
                                                </p>

                                                <p className="form-row form-row-wide">
                                                    <label for="password2">Repeat Password:
									<i className="im im-icon-Lock-2"></i>
                                                        <input className="input-text" type="password" name="password2" id="password2" />
                                                    </label>
                                                </p>

                                                <input type="submit" className="button border fw margin-top-10" name="register" value="Register" />

                                            </form>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </header>
                <div className="clearfix"></div>
            </div>
        );
    }
}

export default connect(mapStateToProps)(Navbar);