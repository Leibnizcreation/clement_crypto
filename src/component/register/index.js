import React, { Component } from 'react';
import Navbar from "../navbar/index"
import { Link } from "react-router-dom"
import Footer from "../footer/index"
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
            firstName: "",
            lastName: "",
            email: "",
            checkEmail: false,
            emailLoading: false,
            password: "",
            location: "",
            confirmPassword: "",
            confirmValidator: "",
            selectIndustry: "",
            selectCategory: "",
            isLoading: false,
            radioOption: "",
            error: { firstName: "", lastName: "", email: "", password: "", confirmPassword: "", location: "", selectIndustry: "", selectCategory: "", server: "" },
            success: { email: "",server:"" }
        }
        this.selectIndusty = this.selectIndusty.bind(this);
        this.register = this.register.bind(this);
        this.typing = this.typing.bind(this);
        this.typingEmail = this.typingEmail.bind(this);
        this.typingPassword = this.typingPassword.bind(this);
        this.handleCheckEvent = this.handleCheckEvent.bind(this);
        this.password = this.password.bind(this);
        this.validation = this.validation.bind(this);
    }
    componentDidMount() {


    }

    typingEmail(e) {
        this.setState({
            [e.target.name]: e.target.value, success: { email: "" }, error: {email:""},success:{}, checkEmail: false
        }, () => {

            if (this.state.email && validator.isEmail(this.state.email)) {
                this.setState({ emailLoading: true })
                axios.post(`${apiUrl}/api/checkEmail`, this.state).then((res) => {
                    setTimeout(() => {
                        if (res.data.success) {
                            this.setState({ success: res.data.success, emailLoading: false, checkEmail: true })
                            this.validation();
                        } else{
                            this.setState({ error: res.data.error, emailLoading: false, checkEmail: false })
                            this.validation();
                        }
                    }, 1000)
                });
            } else if (this.state.email && !validator.isEmail(this.state.email)) {
                this.setState({ error: { email: this.state.email + " is not a valid email address" } })
                this.validation();
            }

        })

    }
    typing(e) {
        this.setState({
            [e.target.name]: e.target.value
        }, () => {
            this.validation();
        })
    }
    typingPassword(e) {
        this.setState({
            [e.target.name]: e.target.value
        }, () => {

            if (!validator.isEmpty(this.state.confirmPassword) && !validator.equals(this.state.password, this.state.confirmPassword)) {
               { this.setState({ confirmValidator: "invalid" })
                    this.validation();
            }
            } else {
                this.setState({ confirmValidator: "valid" });
                this.validation();
            }
        })
    }
    password(e) {
        this.setState({
            [e.target.name]: e.target.value
        }, () => {

            if (!validator.isEmpty(this.state.confirmPassword) && !validator.equals(this.state.password, this.state.confirmPassword)) {
                {this.setState({ confirmValidator: "invalid" })
                    this.validation();
            }
            } else {this.setState({ confirmValidator: "valid" });
                this.validation();
        }
        })
    }
    validation() {
        if (this.state.firstName && this.state.lastName && this.state.email && validator.isEmail(this.state.email) && this.state.password && this.state.confirmPassword &&
            validator.equals(this.state.password, this.state.confirmPassword) && this.state.checkEmail === true && !this.state.error.email
        ) {
            this.setState({ disabled: false })
        } else (this.setState({ disabled: true }));
    }
    register(e) {
        e.preventDefault();
        this.setState({ isLoading: true, error: { firstName: "", lastName: "", email: "", password: "", confirmPassword: "", location: "", selectIndustry: "", selectCategory: "" ,success:""} })
        if(this.state.selectIndustry <(data.industry.length))
        axios.post(`${apiUrl}/api/register`, this.state).then((res) => {
            setTimeout(() => {
                if (res.data.error) {
                    this.setState({ ...this.state, error: res.data.error });
                } else if (res.data.success) {
                    this.setState({ success: res.data.success, emailLoading: false, checkEmail: true });
                    setTimeout(()=>window.location.assign('/login'),1000)
                } else {
                    console.log(res)
                }
                this.setState({ isLoading: false })
            }, 2000);

        }).catch((err) => { 
            setTimeout(() => {
                this.setState({ isLoading: false, error: { server: "Please try again later. an error has occured" } })
            }, 2000);
        })
    }
    toggleNext() {
        this.setState({
            next: true
        })
    }
    handleCheckEvent(e) {
        console.log(e.target.value)
        this.setState({ radioOption: e.target.value })
    }
    selectIndusty(e) {
        console.log(e.target.name)
    }
    render() {
        return (
            <div className="register">
                <div className="grey darken-4" style={{ paddingBottom: "10px" }}>
                    <Navbar />
                </div>

                <div className="row register-card-row">
                    <div className="col s12 m10 offset-m1">
                        <div className="row card register-img">
                            <div className="col s12 m6 center-align left-grid" style={{}}>
                                <p style={{ fontSize: "1.2em" }}> THE PROCESS OF EXPLORING <br /> THE WORLD OF ARTISTS & OPPORTUNITIES
                                  <br /> <b > BEGINS HERE!</b></p>
                                <p style={{ padding: "35px 10px 0px" }}>Create your profile to display your talents, post your requirements or to simply socialize with the people of your industry. It’s Easy and It’s FREE!</p>

                                <Link to="/login" className="btn waves-effect waves-red small transparent" style={{ border: "1px solid #fff" }} >sign in</Link>

                            </div>
                            <div className="col s12 m6 white" style={{ position: "relative" }}>
                                {this.state.isLoading === true ? <ProgressBar className="progressbar" /> : null}

                                <div className="card-content" style={{ position: "relative", paddingTop: "20px", overflow: "hidden" }}>




                                    {/* <p>Make the most of the Creative world of Artists and Seekers!</p> */}
                                    <div className={classnames("row", "pad-top")}>
                                        <div className="col m6 s6">
                                            <div className="red darken-1 step ">
                                                <center> Step 1</center>
                                            </div>
                                        </div>
                                        <div className="col m6 s6">
                                            <div className={classnames("step", this.state.next ? "red darken-1" : null)}>
                                                <center> Step 2</center>
                                            </div>
                                        </div>
                                    </div>
                                    <form className="col s12" onSubmit={this.register}>
                                        <div className={classnames("row", "", "pad-top", this.state.next ? "slideOutLeft animated hide" : null)}>
                                            <Row>
                                                <Input s={6} className="grey-text darken-1" labelClassName="grey-text darken-1" name="firstName" label="First Name" onChange={this.typing} error={this.state.error.firstName ? this.state.error.firstName : null} type="text" validate></Input>
                                                <Input s={6} className="grey-text darken-1" labelClassName="grey-text darken-1" name="lastName" label="last Name" onChange={this.typing} error={this.state.error.lastName ? this.state.error.lastName : null} type="text" validate></Input>
                                                <div className="input-field col s12">
                                                    <input id="email" type="email" name="email" className={classnames(this.state.error.email ? "invalid" : null, this.state.success.email ? "valid" : null)} onChange={this.typingEmail} />
                                                    <label for="email">Email</label>
                                                    <span className="helper-text" data-error={this.state.error.email || this.state.email + " is not a valid email address"} data-success={this.state.email && this.state.success.email ? this.state.email + " is available" : null}></span>
                                                </div>
                                                <Input s={6} labelClassName="grey-text darken-1" name="password" label="Password" onChange={this.password} validate error={this.state.error.password ? this.state.error.password : null} type='password'></Input>
                                                <Input s={6} labelClassName="grey-text darken-1" name="confirmPassword" label="Confirm Password" onChange={this.typingPassword} error={this.state.error.confirmPassword ? this.state.error.confirmPassword : null} className={this.state.confirmValidator} type='password'></Input>
                                            </Row>
                                            <button type="button" onClick={this.toggleNext.bind(this)} disabled={this.state.disabled} className="btn grey darken-4" style={{ width: "100%" }}>Next</button>
                                        </div>
                                        <div className={classnames("row", "", "pad-top", this.state.next ? "bounceInRight animated" : "hide")}>
                                            <Row>
                                                <Input s={12} type='select' name="selectIndustry" label="What industry does it relate to" onChange={this.typing.bind(this)}>
                                                    <option className="grey-text text-darken-2" value="NA" >Please select an industry</option>
                                                    {data.industry.map((industry, key) => (
                                                        <option key={key} className="grey-text text-darken-2" value={key}>{industry.title}</option>
                                                    ))}
                                                </Input>
                                                <span className="helper-text" data-error={this.state.error.selectIndustry?this.state.error.selectIndustry:null} ></span>
                                            </Row>
                                            <Row>
                                                <Input s={12} type='select' name="selectCategory" label="What industry does it relate to" defaultValue='0' onChange={this.typing.bind(this)}>
                                                    {/* <option className="grey-text text-darken-2" >Please select a category</option> */}
                                                    {this.state.selectIndustry !== "" && this.state.selectIndustry !== "NA" ?
                                                        data.industry[this.state.selectIndustry].categories.map((category, key) => (
                                                            <option key={key} className="grey-text text-darken-2" value={key}>{category.title}</option>
                                                        )) : null}
                                                </Input>
                                            </Row>
                                            <div className="row">
                                                <div className="input-field col s12">
                                                    <input id="location" name="location" onChange={this.typing.bind(this)} type="text" className="validate email" />
                                                    <label for="location">Location</label>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <Row className="margin-left">
                                                    <Input name="gender" type='radio' value="male" label="male" check={this.state.radioOption === "male"} onChange={this.handleCheckEvent} className='with-gap ' />
                                                    <Input name="gender" type='radio' value="female" label="female" check={this.state.radioOption === "female"} onChange={this.handleCheckEvent} className='with-gap' />
                                                </Row>
                                                <Row>
                                                    {this.state.error.server ? <p className="red-text darken-1 center-align"> <small>{this.state.error.server}</small></p> : null}
                                                    {this.state.success.server ? <p className="green-text darken-1 center-align"><small>{this.state.success.server}</small></p> : null}
                                                </Row>
                                            </div>
                                            <button type="submit" className="btn grey darken-4" style={{ width: "100%" }}>Submit</button>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <style>{`
                    body{
                        background:#eee;
                        // background:linear-gradient(rgba(0,0,0,0.9),rgba(0,0,0,0.9)),#263238 url('./images/live-concerts-events-in-bujumbura.jpg') no-repeat
                    }
                    .register .register-img{
                        background:linear-gradient(rgba(0,0,0,0.9),rgba(0,0,0,0.5)),#263238 url('./images/group.jpg') no-repeat;
                        background-position:cover;
                    }
                    .register .register-card-row{
                        margin-top:30px;
                    }
                    .register .left-grid{
                        color:#ddd;
                        padding:100px 10px;
                    }
                      .tabs .tab a{
                        color:#222;
                    }

                     .register .tabs .indicator{
                        background:#222
                    }
                    .register .tabs .tab{
                        width:50%
                    }
                    .register .tabs .tab a:hover, .tabs .tab a.active {
                        background-color: transparent;
                        color: #222;
                        width:99%
                    }        
                      .register .pad-top{
                        padding:10px 0px 0px
                    }
                      .register .absolute{
                        position:absolute;
                        z-index:2;
                        width:100%;
                    }
                     .register .step{
                        padding:10px;
                        color:#fff;
                        transition:0.3s ease-in;
                    }
                    .register .dropdown-content li>a, .dropdown-content li>span{
                        color:#222;
                        text-transform: capitalize;
                    }
                     .register .progressbar{
                        margin:0px;
                    }
                    .register .progress{
                        background:#fff;
                    }
                    .register .indeterminate.progressbar{
                        background:#333
                    }
                    .register .margin-left{
                        margin-left:5px;
                    }
                       @media (max-width: 620px) {
                      .register .register-card-row{
                        margin-top:0px;
                    }
                      .register .left-grid{
                        color:#ddd;
                        padding:40px 10px;
                    }
                    }
                `}
                </style>
                <Footer />

            </div>
        );
    }
}

export default Register;
