import React, { Component } from 'react';
import Sidebar from "./sidebar"
import { Link } from "react-router-dom"
import classnames from "classnames"
import { connect } from "react-redux"
import { bindActionCreator } from "redux"
import setAuthorizationToken from "../auth"
import auth from "../../reducer/index"
import $ from "jquery"
import Register from "../register/index"
import Login from "../login/index"
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
        console.log(this.props)
        return (
            <div id="wrapper">
                <header id="header-container">

                    <div id="header">
                        <div className="container">

                            <div className="left-side">

                                <div id="logo">
                                    <a href="/">
                                        {/* BlackBooked */}
                                        <img src="../../../images/logo.png" alt="" />
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

                                        <li><a href="/faq" className="current" to="#">FAQS</a>
                                        </li>

                                        <li><a href="#">Cities</a>
                                            <ul>
                                               
                                                <li><a href="/city/new york">New York City</a></li>
                                            </ul>
                                        </li>

                                        <li><a href="#">Services</a>
                                            <ul>
                                                <li><a href="/services/Consultation">Consultation</a></li>
                                                <li><a href="/services/Natural Hair Services">Natural Hair Services</a></li>
                                                <li><a href="/services/Relaxed Hair Styles">Relaxed Hair Styles</a></li>
                                                <li><a href="/services/Weave">Weave</a></li>
                                                <li><a href="/services/Wigs">Wigs</a></li>
                                                <li><a href="/services/Short Hair Cuts">Short Hair Cuts</a></li>
                                                <li><a href="/services/Kids Hair">Kids Hair</a></li>
                                                <li><a href="/services/Mens Hair Style">Mens Hair Style</a></li>
                                                <li><a href="/services/Message/Spa Services">Message/Spa Services</a></li>
                                                <li><a href="/services/Clothing Styles">Clothing Styles</a></li>
                                            </ul>
                                        </li>
                                        {this.props.auth.isAuthenticated ?
                                            <li><a href="/dashboard">My profile</a>

                                            </li>
                                            : null
                                        }


                                    </ul>
                                </nav>
                                <div className="clearfix"></div>

                            </div>

                            {this.props.auth.isAuthenticated ?
                                <div className="right-side">
                                    <div className="header-widget">
                                        <div className="user-menu">
                                            <div className="user-name"><span><img src="../../../images/dashboard-avatar.jpg" alt="" /></span>My Account</div>
                                            <ul>
                                                <li><a href="/dashboard"><i className="sl sl-icon-settings"></i> Dashboard</a></li>
                                                <li><a href="/dashboard/appointment"><i className="sl sl-icon-envelope-open"></i> appointment</a></li>
                                                <li><a href="/dashboard/orders"><i className="fa fa-calendar-check-o"></i> Orders</a></li>
                                                <li><a href="#" onClick={this.logout}><i className="sl sl-icon-power" ></i> Logout</a></li>
                                            </ul>
                                        </div>
                                        <a href="/service" className="button border with-icon">Add Services <i className="sl sl-icon-plus"></i></a>
                                    </div>
                                </div>
                                :
                                <div className="right-side">
                                    <div className="header-widget">
                                        <a href="#sign-in-dialog" className="sign-in popup-with-zoom-anim"><i className="sl sl-icon-login"></i> Sign In</a>
                                        <a href="/add services" className="button border with-icon">Add Services <i className="sl sl-icon-plus"></i></a>
                                    </div>
                                </div>
                            }
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

                                            <div className="tab-content" id="tab1" style={{ display: "none" }}>
                                                {/* <form method="post" className="login">

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

                                            </form> */}
                                                <Login />
                                            </div>

                                            <div className="tab-content" id="tab2" style={{ display: "none" }}>
                                                <Register />
                                                {/* <form method="post" className="register">

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

                                            </form> */}
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