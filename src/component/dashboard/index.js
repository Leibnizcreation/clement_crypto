import React, { Component } from 'react';
import Navbar from "../navbar/dashboard"
import { connect } from "react-redux"
import { Switch, Route } from "react-router-dom"
import { bindActionCreator } from "redux"
import setAuthorizationToken from "../auth"
import Orders from "./orders"
import Dispute from "./dispute"
import Review from "./review"
import auth from "../../reducer/index"
import Appointment from "./appointment"
import Profile from "./profile"
function mapStateToProps(state) {
    return {
        auth: state.auth,
    }
}

class Dashboard extends Component {
    logout() {
        localStorage.removeItem("jwToken");
        setAuthorizationToken(false);
        var url = window.location.pathname;
        window.location.assign("/")
    }
    render() {
        return (
            <div id="wrapper">
                <Navbar />

                <div className="clearfix"></div>
                <div id="dashboard">

                    <a href="#" className="dashboard-responsive-nav-trigger"><i className="fa fa-reorder"></i> Dashboard Navigation</a>


                    <div className="dashboard-nav">
                        <div className="dashboard-nav-inner">

                            <ul data-submenu-title="Appointment">
                                <li><a href={`${this.props.match.url}/appointment`}><i className="sl sl-icon-settings"></i> Appointment  <span className="nav-tag messages">2</span></a></li>
                            </ul>

                            <ul data-submenu-title="Orders">
                                <li><a href={`${this.props.match.url}/orders`}><i className="sl sl-icon-layers"></i> Orders <span className="nav-tag messages">2</span></a>
                                </li>

                            </ul>
                            <ul data-submenu-title="Dispute">
                                <li><a href={`${this.props.match.url}/dispute`}><i className="sl sl-icon-layers"></i> Dispute</a>
                                </li>

                            </ul>
                            <ul data-submenu-title="Review">
                                <li><a href={`${this.props.match.url}/review`}><i className="sl sl-icon-layers"></i> Review </a>
                                </li>

                            </ul>
                            <ul data-submenu-title="Account">
                                <li><a href={`${this.props.match.url}`}><i className="sl sl-icon-user"></i> My Profile</a></li>
                                <li><a href="#" onClick={this.logout}><i className="sl sl-icon-power"></i> Logout</a></li>
                            </ul>

                        </div>
                    </div>
                    <Switch>
                        <Route path={`${this.props.match.url}/appointment`} component={Appointment} />
                        <Route path={`${this.props.match.url}/review`} component={Review} />
                        <Route path={`${this.props.match.url}/orders`} component={Orders} />
                        <Route path={`${this.props.match.url}/dispute`} component={Dispute} />
                        <Route path="/" render={(props)=>(<Profile auth={this.props.auth}/>)} />
                        
                    </Switch>



                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps)(Dashboard);
