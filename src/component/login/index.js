import React, { Component } from 'react';
import Navbar from "../navbar/index"
import { Link } from "react-router-dom"
import Footer from "../footer/index"
import axios from "axios"
import setAuthorizationToken from "../auth"
import apiUrl from "../../config.js"
import { Preloader, Row, Input, Icon, ProgressBar, Col } from "react-materialize"
class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            isLoading: false,
            error: { email: "", password: "", server: "" },
            success: ""
        }
        this.login = this.login.bind(this)
        this.typing = this.typing.bind(this)
    }
    login(e) {
        e.preventDefault();
        this.setState({ isLoading: true, error: { email: "", password: "" } })
        axios.post(`${apiUrl}/api/login`, { password: this.state.password, email: this.state.email }).then((res) => {
            setTimeout(() => {
                if (res.data.error) {
                    this.setState({ ...this.state, error: res.data.error });
                } else if(res.data.token){
                    localStorage.setItem("jwToken", res.data.token);
                    setAuthorizationToken(res.data.token);
                    window.location.assign("/dashboard")
                }
                this.setState({ isLoading: false })
            }, 2000);
        }).catch((err) => {
            setTimeout(() => {
                this.setState({ isLoading: false, error: { server: "Please try again later. an error has occured" } })
            }, 2000);

        })
    }

    typing(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        console.log(this.state)
        return (
            <div className="login">
                <div className="grey darken-4" style={{ paddingBottom: "10px" }}>
                    <Navbar />
                </div>

                <div className="row login-card-row">
                    <div className="col s12 m10 offset-m1">
                        <div className="row card login-img">
                            <div className="col s12 m6 center-align left-grid" style={{}}>
                                <p style={{ fontSize: "1.2em" }}> THE PROCESS OF EXPLORING <br /> THE WORLD OF ARTISTS & OPPORTUNITIES
                                  <br /> <b > BEGINS HERE!</b></p>
                                <p style={{ padding: "35px 10px 0px" }}>
                                    Login to your account and display your talents, post your requirements or simply socialize with the people of your industry. It’s Easy and It’s FREE!
                                </p>

                                <Link to="/register" className="btn waves-effect waves-red small transparent" style={{border:"1px solid #fff"}}>sign up</Link>

                            </div>
                            <div className="col s12 m6 white">
                                {this.state.isLoading === true ? <ProgressBar className="progressbar" /> : null}
                                <div className="card-content" style={{ paddingTop: "20px", paddingBottom: "50px" }}>
                                    <div className="center-align grey-text"><h5>Instant Login With</h5></div>
                                    <Row>
                                        <Col s={4}>
                                            <button type="button" style={{ width: "100%" }} className="btn blue darken-4 z-depth-0 small no-radius" >
                                                <i className="fab fa-facebook-f"></i>
                                            </button>
                                        </Col>
                                        <Col s={4}>
                                            <button type="button" style={{ width: "100%" }} className="btn red darken-1  z-depth-0 small no-radius">
                                                <i className="fab fa-google-plus-g"></i>
                                            </button>
                                        </Col>
                                        <Col s={4}>
                                            <button type="button" style={{ width: "100%" }} className="btn blue darken-2 z-depth-0 small no-radius">
                                                <i className="fab fa-linkedin-in"></i>
                                            </button>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <p className="grey-text text-darken-2 center-align">Make the most of the Creative world of Artists and Seekers!</p>
                                    </Row>
                                    <Row>
                                    </Row>
                                    <Row>
                                        <Col s={5}>
                                            <div style={{ height: "2px", background: "#ccc", marginTop: "10px" }}></div>
                                        </Col>
                                        <Col s={2}>
                                            <p className="center-align grey-text text-darken-2 "><span className="grey darken-4" style={{ borderRadius: "100%", color: "#fff", padding: "10px" }}>OR</span></p>

                                        </Col>
                                        <Col s={5}>
                                            <div style={{ height: "2px", background: "#ccc", marginTop: "10px" }}></div>
                                        </Col>
                                    </Row>

                                    <div className="row">
                                        <form className="col s12" onSubmit={this.login}>
                                            <Row>
                                                <Input s={12} className="grey-text darken-1" labelClassName="grey-text darken-1" name="email" label="Email" onChange={this.typing} error={this.state.error.email || this.state.error.server ? this.state.error.email || this.state.error.server : null} type="email" validate><Icon>email</Icon></Input>
                                                <Input s={12} labelClassName="grey-text darken-1" name="password" label="Password" onChange={this.typing} validate error={this.state.error.password || this.state.error.server ? this.state.error.password || this.state.error.server : null} type='password'><Icon>lock_outline</Icon></Input>
                                                <p className="red-text darken-1 center-align">{this.state.error.server ? <small>{this.state.error.server}</small> : null}</p>
                                                <p className="red-text darken-1 center-align">{this.state.error.email || this.state.error.password ? <small>{this.state.error.email }</small> : null}</p>
                                            </Row>

                                            <center>
                                                <button className="btn waves-effect waves-red  grey darken-4" type="submit" name="action">
                                                    Sign in
                                                </button>
                                            </center>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
                <style>{`
                    body{
                        background:#eee;
                        // background:linear-gradient(rgba(0,0,0,0.9),rgba(0,0,0,0.9)),#263238 url('./images/live-concerts-events-in-bujumbura.jpg') no-repeat
                    }
                    .login .login-img{
                        background:linear-gradient(rgba(0,0,0,0.9),rgba(0,0,0,0.5)),#263238 url('./images/group.jpg') no-repeat;
                        background-position:cover;
                    }
                    .login .login-card-row{
                        margin-top:30px;
                    }
                    .login .left-grid{
                        color:#ddd;
                        padding:140px 10px 20px
                    }
                   
                    .login .progressbar{
                        margin:0px;
                        // background:transparent;
                    }
                    .login .progress{
                        background:#fff;
                    }
                    .login .indeterminate.progressbar{
                        background:#333
                    }
                    .login .no-radius{
                        border-radius:0px
                    }
                     @media (max-width: 620px) {
                     .login .login-card-row{
                        margin-top:0px;
                    }
                     .login .left-grid{
                        color:#ddd;
                        padding:40px 10px
                    }
                    }
                `}
                </style>
            </div>
        );
    }
}

export default Login;
