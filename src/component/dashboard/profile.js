import React, { Component } from 'react';
import apiUrl from "../../config"
import axios from "axios"
import Profileform1 from "./profileform1"
import Profileform2 from "./profileform2"
import FileUpload from "react-fileupload"
class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uploading:false,
            error: "",
            isLoading: "",
            user: {}

        }
        this.typing = this.typing.bind(this)
        this.submitform = this.submitform.bind(this)
    }
    componentWillMount() {
        var token = localStorage.getItem("jwToken")
        axios.get(`${apiUrl}/api/profile?token=${token}`).then((res) => {
            if (res.data.user) {
                this.setState({ user: res.data.user })
                console.log(res)
                // this.props.setUserProfile(res.data.success)
            } else console.log(res)
        })
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
        let token = localStorage.getItem("jwToken")

        return (
            <div className="dashboard-content">

                <div className="row">

                    <div className="col-lg-6 col-md-12">
                        <div className="dashboard-list-box margin-top-0">
                            <h4 className="gray">Profile Details</h4>
                            <div className="dashboard-list-box-static">

                                <div className="edit-profile-photo">
                                    <img src={`${this.state.user.dpUrl || "../../images/user.png"}`} alt="" />
                                    <div className="change-photo-btn" style={{ padding: "0px" }}>
                                        <div className="photoUploadl" style={{ padding: "0px", lineHeight: "0px" }}>
                                            {/* <span><i className="fa fa-upload"></i> Upload Photo</span> */}
                                            {/* <input type="file" className="upload" /> */}
                                            <FileUpload options={{
                                                baseUrl: `${apiUrl}/api/uploadDp`,
                                                param: {
                                                    fid: 0
                                                },
                                                chooseAndUpload: true,
                                                accept: "image/*",
                                                fileFieldName: "dp",
                                                uploadSuccess: function (res) {
                                                    window.location.reload();
                                                },
                                                uploading: function (progress) {
                                                    console.log("Uploading ")
                                                    this.setState({uploading:true})
                                                }.bind(this),
                                                paramAddToField: { token: token }
                                            }}>
                                                {/* <button ref="chooseBtn" className="btn btn-default btn-sm">choose</button> */}
                                                <button ref="uploadBtn" ref="chooseAndUpload" className="btn btn-transparent" style={{ background: "transparent", border: "0px", padding: "10px" }}>
                                                    {this.state.isLoading ? <i className="fa fa-spin fa-spinner"></i> : <i className="fa fa-upload"></i>}

                                                    Upload photo
                                                </button>
                                            </FileUpload>
                                        </div>
                                    </div>
                                </div>
                                {/* <form onSubmit={this.submitform}>

                                    <div className="my-profile">
                                        <label>Your Name</label>
                                        <input onChange={this.typing}  type="text" placeholder={this.state.user.name} />

                                        <label>Phone</label>
                                        <input onChange={this.typing} type="text" placeholder={this.state.user.phone}  />

                                        <label>Email</label>
                                        <input onChange={this.typing} type="text" placeholder={this.state.user.email} />

                                        <label>Notes</label>
                                        <textarea onChange={this.typing} name="notes" id="notes" cols="30" rows="10"> </textarea>

                                        <label><i className="fa fa-twitter"></i> Twitter</label>
                                        <input placeholder="https://www.twitter.com/" type="text" />

                                        <label><i className="fa fa-facebook-square"></i> Facebook</label>
                                        <input placeholder="https://www.facebook.com/" type="text" />

                                        <label><i className="fa fa-google-plus"></i> Google+</label>
                                        <input placeholder="https://www.google.com/" type="text" />
                                    </div>

                                    <button type="submit" className="button border fw margin-top-10" name="register" >
                                        {this.state.isLoading ? <span><i className="fa fa-spin fa-spinner" style={{ marginRight: "5px" }}></i> Loading</span> : " Save Changes"}
                                    </button>
                                </form> */}
                                <Profileform2 auth={this.props.auth} user={this.state.user} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="dashboard-list-box margin-top-0">
                            <h4 className="gray">Build your profile</h4>
                            <div className="dashboard-list-box-static">
                                {/* <form onSubmit={this.submitform}>

                                    <div className="my-profile">
                                        <label>Hair texture</label>
                                        <input onChange={this.typing} placeholder={this.state.user.hairTexture}  name="hairTexture" type="text" />

                                        <label>Describe your style</label>
                                        <input onChange={this.typing} name="style" type="text" placeholder={this.state.user.style}  />

                                        <label>Color preference</label>
                                        <input onChange={this.typing} name="colorPreference" type="text" placeholder={this.state.user.colorPreference} />

                                        <label className="margin-top-0" >Sex</label>
                                        <input onChange={this.typing} name="sex" type="text" placeholder={this.state.user.sex}  />

                                        <label>Age</label>
                                        <input onChange={this.typing} name="age" type="text" placeholder={this.state.user.age} />

                                        <label>Race</label>
                                        <input onChange={this.typing} name="race" type="text" placeholder={this.state.user.race} />

                                        <button type="submit" className="button border fw margin-top-10" name="register" >
                                            {this.state.isLoading ? <span><i className="fa fa-spin fa-spinner" style={{ marginRight: "5px" }}></i>Loading</span> : " Save Changes"}
                                        </button>
                                    </div>
                                </form> */}
                                <Profileform1 auth={this.props.auth} user={this.state.user} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-12">
                    <div className="copyrights">© 2017 Listeo. All Rights Reserved.</div>
                </div>

            </div>
        );
    }
}

export default Profile;
