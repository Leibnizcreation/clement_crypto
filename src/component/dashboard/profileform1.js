import React, { Component } from 'react';
import apiUrl from "../../config"
import axios from "axios"
class Profileform2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            style: "",
            hairTexture: "",
            colorPreference: "",
            sex: "",
            age: "",
            race: "",
            name: "",
            email: "",
            phone: "",
            twitter: "",
            facebook: "",
            google: "",
            note: "",
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
                this.setState({ isLoading: false, error: { server: "Please try again later. an error has occured" } })
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
                                        <label>Hair texture</label>
                                        <input onChange={this.typing} placeholder={this.props.user.hairTexture} name="hairTexture" type="text" />

                                        <label>Describe your style</label>
                                        <input onChange={this.typing} name="style" type="text" placeholder={this.props.user.style} />

                                        <label>Color preference</label>
                                        <input onChange={this.typing} name="colorPreference" type="text" placeholder={this.props.user.colorPreference} />

                                        <label className="margin-top-0" >Sex</label>
                                        <input onChange={this.typing} name="sex" type="text" placeholder={this.props.user.sex} />

                                        <label>Age</label>
                                        <input onChange={this.typing} name="age" type="text" placeholder={this.props.user.age} />

                                        <label>Race</label>
                                        <input onChange={this.typing} name="race" type="text" placeholder={this.props.user.race} />

                                        <button type="submit" className="button border fw margin-top-10" name="register" >
                                            {this.state.isLoading ? <span><i className="fa fa-spin fa-spinner" style={{ marginRight: "5px" }}></i>Loading</span> : " Save Changes"}
                                        </button>
                                    </div>
                                </form>
        );
    }
}

export default Profileform2;
