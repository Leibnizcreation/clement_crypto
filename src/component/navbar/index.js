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
                                    <a href="/">
                                    {/* BlackBooked */}
                                    <img src="../../images/logo.png" alt="" />
                                    </a>
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

                                        <li><a className="current" to="#">Home</a>
                                            <ul>
                                                <li><a href="index.html">About us</a></li>
                                                <li><a href="index.html">Sitemap</a></li>
                                            </ul>
                                        </li>

                                        <li><a href="#">Cities</a>
                                            <ul>
                                                {/* <li><a href="#">List Layout</a>
                                                    <ul>
                                                        <li><a href="listings-list-with-sidebar.html">With Sidebar</a></li>
                                                        <li><a href="listings-list-full-width.html">Full Width</a></li>
                                                        <li><a href="listings-list-full-width-with-map.html">Full Width + Map</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="#">Grid Layout</a>
                                                    <ul>
                                                        <li><a href="listings-grid-with-sidebar-1.html">With Sidebar 1</a></li>
                                                        <li><a href="listings-grid-with-sidebar-2.html">With Sidebar 2</a></li>
                                                        <li><a href="listings-grid-full-width.html">Full Width</a></li>
                                                        <li><a href="listings-grid-full-width-with-map.html">Full Width + Map</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="#">Half Screen Map</a>
                                                    <ul>
                                                        <li><a href="listings-half-screen-map-list.html">List Layout</a></li>
                                                        <li><a href="listings-half-screen-map-grid-1.html">Grid Layout 1</a></li>
                                                        <li><a href="listings-half-screen-map-grid-2.html">Grid Layout 2</a></li>
                                                    </ul>
                                                </li> */}
                                                <li><a href="listings-single-page.html">New York City</a></li>
                                            </ul>
                                        </li>

                                        <li><a href="#">Services</a>
                                            <ul>
                                                <li><a href="Consultation">Consultation</a></li>
                                                <li><a href="Natural Hair Services">Natural Hair Services</a></li>
                                                <li><a href="Relaxed Hair Styles">Relaxed Hair Styles</a></li>
                                                <li><a href="Weave">Weave</a></li>
                                                <li><a href="Wigs">Wigs</a></li>
                                                <li><a href="Short Hair Cuts">Short Hair Cuts</a></li>
                                                <li><a href="Kids Hair">Kids Hair</a></li>
                                                <li><a href="Mens Hair Style">Mens Hair Style</a></li>
                                                <li><a href="Message/Spa Services">Message/Spa Services</a></li>
                                                <li><a href="Clothing Styles">Clothing Styles</a></li>
                                            </ul>
                                        </li>

                                        <li><a href="/search">Search</a>
                                            {/* <ul>
                                                <li><a href="pages-user-profile.html">User Profile</a></li>
                                                <li><a href="pages-booking.html">Booking Page</a></li>
                                                <li><a href="pages-add-listing.html">Add Listing</a></li>
                                                <li><a href="pages-blog.html">Blog</a>
                                                    <ul>
                                                        <li><a href="pages-blog.html">Blog</a></li>
                                                        <li><a href="pages-blog-post.html">Blog Post</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="pages-contact.html">Contact</a></li>
                                                <li><a href="pages-coming-soon.html">Coming Soon</a></li>
                                                <li><a href="pages-elements.html">Elements</a></li>
                                                <li><a href="pages-pricing-tables.html">Pricing Tables</a></li>
                                                <li><a href="pages-typography.html">Typography</a></li>
                                                <li><a href="pages-masonry-filtering.html">Masonry Filtering</a></li>
                                                <li><a href="pages-404.html">404 Page</a></li>
                                                <li><a href="pages-icons.html">Icons</a></li>
                                            </ul> */}
                                        </li>

                                    </ul>
                                </nav>
                                <div className="clearfix"></div>

                            </div>


                            <div className="right-side">
                                <div className="header-widget">
                                    <a href="#sign-in-dialog" className="sign-in popup-with-zoom-anim"><i className="sl sl-icon-login"></i> Sign In</a>
                                    <a href="/add services" className="button border with-icon">Add Services <i className="sl sl-icon-plus"></i></a>
                                </div>
                            </div>

                            <div id="sign-in-dialog" className="zoom-anim-dialog mfp-hide">

                                <div className="small-dialog-header">
                                    <h3>Sign In</h3>
                                </div>

                                <div className="sign-in-form style-1">

                                    <ul className="tabs-nav">
                                        <li className=""><a href="#tab1">Log In</a></li>
                                        <li><a href="#tab2">Register</a></li>
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
                                                        <a href="#" >Lost Your Password?</a>
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