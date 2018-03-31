import React, { Component } from 'react';
import axios from 'axios';
import apiUrl from "../config"
class ForgotPassword extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email:"",
      success:"",
      isLoading:false,
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
    
    axios.post(`${apiUrl}/api/users/resetPassword`,this.state).then((res) => {
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
  render(){
return (
  <section id="main" className="sec-pad">
    <div className="container">
      <div className="row text-center">
        <div style={{ width: '40%', margin: '0 auto' }}>
          {this.state.success === true ? <div className="alert alert-success">Password reset was successfully</div> : null}
                {this.state.error === true ? <div className="alert alert-danger">An error has occured. please try again later</div> : null}
        <form onSubmit={this.submit}>
          <input type="email" required onChange={this.typing} name="email" placeholder="Enter Your User Email" />
            <button className="cmn-btn"  >
                    {this.state.isLoading ? <span><i className="fa fa-spin fa-spinner" style={{ marginRight: "5px" }}></i> Resetting</span> : "Reset"}

                  </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);
  }
}
export default ForgotPassword;
