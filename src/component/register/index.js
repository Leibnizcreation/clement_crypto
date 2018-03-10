import React, { Component } from 'react';
import Navbar from "../navbar/index"
import Footer from "../footer/index"
import { Link } from "react-router-dom"
import data from "../../data"
import classnames from "classnames"
import axios from "axios"
import apiUrl from "../../config.js"
import validator from "validator"
import { Tabs, Tab, Row, Col, Input, ProgressBar } from "react-materialize"
import $ from "jquery"
class Register extends Component {
    constructor() {
        super();
        this.state = {
            disabled: true,
            next: false,
            username:"",
            email:"",
            password1:"",
            password2:"",
            error: { },
            success: { server:"" }
        }
        this.register = this.register.bind(this);
        this.typing = this.typing.bind(this);
    }
    componentDidMount() {


    }

    validate(){
        var error={}
        if (!validator.isEmail(this.state.email)) error.email= "Email address not valid" 
        if (validator.isEmpty(this.state.email)) error.email= "Email cannot be empty"
        if (validator.isEmpty(this.state.username)) error.username="Username is required"
        if (validator.isEmpty(this.state.password2)) error.password2 = "Password is required"
        if (validator.isEmpty(this.state.password1))  error.password1 = "Password is required"
        if (!validator.equals(this.state.password1,this.state.password2))error.password2= "Password does not match"
        if(error.username||error.password1||error.password2||error.email ) {
            this.setState({error:error});
            return false; 
        }else return true;
    }
    register(e) {
        e.preventDefault();
       if( this.validate()){
        this.setState({ isLoading: true, error: { username: "", email: "", password1: "", password2 : ""},success:{}})
        axios.post(`${apiUrl}/api/register`, this.state).then((res) => {
            setTimeout(() => {
                if (res.data.error) {
                    this.setState({ ...this.state, error: res.data.error });
                } else if (res.data.success) {
                    this.setState({ success: res.data.success, emailLoading: false, checkEmail: true });
                    // setTimeout(()=>window.location.assign('/login'),1000)
                } else {
                    console.log(res)
                }
                this.setState({ isLoading: false })
            }, 2000);

        }).catch((err) => { 
            setTimeout(() => {
                this.setState({ isLoading: false, error: { server: "Please try again later. an error has occured" } })
            }, 1000);
        })}
        else return false
    }

    typing(e){
        e.preventDefault();
        this.setState({[e.target.name]:e.target.value})
    }
 
    render() {
        console.log(this.state)
        return (
            <form onSubmit={this.register} className="register">

                <p className="form-row form-row-wide">
                    <label for="username2">Username:
									                <i className="im im-icon-Male"></i>
                        <input type="text" onChange={this.typing} className="input-text " name="username" id="username2" required />
                    </label>
                        {this.state.error.username?
                            <small className="text-danger" style={{ color: "#f91942", marginLeft: "3px" }}> {this.state.error.username}</small>
                    :null}
                </p>

                <p className="form-row form-row-wide">
                    <label for="email2">Email Address:
									                    <i className="im im-icon-Mail"></i>
                        <input type="text" onChange={this.typing} className="input-text" name="email" id="email2" required/>
                    </label>
                    {this.state.error.email ?
                        <small className="text-danger" style={{ color: "#f91942", marginLeft: "3px" }}> {this.state.error.email}</small>
                        : null}
                </p>

                <p className="form-row form-row-wide">
                    <label for="password1">Password:
									                    <i className="im im-icon-Lock-2"></i>
                        <input className="input-text" onChange={this.typing} type="password" name="password1" id="password1" required/>
                    </label>
                    {this.state.error.password1 ?
                        <small className="text-danger" style={{ color: "#f91942", marginLeft: "3px" }}> {this.state.error.password1}</small>
                        : null}
                </p>

                <p className="form-row form-row-wide">
                    <label for="password2">Repeat Password:
									                <i className="im im-icon-Lock-2"></i>
                        <input className="input-text" onChange={this.typing} type="password" name="password2" id="password2" required />
                    </label>
                    {this.state.error.password2 ?
                        <small className="text-danger" style={{ color: "#f91942", marginLeft: "3px" }}> {this.state.error.password2}</small>
                        : null}
                </p>
                {this.state.success.server ?
                   <p> <small className="text-success" style={{ color: "#f91942", marginLeft: "3px" }}> {this.state.success.server}</small> </p>
                    : null}
                {this.state.error.server ?
                   <p> <small className="text-success" style={{ color: "lightgreen", marginLeft: "3px" }}> {this.state.error.server}</small></p>
                    : null}
                <button type="submit" className="button border fw margin-top-10" name="register" >
                    {this.state.isLoading ? <span><i className="fa fa-spin fa-spinner" style={{ marginRight: "5px" }}></i> Loading</span> : "Register"}
                </button>

            </form>
        );
    }
}

export default Register;
