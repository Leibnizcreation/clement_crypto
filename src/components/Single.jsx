import React, { Component } from 'react';
import moment from 'moment';
import axios from 'axios';
import apiUrl from "../config"

class Single extends Component {

  constructor(props) {
    super(props)
    this.state = {
      blogpost: {},
      blogposts: [],
      error: false
    }
  }
  componentWillMount() {
    axios.get(`${apiUrl}/api/blog/postById?slug=${this.props.match.params.slug}`).then((res) => {
      if (res.data.success) {
        this.setState({ blogpost: res.data.success })
        // this.props.setUserProfile(res.data.success)
      } else this.setState({ error: true })
    })

    axios.get(`${apiUrl}/api/blog/recent`).then((res) => {
      if (res.data.success) {
        this.setState({ blogposts: res.data.success })
        // this.props.setUserProfile(res.data.success)
      } else console.log(res)
    })
  }
  render() {
    return (
      this.state.error === false ?
        <section id="main" className="sec-pad">
          <div className="container">
            <div className="row">
              <div className="col-md-9" style={{ borderRight: '1px solid #000080' }}>
                <div className="single-post">
                  <div className="post-thumbnail">
                    <img src={`../../images/${this.state.blogpost.imgUrl}`} />
                  </div>
                  <div className="post-content">
                    <h4 className="post-title"><a href="">{this.state.blogpost.title}</a></h4>
                    <h6 className="date"> {moment(this.state.blogpost.date).format("LL")} <span style={{ float: 'right' }}><i className="fa fa-comments"> 20</i></span></h6>
                    <p>{this.state.blogpost.description}</p>
                  </div>
                  <div className="share-btn"><h4>Share This</h4>
                    <ul>
                      <li><a href=""><i className="fa fa-facebook" /></a></li>
                      <li><a href=""><i className="fa fa-twitter" /></a></li>
                      <li><a href=""><i className="fa fa-linkedin" /></a></li>
                      <li><a href=""><i className="fa fa-instagram" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="blog-sidebar">
                  <div className="archive">
                    <h3 className="sidebar-title">
                      Go to  Archive
              </h3>
                    <input type="date" name="bday" min="2000-01-02" />
                  </div>
                  {/* <!-- Recent Post --> */}
                  <div className="recent-post">
                    <h3 className="sidebar-title">
                      Recent Posts
              </h3>
                    <ul>
                      {this.state.blogposts.map((post, key) => (
                        <li key={key}><a href={`/blog/${post.slug}`}>{post.title}</a></li>
                      ))}
                      <li><a href="">What is lorem Ipsum ? </a></li>
                      <li><a href="">Why do we use it?</a></li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section> :
        <div className="row">
          <div className="col-sm-12 align-center" style={{marginTop:'80px'}}>
            <center>
              <h1>404</h1>
              <h5>This post has been moved or does not exits</h5>
            </center>
          </div>
        </div>
    );
  }
}

export default Single;
