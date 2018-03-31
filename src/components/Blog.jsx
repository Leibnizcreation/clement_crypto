import React, { Component } from 'react';
import moment from 'moment';
import axios from 'axios';
import apiUrl from "../config"

class Blog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      blogposts: [],
      recent: [],
      title: "",
      result: [],
      search: false,
      searching: false,
    }
  }
  componentWillMount() {
    axios.get(`${apiUrl}/api/blog`).then((res) => {
      if (res.data.success) {
        console.log(res)
        this.setState({ blogposts: res.data.success })
        // this.props.setUserProfile(res.data.success)
      } else console.log(res)
    })
    axios.get(`${apiUrl}/api/blog/recent`).then((res) => {
      if (res.data.success) {
        this.setState({ recent: res.data.success })
        // this.props.setUserProfile(res.data.success)
      } else console.log(res)

    })
    if (window.location.search !== "")
      axios.get(`${apiUrl}/api/blog/search${window.location.search}`).then((res) => {
        console.log(window.location.search, res)
        if (res.data.result) {
          this.setState({ result: res.data.result, search: true });
        }
      });
  }

  search(e) {
    e.preventDefault();
    var obj = { name: this.state.name, search: true, location: this.state.location }

    this.setState({ searching: true })
    axios.get(`${apiUrl}/api/blog/search?name=${this.state.name}&location=${this.state.location}`).then((res) => {

      if (res.data.search) {
        //    this.setState({result:res.data.search});
        this.setState({ searching: false })
      }
    });
  }
  typing(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value, searching: true }, (state) => {
      console.log(this.state.title)
      axios.get(`${apiUrl}/api/blog/search?title=${this.state.title}`).then((res) => {
        if (res.data.result) {
          console.log(res)
          this.setState({ result: res.data.result, search: true });
          this.setState({ searching: false })
        }
      });
    })
  }
  splice(text,slug) {
    if (text.length > 80) {
      var split = text.substr(0, 80)
      split += "... Read more"
      return split
    }
    else return text
  }
  render() {
    var s = "this is a sample string"
    var sub = s.substr(0, 10)
    console.log(sub + "...")
    return (
      <section id="main" className="sec-pad">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <form action={`/blog?title=${this.state.title}`}>
                <input type="text" name="title" placeholder="search" required className="search-input" onChange={this.typing.bind(this)} />
                <button type="submit" className="cmn-btn search-btn">Search</button>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-md-9" style={{ borderRight: '1px solid #000080' }}>
              <div className="row">
                {this.state.search && this.state.result.length > 0 ?
                  <div className="col-sm-12">
                    <h5>{this.state.result.length} search result found for "{this.state.title}"</h5>
                  </div> : null}
                {
                  this.state.search ?
                    this.state.result.map((post, key) => (
                      <div className="col-sm-12">
                        <div className="post-list" key={key}>
                          <div className="post-thumbnail">
                            <img src={`../../images/${post.imgUrl}`} />
                          </div>
                          <div className="post-content">
                            <h4 className="post-title"><a href={`blog/${post.slug}`} style={{ textTransform: "capitalize" }}>{post.title}</a></h4>
                            <h6 className="date">{moment(post.date).format("LL")}<span style={{ float: 'right' }}><i className="fa fa-comments"> 20</i></span></h6>
                            <p>{post.description}</p>
                          </div>
                        </div>
                      </div>
                    ))
                    : window.location.search === "" ?
                      this.state.blogposts.map((post, key) => (
                        <div className="col-sm-12">
                          <div className="post-list" key={key}>
                            <div className="post-thumbnail">
                              <img src={`../../images/${post.imgUrl}`} />
                            </div>
                            <div className="post-content">
                              <h4 className="post-title"><a href={`blog/${post.slug}`} style={{ textTransform: "capitalize" }}>{post.title}</a></h4>
                              <h6 className="date">{moment(post.date).format("LL")}<span style={{ float: 'right' }}><i className="fa fa-comments"> 20</i></span></h6>
                              <p id="desc">{this.splice(post.description)}</p>
                            </div>
                          </div>
                        </div>
                      ))
                      : <div className="center-align">
                        No search result found
                                        </div>
                }
                {this.state.search && this.state.result.length === 0 ?
                  <div className="center-align">
                    <h5>No search result found for "{this.state.title}"</h5>
                  </div> : null}
              </div>

            </div>
            <div className="col-md-3">
              <div className="blog-sidebar">
                <div className="archive">
                  <h3 className="sidebar-title">
                    Go to  Archive
              </h3>
                  <input type="date" name="bday" min="2000-01-02" />
                  {/* <!-- <div class="month">
                        <ul>
                          <li class="prev">&#10094;</li>
                          <li class="next">&#10095;</li>
                          <li>
                            August<br />
                              <span style="font-size:18px">2017</span>
                  </li>
                </ul>
              </div>

                        <ul class="weekdays">
                          <li>Mo</li>
                          <li>Tu</li>
                          <li>We</li>
                          <li>Th</li>
                          <li>Fr</li>
                          <li>Sa</li>
                          <li>Su</li>
                        </ul>

                        <ul class="days">
                          <li>1</li>
                          <li>2</li>
                          <li>3</li>
                          <li>4</li>
                          <li>5</li>
                          <li>6</li>
                          <li>7</li>
                          <li>8</li>
                          <li>9</li>
                          <li><span class="active">10</span></li>
                          <li>11</li>
                          <li>12</li>
                          <li>13</li>
                          <li>14</li>
                          <li>15</li>
                          <li>16</li>
                          <li>17</li>
                          <li>18</li>
                          <li>19</li>
                          <li>20</li>
                          <li>21</li>
                          <li>22</li>
                          <li>23</li>
                          <li>24</li>
                          <li>25</li>
                          <li>26</li>
                          <li>27</li>
                          <li>28</li>
                          <li>29</li>
                          <li>30</li>
                          <li>31</li>
                        </ul> --> */}
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
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}


export default Blog;

