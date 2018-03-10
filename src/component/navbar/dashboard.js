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
            <div className="setnav" >
                <header id="header-container" className="fixed fullwidth dashboard">

                    <div id="header" className="not-sticky">
                        <div className="container">

                            <div className="left-side">

                                <div id="logo">
                                    <a href="/"><img src="../../../images/logo.png" alt="" /></a>
                                    <a href="/" className="dashboard-logo"><img src="../../../images/logo2.png" alt="" /></a>
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
                 


                                    </ul>
                                </nav>
                                <div className="clearfix"></div>
                            </div>
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

                                    <a href="/service" className="button border with-icon">Add Listing <i className="sl sl-icon-plus"></i></a>
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