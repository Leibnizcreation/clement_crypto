import React, { Component } from 'react';
import apiUrl from "../../config"
import axios from "axios"
class Profileform1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            phone: "",
            note: "",
            style: "",
            hairTexture: "",
            colorPreference: "",
            sex: "",
            age: "",
            race: "",
            twitter:"",
            facebook:"",
            google:"",
            success: "",
            error: "",
            isLoading: "",

        }
        this.typing = this.typing.bind(this)
        this.submitform = this.submitform.bind(this)
    }
    submitform(e) {
        e.preventDefault();
        this.setState({ isLoading: true, error: {}, success: {} })
        axios.post(`${apiUrl}/api/updateData`, { ...this.state, id: this.props.auth.user.id }).then((res) => {
            setTimeout(() => {
                if (res.data.error) {
                    this.setState({ ...this.state, error: res.data.error });
                } else if (res.data.success) {
                    console.log(res)
                    this.setState({ success: res.data.success });
                    setTimeout(() => window.location.reload(), 1000)
                } else {
                    console.log(res)
                }
                this.setState({ isLoading: false })
            }, 1000);

        }).catch((err) => {
            setTimeout(() => {
                this.setState({ isLoading: false, error: "Please try again later. an error has occured" })
            }, 1000);
        })
    }
    typing(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <form onSubmit={this.submitform}>

                <div className="my-profile">
                    <label>Your Name</label>
                    <input onChange={this.typing} name="name"type="text" placeholder={this.props.user.name} />

                    <label>Phone</label>
                    <input onChange={this.typing} name="phone" type="text" placeholder={this.props.user.phone} />

                    <label>Email</label>
                    <input onChange={this.typing} name="email" type="email" placeholder={this.props.user.email} />

                    <label>Notes</label>
                    <textarea onChange={this.typing} defaultValue={ this.props.user.note } name="note" id="notes" cols="30" rows="10"> 
                        {this.props.user.note ? this.props.user.note :"null"}
                    </textarea>

                    <label><i className="fa fa-twitter"></i> Twitter</label>
                    <input placeholder={`${this.props.user.twitter || "https://www.twitter.com/"}`} onChange={this.typing} name="twitter" type="text" />

                    <label><i className="fa fa-facebook-square"></i> Facebook</label>
                    <input placeholder={`${this.props.user.facebook || "https://www.facebook.com/"}`} onChange={this.typing} name="facebook" type="text" />

                    <label><i className="fa fa-google-plus"></i> Google+</label>
                    <input placeholder={`${this.props.user.google || "https://www.google.com/"}`} onChange={this.typing} name="google" type="text" />
                </div>

                <button type="submit" className="button border fw margin-top-10" name="register" >
                    {this.state.isLoading ? <span><i className="fa fa-spin fa-spinner" style={{ marginRight: "5px" }}></i> Loading</span> : " Save Changes"}
                </button>
            </form>
        );
    }
}

export default Profileform1;
