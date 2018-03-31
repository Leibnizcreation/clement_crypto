import React, { Component } from 'react';
import axios from 'axios';
import apiUrl from "../config"
class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email:"",
      subject:"",
      message:"",
      success:"",
      error:""
    }
    this.typing = this.typing.bind(this)
    this.submit = this.submit.bind(this)
  }

  typing(e){
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value })
  }
  submit(e){
    e.preventDefault();
    this.setState({isLoading:true,success:"",error:"" })
    
    axios.post(`${apiUrl}/api/users/contact`,this.state).then((res) => {
      console.log(res)
      if (res.data.success) {
        this.setState({ success: true,isLoading:false});
        setTimeout(() => {
          this.setState({ success: false })
        }, 3000);
      } else this.setState({ error: true,isLoading:false });
      this.setState({ isLoading: false })
      
    }).catch((err) => {
      this.setState({ error: true,isLoading:false })
      setTimeout(() => {
        this.setState({ error: false })
      }, 3000);
    })
  }
  render() {
    return (
      <section id="main" className="sec-pad">
        <div className="container">
          <div className="row">
            <div className="col-md-2" />
            <div className="col-md-8">
              <div className="contact-form">
                <h2 className="contact-title">
                  Contact Us
            </h2>
                <div className="contac-info">
                  <h4>Email</h4>
                  <h5>admin@gmail.com</h5>
                </div>
                <h2>
                  Or Use This Form
            </h2>
                {this.state.success === true ? <div className="alert alert-success">Contact form submitted successfully</div> : null}
                {this.state.error === true ? <div className="alert alert-danger">An error has occured. please try again later</div> : null}
                <form onSubmit={this.submit}>
                  <div className="full-input"> 
                    <input required type="email" onChange={this.typing} name="email" placeholder="Enter Your Email" />
                  </div>
                  <div className="full-input">
                    <input required type="text" onChange={this.typing} name="subject" placeholder="Enter Your Subject" />
                  </div>
                  <div className="full-input">
                    <textarea required name="message" onChange={this.typing} placeholder="Enter Your Message" />
                  </div>

                  {/* <!-- Replace data-sitekey with your own one, generated at https://www.google.com/recaptcha/admin --> */}
                  <div className="g-recaptcha" data-sitekey="6LcbkEQUAAAAAL8Q8Tl7r_QOqtr5O5UtywpYvqXG" />
                  <button className="cmn-btn"  >
                    {this.state.isLoading ? <span><i className="fa fa-spin fa-spinner" style={{ marginRight: "5px" }}></i> Sending</span> : "Send Message"}

                  </button>
                 
                </form>
              </div>
            </div>
            <div className="col-md-2" />
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;

