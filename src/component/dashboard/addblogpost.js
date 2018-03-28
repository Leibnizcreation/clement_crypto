import React, { Component } from 'react';
import data from "../../data"
import axios from "axios"
import FileUpload from "react-fileupload"
import apiUrl from "../../config"
class Addblogpost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            category: "",
            description: "",
            error: {},
            progress: "",
            success: "",
            fileName: "",
            token: localStorage.getItem("jwToken")
        }
        this.typing = this.typing.bind(this)
    }
    typing(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitform(e) {
        e.preventDefault();
        this.setState({ isLoading: true, error: {}, success: {} })
        axios.post(`${apiUrl}/api/addpost`, this.state).then((res) => {
            setTimeout(() => {
                if (res.data.error) {
                    this.setState({ ...this.state, error: res.data.error });
                } else if (res.data.success) {
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

    render() {
        console.log(this.state)
        return (
            <div className="">
            <form onSubmit={(e)=>{e.preventDefault(); console.log("submited")} }>
                <FileUpload options={{
                    baseUrl: `${apiUrl}/api/blogpost`,
                    param: {
                        fid: 0
                    },
                    chooseAndUpload: false,
                    accept: "image/*",
                    fileFieldName: "blogpost",
                    uploadSuccess: function (resp) {
                        console.log(resp)
                        if (resp.error) this.setState({ error: resp.error, progress: "", fileName: "" })
                        else window.location.reload();
                    }.bind(this),
                    uploadError: function (err) {
                        this.setState({ error: "An error has occured, please try again later", progress: "", fileName: "" })
                    }.bind(this),
                    chooseFile: function (files) {
                        console.log('you choose', typeof files == 'string' ? files : files[0].name)
                        this.setState({ fileName: files[0].name })
                    }.bind(this),
                    uploadFail: function (err) {
                        console.log(err)
                        this.setState({ error: "An error has occured, please try again later", progress: "", fileName: "" })
                    }.bind(this),
                    uploading: function (progress) {
                        this.setState({ progress: progress.loaded / progress.total, error: {} })
                        console.log("loading...", progress.loaded / progress.total, "%")
                    }.bind(this),

                    paramAddToField: { ...this.state }
                }}>

                    <div className="row">
                        <div className="col-lg-12">

                            <div className="notification notice large margin-bottom-55">
                                <h4>Create a blog post 🙂</h4>
                                <p>Use this section to create a blog to create blog post. Category field input is optional</p>
                            </div>

                            <div id="add-listing" className="separated-form">

                                <div className="add-listing-section">

                                    <div className="add-listing-headline">
                                        <h3><i className="sl sl-icon-doc"></i> Basic Informations</h3>
                                    </div>

                                    <div className="row with-forms">
                                        <div className="col-md-6">
                                            <h5> Blog post title <i className="tip" data-tip-content="Name of your business"></i></h5>
                                            <input required name="title" onChange={this.typing} className="search-field" type="text" />
                                        </div>
                                        <div className="col-md-6">
                                            <h5>Category</h5>
                                        <select required onChange={this.typing} name="category" className="" >
                                                <option >Select Category</option>
                                                {data.industry.map((industry) => (
                                                    <option value={industry.title}>{industry.title}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>


                                </div>
                                <div className="add-listing-section margin-top-45">

                                    <div className="add-listing-headline">
                                        <h3><i className="sl sl-icon-docs"></i> Details</h3>
                                    </div>

                                    <div className="form">
                                        <h5>Description</h5>
                                    <textarea required onChange={this.typing} className="WYSIWYG" name="description" cols="40" rows="3" id="summary" spellcheck="true"></textarea>
                                    </div>






                                </div>


                            </div>
                        </div>

                    </div>
                    {/* <button href="#" className="btn  btn-default transparent" ref="chooseBtn"> Choose an image</button> */}
                    {/* <a href="#" className="button preview">Preview <i className="fa fa-arrow-circle-right"></i></a> */}
                    {/* <a href="#" className="button preview">Preview <i className="fa fa-arrow-circle-right"></i></a> */}
                        <p style={{ color: "#f91942", marginLeft: "3px" }}>{this.state.error.server ? <small>{this.state.error.server}</small> : null}</p>

                    {this.state.fileName === "" ?
                        <button ref="chooseBtn" className="button preview" >  <i className="fa fa-arrow-circle-right"></i>
                            upload image
                                        </button> : <div className="row">{this.state.fileName}</div>}
                    {this.state.fileName !== "" ?
                        <button ref="uploadBtn" className="button preview"  > 
                                {this.state.progress ? <span><i className="fa fa-spin fa-spinner" style={{ marginRight: "5px" }}></i> Loading</span> : "Continue"}
                         
                         </button>
                        : null}
                    <style>{`
                    // .dashboard-content > div  >  div{
                    //     display:block !important
                    // }
                    `}
                    </style>

                </FileUpload >
                </form>
            </div >
        );
    }
}

export default Addblogpost;