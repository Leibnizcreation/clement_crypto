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
                                    <a href="/"><img src="../../../../images/logoTransparent.png" alt="" /></a>
                                    <a href="/admin/dashboard" className="dashboard-logo"><img src="../../../images/logoTransparent.png" alt="" /> <div style={{paddingTop:"20px",color:"#fff",float:'right'}}><div style={{marginTop:"10px",fontSize:"1.3em"}}>Tamtamtools</div></div></a>
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

                                        <li><a href="/admin/dashboard/faq" className="current" to="#">FAQS</a>
                                        </li>

                                        <li><a href="#">Pricing</a>
                                            <ul>

                                                <li><a href="/admin/dashboard/pricing">Pricing for Artist</a></li>
                                                <li><a href="/admin/dashboard/pricing">Pricing for Supporters</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#">Appartment</a>
                                            <ul>

                                                <li><a href="/admin/dashboard/appartment?new_arrival">New Arrival</a></li>
                                                <li><a href="/admin/dashboard/appartment?most_view">Most view Appartments</a></li>
                                                <li><a href="/admin/dashboard/appartment">All Appartments</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#">Events</a>
                                            <ul>

                                                <li><a href="/admin/dashboard/events?upcomming">Upcomming Event</a></li>
                                                <li><a href="/admin/dashboard/events?most_viewed">Most View Event</a></li>
                                                <li><a href="/admin/dashboard/events">All Event</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#">Marketplace</a>
                                            <ul>
                                                <li><a href="/admin/dashboard/marketplace?new_arrival">New arrival</a></li>
                                                <li><a href="/admin/dashboard/marketplace?most_viewed">Most Viewed</a></li>
                                                <li><a href="/admin/dashboard/marketplace">All Items</a></li>
                                               
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
                                            <li><a href="/admin/dashboard"><i className="sl sl-icon-settings"></i> Dashboard</a></li>
                                            <li><a href="/admin/dashboard/support"><i className="sl sl-icon-envelope-open"></i> Support center</a></li>
                                            <li><a href="/admin/dashboard/campaign"><i className="fa fa-calendar-check-o"></i> Message</a></li>
                                            <li><a href="#" onClick={this.logout}><i className="sl sl-icon-power" ></i> Logout</a></li>
                                        </ul>
                                    </div>

                                    <a href="/admin/dashboard/blog_post" className="button border with-icon">Add Blog Post <i className="sl sl-icon-plus"></i></a>
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