import React, { Component } from 'react';
import { Link } from "react-router-dom"
import axios from "axios"
import setAuthorizationToken from "../auth"
import apiUrl from "../../config.js"
class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            isLoading: false,
            error: { username: "", password: "", server: "" },
            success: ""
        }
        this.login = this.login.bind(this)
        this.typing = this.typing.bind(this)
    }
    login(e) {
        e.preventDefault();
        this.setState({ isLoading: true, error: { username: "", password: "" } })
        axios.post(`${apiUrl}/api/login`, { password: this.state.password, username: this.state.username }).then((res) => {
            setTimeout(() => {
                if (res.data.error) {
                    this.setState({ ...this.state, error: res.data.error });
                } else if (res.data.token) {
                    localStorage.setItem("jwToken", res.data.token);
                    setAuthorizationToken(res.data.token);
                    window.location.assign("/admin/dashboard")
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
            <div className="row" style={{marginTop:"50px"}}>
                <div className="col-sm-4 col-sm-offset-4">
                    <center><h2>Admin Panel</h2></center>
                
                    <form onSubmit={this.login} className="login">
                        <p className="form-row form-row-wide">
                            <label for="username">Username:
										            <i className="im im-icon-Male"></i>
                                <input onChange={this.typing} type="text" className="input-text" name="username" id="username" required />
                            </label>
                        </p>
                        <p className="form-row form-row-wide">
                            <label for="password">Password:
										            <i className="im im-icon-Lock-2"></i>
                                <input onChange={this.typing} className="input-text" type="password" name="password" id="password" required />
                            </label>
                            <span className="lost_password">
                                <a href="#" >Lost Your Password?</a>
                            </span>
                        </p>
                        <p style={{ color: "#f91942", marginLeft: "3px" }}>{this.state.error.username ? <small>{this.state.error.username}</small> : null}</p>
                        {/* <p style={{ color: "#f91942", marginLeft: "3px" }}>{this.state.error.username || this.state.error.password ? <small>{this.state.error.username}</small> : null}</p> */}
                        <div className="form-row">
                            <button type="submit" className="button border margin-top-5" name="login">{this.state.isLoading ? <span><i className="fa fa-spin fa-spinner" style={{ marginRight: "5px" }}></i> Loading</span> : "Login"}</button>
                            <div className="checkboxes margin-top-10">
                                <input id="remember-me" type="checkbox" name="check" />
                                <label for="remember-me">Remember Me</label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        );
    }
}

export default Login;
