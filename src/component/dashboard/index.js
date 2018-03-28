import React, { Component } from 'react';
import Navbar from "../navbar/dashboard"
import { connect } from "react-redux"
import { Switch, Route } from "react-router-dom"
import { bindActionCreator } from "redux"
import setAuthorizationToken from "../auth"
import Orders from "./orders"
import Dispute from "./dispute"
import apiUrl from "../../config"
import axios from "axios"
import Video from "./video"
import Audio from"./audio"
import Review from "./review"
import auth from "../../reducer/index"
import Messages from "./messages"
import Profile from "./profile"
import Event from "./event"
import Pending from "./pending"
import Marketplace from "./marketplace"
import Artist from "./artist"
import Supporters from "./supporters"
import Addblogpost from './addblogpost';
import Addmembers from './addmembers';
function mapStateToProps(state) {
    return {
        auth: state.auth,
    }
}

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uploading: false,
            error: "",
            isLoading: "",
            members: [],
            events: [],
            products: [],
            newArtist: [],
            newProducts: [],
            artists:[],
            supporters:[],
            pending:[],
            audios:[],
            videos:[],

        }
    }
    componentWillMount() {
        var token = localStorage.getItem("jwToken")
        axios.get(`${apiUrl}/api/members?token=${token}`).then((res) => {
            if (res.data.members) {
                this.setState({ members: res.data.members })
                // this.props.setUserProfile(res.data.success)
            } else console.log(res)
        })
        axios.get(`${apiUrl}/api/getNewArtists?token=${token}`).then((res) => {
            if (res.data.success) {
                this.setState({ newArtist: res.data.success })
                // this.props.setUserProfile(res.data.success)
            } else console.log(res)
        })
        axios.get(`${apiUrl}/api/getArtists?token=${token}`).then((res) => {
            if (res.data.success) {
                this.setState({ artists: res.data.success })
                // this.props.setUserProfile(res.data.success)
            } else console.log(res)
        })
        axios.get(`${apiUrl}/api/pendingActivation?token=${token}`).then((res) => {
            if (res.data.success) {
                this.setState({ pending: res.data.success })
                // this.props.setUserProfile(res.data.success)
            } else console.log(res)
        })
        axios.get(`${apiUrl}/api/getSupporters?token=${token}`).then((res) => {
            if (res.data.success) {
                this.setState({ supporters: res.data.success })
                // this.props.setUserProfile(res.data.success)
            } else console.log(res)
        })
        axios.get(`${apiUrl}/api/events?token=${token}`).then((res) => {
            if (res.data.events) {
                this.setState({ events: res.data.events })
                // this.props.setUserProfile(res.data.success)
            } else console.log(res)
        })
        axios.get(`${apiUrl}/api/market?token=${token}`).then((res) => {
            if (res.data.products) {
                this.setState({ products: res.data.products })
                // this.props.setUserProfile(res.data.success)
            } else console.log(res)
        })
        axios.get(`${apiUrl}/api/getNewProduct?token=${token}`).then((res) => {
            if (res.data.success) {
                console.log(res)
                this.setState({ newProducts: res.data.success })
                // this.props.setUserProfile(res.data.success)
            } else console.log(res)
        })
    }
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
                        <div className="dashboard-nav-inner" style={{ maxHeight: "506px" }}>

                            <ul data-submenu-title="Main">
                                <li className="active"><a href={`${this.props.match.url}`}><i className="sl sl-icon-settings"></i> Dashboard</a></li>
                                <li><a href={`${this.props.match.url}/messages`}><i className="sl sl-icon-envelope-open"></i> Messages <span className="nav-tag messages">2</span></a></li>
                                <li><a href={`${this.props.match.url}/events`}><i className="fa fa-calendar-check-o"></i> Events</a></li>
                            </ul>

                            <ul data-submenu-title="Listings">
                                <li><a><i className="sl sl-icon-layers"></i> Members account</a>
                                    <ul>
                                        <li><a href={`${this.props.match.url}/artist`}>Artist <span className="nav-tag green">{this.state.artists.length}</span></a></li>
                                        <li><a href={`${this.props.match.url}/supporters`}>Supporters <span className="nav-tag yellow">{this.state.supporters.length}</span></a></li>
                                        <li><a href={`${this.props.match.url}/pending`}>Pending activation <span className="nav-tag red">2</span></a></li>
                                    </ul>
                                </li>
                                <li><a href={`${this.props.match.url}/video`}><i className="sl sl-icon-star"></i> Videos</a></li>
                                <li><a href={`${this.props.match.url}/audio`}><i className="sl sl-icon-heart"></i> Audios</a></li>
                                <li><a href={`${this.props.match.url}/addmembers`}><i className="sl sl-icon-plus"></i> Add Members</a></li>
                            </ul>

                            <ul data-submenu-title="Account">
                                <li><a href={`${this.props.match.url}`}><i className="sl sl-icon-user"></i> My Profile</a></li>
                                <li><a href="#" onClick={this.logout}><i className="sl sl-icon-power"></i> Logout</a></li>
                            </ul>

                        </div>
                    </div>

                    {/* <div className="dashboard-nav">
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
                    </div> */}
                    <div className="dashboard-content">
                        <Switch>
                            <Route path={`${this.props.match.url}/messages`} render={(props) => <Messages />} />
                            <Route path={`${this.props.match.url}/review`} component={Review} />
                            <Route path={`${this.props.match.url}/orders`} component={Orders} />
                            <Route path={`${this.props.match.url}/dispute`} component={Dispute} />
                            <Route path={`${this.props.match.url}/blog_post`} component={Addblogpost} />
                            <Route path={`${this.props.match.url}/addmembers`} component={Addmembers} />
                            <Route path={`${this.props.match.url}/artist`} render={(props) => <Artist {...props} {...this.state} />} />
                            <Route path={`${this.props.match.url}/pending`} render={(props) => <Pending {...props} {...this.state} />} />
                            <Route path={`${this.props.match.url}/supporters`} render={(props)=><Supporters {...props} {...this.state} />} />
                            <Route path={`${this.props.match.url}/events`} render={(props) => <Event  {...props} {...this.state} />} />
                            <Route path={`${this.props.match.url}/video`} render={(props) => <Video  {...props} {...this.state} />} />
                            <Route path={`${this.props.match.url}/audio`} render={(props) => <Audio  {...props} {...this.state} />} />
                            <Route path={`${this.props.match.url}/marketplace`} render={(props) => <Marketplace  {...props} {...this.state} />} />

                            <Route path="/" render={(props) => (<Profile auth={this.props.auth} {...props} {...this.state} />)} />

                        </Switch>
                        <div className="col-md-12">
                            <div className="copyrights">© 2018 Tamtamtools. All Rights Reserved.</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps)(Dashboard);
