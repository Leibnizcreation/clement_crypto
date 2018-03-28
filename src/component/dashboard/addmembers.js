import React, { Component } from 'react';
import data from "../../data"
import axios from "axios"
import FileUpload from "react-fileupload"
import apiUrl from "../../config"
import jwt from "jsonwebtoken"
class Addmembers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            membership: "",
            password: "",
            error: {},
            progress: false,
            success: "",
        }
        this.typing = this.typing.bind(this)
        this.submitform = this.submitform.bind(this)
    }
    typing(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitform(e) {
        e.preventDefault();
        let token = jwt.sign(this.state,"o1l2a3m4i5d6e")
        this.setState({ progress: true, error: {}, success: {} })
        axios.post(`${apiUrl}/api/payment_successful`, {token:token}).then((res) => {
            setTimeout(() => {
                if (res.data.error) {
                    this.setState({ ...this.state, error: res.data.error });
                } else if (res.data.success) {
                    this.setState({ success: res.data.success });
                    // setTimeout(() => window.location.reload(), 1000)
                } else {
                    console.log(res)
                }
                this.setState({ progress: false })
            }, 1000);

        }).catch((err) => {
            setTimeout(() => {
                this.setState({ isLoading: false, error: { server: "Please try again later. an error has occured" } })
            }, 1000);
        })
    }

    render() {
        console.log(this.state)
        return (
            <div className="">
                <form onSubmit={this.submitform}>
                    <div className="row">
                        <div className="col-lg-12">

                            <div className="notification notice large margin-bottom-55">
                                <h4>Signup a new user 🙂</h4>
                                <p>A link will be sent to every members added from this console to verify their email address. members that are yet to verify their email address will be found in the pending activation section </p>
                            </div>

                            <div id="add-listing" className="separated-form">

                                <div className="add-listing-section">

                                    <div className="add-listing-headline">
                                        <h3><i className="sl sl-icon-doc"></i> Basic Informations</h3>
                                    </div>

                                    <div className="row with-forms">
                                        <div className="col-md-6">
                                            <h5> Email address <i className="tip" data-tip-content="this field is compulsory"></i></h5>
                                            <input required name="email" onChange={this.typing} className="search-field" type="email" />
                                        </div>
                                        <div className="col-md-6">
                                            <h5>Membership</h5>
                                            <select required onChange={this.typing} data-tip-content="this field is compulsory" name="membership" className="" >
                                                <option >Select Category</option>
                                                <option value="artist">Artist</option>
                                                <option value="supporters">Supporters</option>
                                            </select>
                                        </div>
                                        <div className="col-md-12">
                                            <h5> Password <i className="tip" data-tip-content="this field is compulsory"></i></h5>
                                            <input required name="password" onChange={this.typing} className="search-field" type="password" />
                                        </div>
                                    </div>
                                    <button type="submit" className="button preview"  >
                                        {this.state.progress ? <span><i className="fa fa-spin fa-spinner" style={{ marginRight: "5px" }}></i> Loading</span> : "Continue"}

                                    </button>

                                </div>

                            </div>
                        </div>

                    </div>
                    <p style={{ color: "#f91942", marginLeft: "3px" }}>{this.state.error.server ? <small>{this.state.error.server}</small> : null}</p>
                    <p style={{ color: "green", marginLeft: "3px" }}>{this.state.success ? <small>{this.state.success.server}</small> : null}</p>

                    
                        <style>{`
                    // .dashboard-content > div  >  div{
                    //     display:block !important
                    // }
                    `}
                        </style>

                </form>
            </div >
        );
    }
}

export default Addmembers;