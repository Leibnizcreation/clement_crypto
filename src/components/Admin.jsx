import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Async } from 'react-select';
import moment from 'moment';
import axios from 'axios';
import apiUrl from "../config"
import $ from 'jquery';
import validator from "validator"
import swal from 'sweetalert2';
import PropTypes from 'prop-types';
import FileUpload from "react-fileupload"
import DatePicker from 'react-datepicker';
import logoutAction from '../actions/logoutAction';
import { getAdmin, getAllUsers, creditUser } from '../actions/userAction';

/**
 * Dashboard component
 * @class Dashboard
 * @extends {Component}
 */
class Admin extends Component {
  /**
   * Creates an instance of Dashboard.
   * @param {any} props
   * @memberOf Dashboard
   */
  constructor(props) {
    super(props);
    this.state = {
      earnAmount: '',
      earnEmail: '',
      postSuccessful: "",
      postLoading: false,
      earnSite: '',
      earnSitename: '',
      earnType: '',
      error: '',
      title: '',
      category: '',
      fileName: "",
      description: '',
      usersSiteName: [],
      usersSites: [],
      allUsersSites: [],
      rewardType: '',
      rewards: []
    };
    this.payouts = this.payouts.bind(this);
    this.sites = this.sites.bind(this);
    this.status = this.status.bind(this);
    this.onChange = this.onChange.bind(this);
    this.earnSubmit = this.earnSubmit.bind(this);
    this.confirmPayment = this.confirmPayment.bind(this);
    this.verifySite = this.verifySite.bind(this);
    this.users = this.users.bind(this);
    this.getOptions = this.getOptions.bind(this);
    this.selectOptionChange = this.selectOptionChange.bind(this);
    this.determineReward = this.determineReward.bind(this);
    this.submitPost = this.submitPost.bind(this);
  }

  /**
   * Loads user's details on load
   * @method componentDidMount
   * @returns {void}
   * @memberOf Dashboard
   */
  componentDidMount() {
    this.props.getAdmin();
    this.props.getAllUsers();
  }

  /**
   * Listen for prop changes
   * @method componentWillReceiveProps
   * @param {any} nextProps
   * @returns {void}
   * @memberOf Dashboard
   */
  componentWillReceiveProps(nextProps) {
    this.setState({
      details: nextProps.user,
      loading: false
    });
  }

  /**
   * Handles change event
   * @param {any} e
   * @returns {void}
   * @memberOf Admin
   */
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
    if (e.target.name === 'earnSite') {
      this.determineReward(e.target.value);
      const usersSiteName = this.state.allUsersSites.filter(b => b.site_type === e.target.value);
      this.setState({
        usersSiteName
      });
    }
  }

  confirmPayment(id) {
    axios.post(`${apiUrl}/api/admin/confirm-payment`, { id })
      .then(() => {
        swal({
          title: 'Success',
          html: 'Payment Confirmed Successfully',
          type: 'success',
          allowOutsideClick: false
        })
          .then(() => {
            this.props.getAdmin();
          });
      }, (({ response }) => {
        swal({
          title: 'Error',
          html: response.data.message,
          type: 'error',
          allowOutsideClick: false
        });
      }));
  }
  submitPost(e) {
    e.preventDefault();
    this.setState({ postLoading: true })
    axios.post(`${apiUrl}/api/admin/submitpost`).then((res) => {
      if (res.data.success) {
        this.setState({ postSuccessful: true, postLoading: false });
        setTimeout(() => window.location.reload(), 2000)
      }
    })
  }
  verifySite(id, status) {
    axios.post(`${apiUrl}/api/admin/confirm-site`, { id, status })
      .then(() => {
        swal({
          title: 'Success',
          html: 'Site confirmed successfully!',
          type: 'success',
          allowOutsideClick: false
        })
          .then(() => {
            this.props.getAdmin();
          });
      }, (({ response }) => {
        swal({
          title: 'Error',
          html: response.data.message,
          type: 'error',
          allowOutsideClick: false
        });
      }));
  }

  payouts() {
    let Payout;
    const { payouts } = this.props.admin;
    if (payouts.length > 0) {
      Payout = payouts.map((payout, i) => (
        <tr key={i}>
          <td>{payout.email}</td>
          <td>{payout.amount}</td>
          <td>{payout.type.toUpperCase()}</td>
          <td>{payout.address}</td>
          <td>{payout.status === 0 ? 'pending' : 'paid'}</td>
          <td>
            <button
              onClick={() => this.confirmPayment(payout.id)}
              className="cmn-btn confirm"
              disabled={payout.status === 1}
            >
              {payout.status === 1 ? 'Confirmed' : 'Confirm'}
            </button>
          </td>
        </tr>
      ));
    } else {
      Payout = (
        <tr>
          <td colSpan="6" style={{ textAlign: 'center' }}>
            No payout requests at this time.
          </td>
        </tr>
      );
    }

    return Payout;
  }

  users() {
    let User;
    const { users } = this.props.user;
    if (users.length > 0) {
      User = users.map((user, i) => (
        <tr key={i}>
          <td>{user.email}</td>
          <td>{user.role === 1 ? 'Admin' : 'Regular User'}</td>
        </tr>
      ));
    } else {
      User = (
        <tr>
          <td colSpan="2" style={{ textAlign: 'center' }}>
            No user to display
          </td>
        </tr>
      );
    }

    return User;
  }

  status(num) {
    switch (num) {
      case 0:
        return <i className="material-icons">timer</i>;
      case 1:
        return <i className="material-icons">check</i>;
      default:
        return <i className="material-icons">close</i>;
    }
  }

  sites() {
    let Site;
    const { sites } = this.props.admin;
    if (sites.length > 0) {
      Site = sites.map((site, i) => (
        <tr key={i}>
          <td>{site.site_name}</td>
          <td>
            {site.username} &nbsp;
            {this.status(site.status)}
          </td>
          <td>{site.email}</td>
          <td>
            {site.status === 0 ? (
              <span>
                <button
                  onClick={() => this.verifySite(site.id, 1)}
                  className="cmn-btn"
                >
                  Valid
                </button>
                <button
                  className="cmn-btn"
                  style={{ backgroundColor: 'red' }}
                  onClick={() => this.verifySite(site.id, 2)}
                >
                  Invalid
                </button>
              </span>
            ) : (
                <button id="submit" disabled>
                  Verified
                </button>
              )}
          </td>
        </tr>
      ));
    } else {
      Site = (
        <tr>
          <td colSpan="4" style={{ textAlign: 'center' }}>
            No registered Sites yet.
          </td>
        </tr>
      );
    }

    return Site;
  }

  earnSubmit(e) {
    e.preventDefault();
    this.setState({
      error: ''
    });
    const {
      earnAmount,
      earnEmail,
      earnSite,
      earnSitename,
      earnType,
      rewardType
    } = this.state;
    if (
      !earnAmount ||
      !earnEmail ||
      !earnSite ||
      !earnSitename ||
      !earnType ||
      !rewardType
    ) {
      this.setState({
        error: 'Please fill all fields'
      });
      return;
    }
    this.props
      .creditUser({
        amount: earnAmount,
        email: earnEmail,
        siteName: earnSite,
        siteType: earnSitename,
        type: earnType,
        rewardType
      })
      .then((res) => {
        if (res) {
          swal({
            title: 'Success',
            html: 'User credited successfully!',
            type: 'success',
            allowOutsideClick: false
          }).then(() => {
            this.setState({
              earnAmount: '',
              earnEmail: '',
              earnSite: '',
              earnSitename: '',
              earnType: '',
              error: '',
              rewardType: ''
            });
          });
        }
      });
  }

  /**
   * Fetch names that matches what the user is typing
   * @param {any} e
   * @returns {void}
   * @memberOf Users
   */
  getOptions(input) {
    return axios.get(`${apiUrl}/api/users/search?q=${input}`).then(({ data }) => {
      const options = data.users.map(user => ({
        value: user.email,
        label: user.email,
      }));
      return { options };
    });
  }

  /**
   * Set the student's name to state on change
   * @param {any} val
   * @returns {void}
   * @memberOf Documents
   */
  selectOptionChange(val) {
    this.setState({
      earnEmail: val ? val.value : '',
    }, () => {
      axios.get(`${apiUrl}/api/users/sites/user?email=${val ? val.value : ''}`)
        .then(({ data }) => {
          const raw = data.map(site => site.site_type);
          this.setState({
            usersSites: Array.from(new Set(raw)),
            allUsersSites: data,
            usersSiteName: []
          });
        });
    });
  }

  determineReward(earnSite) {
    switch (earnSite) {
      case 'poker':
        console.log('here');
        this.setState({
          rewards: [
            { value: 'rakeback_one', label: 'Rakeback One' },
            { value: 'rakeback_two', label: 'Rakeback Two' },
            { value: 'rakeback_three', label: 'Rakeback Three' }
          ]
        });
        break;
      case 'trading':
        this.setState({
          rewards: [
            { value: 'bonus', label: 'Bonus' },
            { value: 'free_rebate', label: 'Free Rebate' } //
          ]
        });
        break;
      case 'tools':
        this.setState({
          rewards: [
            { value: 'rewards', label: 'Rewards' },
            { value: 'free_rebate', label: 'Free Rebate' }
          ]
        });
        break;
      case 'sports':
        this.setState({
          rewards: [
            { value: 'betback', label: 'Betback' },
            { value: 'lossback', label: 'Lossback' }
          ]
        });
        break;
      default:
        this.setState({
          rewards: []
        });
    }
  }

  /**
   * Renders the Dashboard component
   * @method render
   * @returns {void}
   * @memberOf Dashboard
   */
  render() {
    const { error } = this.state;
    return (
      <section id="main" className="sec-pad poker">
        <div className="container">
          <div className="row">
            <div className="d-flex flex-row mt-2">
              <ul
                className="nav nav-tabs nav-tabs--vertical nav-tabs--left"
                role="navigation"
              >
                <li className="nav-item">
                  <a
                    href="#lorem"
                    className="nav-link active"
                    data-toggle="tab"
                    role="tab"
                    aria-controls="lorem"
                  >
                    EARNINGS
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#ipsum"
                    className="nav-link"
                    data-toggle="tab"
                    role="tab"
                    aria-controls="ipsum"
                  >
                    PAYOUTS
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#sit-amet"
                    className="nav-link"
                    data-toggle="tab"
                    role="tab"
                    aria-controls="sit-amet"
                  >
                    SITES
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#users"
                    className="nav-link"
                    data-toggle="tab"
                    role="tab"
                    aria-controls="sit-amet"
                  >
                    USERS
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#blogpost"
                    className="nav-link"
                    data-toggle="tab"
                    role="tab"
                    aria-controls="sit-amet"
                  >
                    Blog Post
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div
                  className="tab-pane fade show active"
                  id="lorem"
                  role="tabpanel"
                >
                  <div className="flex">
                    <div className="flex-first">
                      <div className="convert">
                        <h5>CREDIT USER</h5>
                        {error && (
                          <div className="error">{error}</div>
                        )}
                        <div className="form-group">
                          <label className="small" htmlFor="earnEmail">
                            Please select user
                          </label>
                          <Async
                            name="form-field-name"
                            value={this.state.earnEmail}
                            onChange={this.selectOptionChange}
                            loadOptions={this.getOptions}
                          />
                        </div>
                        <div className="form-group">
                          <label className="small" htmlFor="earnSite">
                            Select Site
                          </label>
                          <select
                            onChange={this.onChange}
                            value={this.state.earnSite}
                            className="form-control"
                            name="earnSite"
                            id="earnSite"
                          >
                            <option value="">Please select</option>
                            {this.state.usersSites.map(userSite => (
                              <option value={userSite} key={userSite}> {userSite}</option>
                            ))}
                          </select>
                        </div>
                        <div className="form-group">
                          <label className="small" htmlFor="earnSitename">
                            Select Sitename
                          </label>
                          <select
                            onChange={this.onChange}
                            value={this.state.earnSitename}
                            className="form-control"
                            name="earnSitename"
                            id="earnSitename"
                          >
                            <option value="">Please select</option>
                            {this.state.usersSiteName.map((userSiteName, i) => (
                              <option value={userSiteName.site_name} key={i}> {userSiteName.site_name}</option>
                            ))}
                          </select>
                        </div>

                        <div className="form-group">
                          <label className="small" htmlFor="earnSitename">
                            Payment Type
                          </label>
                          <select
                            onChange={this.onChange}
                            value={this.state.rewardType}
                            className="form-control"
                            name="rewardType"
                          >
                            <option value="">Please select</option>
                            {this.state.rewards.map((reward, i) => (
                              <option value={reward.value} key={i}> {reward.label}</option>
                            ))}
                          </select>
                        </div>

                        <div className="form-group">
                          <label className="small" htmlFor="earnAmount">
                            Enter Amount
                          </label>
                          <input
                            onChange={this.onChange}
                            value={this.state.earnAmount}
                            type="number"
                            className="form-control"
                            name="earnAmount"
                            aria-describedby="earnAmount"
                            placeholder="Enter Amount"
                          />
                        </div>

                        <div className="form-group">
                          <label className="small" htmlFor="earnType">
                            Select currency
                          </label>
                          <select
                            onChange={this.onChange}
                            value={this.state.earnType}
                            className="form-control"
                            name="earnType"
                            id="earnType"
                          >
                            <option value="">Please select</option>
                            <option value="USD">USD</option>
                            <option value="BTC">BTC</option>
                            <option value="ETH">ETH</option>
                            <option value="BCH">BCH</option>
                            <option value="LTC">LTC</option>
                            <option value="DASH">DASH</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <button onClick={this.earnSubmit} className="cmn-btn">
                            CREDIT USER
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="flex-second" />
                  </div>
                </div>

                {/* <!-- 2nd --> */}
                <div className="tab-pane fade" id="ipsum" role="tabpanel">
                  <div className="history">
                    <h5>PAYOUT REQUESTS</h5>
                    <div className="history-list">
                      <p>Pocker</p>
                      <table className="table table-bordered">
                        <thead>
                          <tr>
                            <th>EMAIL</th>
                            <th>AMOUNT</th>
                            <th>CURRENCY</th>
                            <th>ADDRESS</th>
                            <th>STATUS</th>
                            <th>ACTIONS</th>
                          </tr>
                        </thead>
                        <tbody>{this.payouts()}</tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* <!-- 3rd --> */}
                <div className="tab-pane fade" id="sit-amet" role="tabpanel">
                  <div className="history">
                    <h5>HISTORY</h5>
                    <div className="history-list">
                      <table className="table table-bordered">
                        <thead>
                          <tr>
                            <th>SITES</th>
                            <th>USERNAME</th>
                            <th>EMAIL</th>
                            <th>ACTIONS</th>
                          </tr>
                        </thead>
                        <tbody>{this.sites()}</tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* <!-- 4th --> */}
                <div className="tab-pane fade" id="users" role="tabpanel">
                  <div className="history">
                    <h5>USERS</h5>
                    <div className="history-list">
                      <table className="table table-bordered">
                        <thead>
                          <tr>
                            <th>EMAIL</th>
                            <th>ROLE</th>
                          </tr>
                        </thead>
                        <tbody>{this.users()}</tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* <!-- 5th --> */}
                <div className="tab-pane fade" id="blogpost" role="tabpanel">
                  <div className="history">
                    <h5>Add Blog Post</h5>
                    
                    {this.state.postSuccessful === true ? <div className="alert alert-success">Blog post was Successful</div>:null}
                    {this.state.error ? <div className="alert alert-danger">Blog post was not Successful, Please try again later</div>: null}
                    <div className="history-list">
                      <FileUpload options={{
                        baseUrl: `${apiUrl}/api/admin/blogpost`,
                        param: {
                          fid: 0
                        },

                        chooseAndUpload: false,
                        accept: "image/*",
                        fileFieldName: "blogpost",
                        uploadSuccess: function (resp) {
                          console.log(resp)
                          if (resp.error) this.setState({ error: resp.error,postLoading:false, isLoading: false, fileName: "" })
                          else if(resp.success) {
                            this.setState({ postSuccessful: true,isLoading:false, postLoading: false });
                            setTimeout(() => window.location.reload(), 3000)
                          }
                        }.bind(this),
                        uploadError: function (err) {
                          this.setState({ error: "An error has occured, please try again later", isLoading: false, fileName: "" })
                        }.bind(this),
                        chooseFile: function (files) {
                          console.log('you choose', typeof files == 'string' ? files : files[0].name)
                          this.setState({ fileName: files[0].name })
                        }.bind(this),
                        uploadFail: function (err) {
                          console.log(err)
                          this.setState({ error: "An error has occured, please try again later", isLoading: false, fileName: "" })
                        }.bind(this),
                        uploading: function (progress) {
                          this.setState({ progress: progress.loaded / progress.total, error: "" , isLoading:true})
                          console.log("loading...", progress.loaded / progress.total, "%")
                        }.bind(this),
                        paramAddToField: { ...this.state }
                      }}>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="">
                              <label> Title <span className="text-danger">*</span></label>
                              <input required type="text" placeholder="title" onChange={this.onChange} name="title" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="">
                              <label> Category <span className="text-danger">*</span></label>
                              <input required type="text" placeholder="category" onChange={this.onChange} name="category" />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="">
                              <label> Description <span className="text-danger">*</span> </label>

                              <textarea required name="description" onChange={this.onChange} id="" cols="30" rows="10"></textarea>
                            </div>
                          </div>
                        </div>
                        {validator.isEmpty(this.state.fileName)?null:<div className="row " style={{ padding: "0px 15px" }}>You have choosen {this.state.fileName}</div>}
                        {validator.isEmpty(this.state.fileName) || validator.isEmpty(this.state.category) || validator.isEmpty(this.state.description) || validator.isEmpty(this.state.title)?
                          <button ref="chooseBtn" disabled={validator.isEmpty(this.state.fileName) ?false:true} className="btn btn-default preview" > 
                            upload image  <i className="fa fa-arrow-circle-right"></i>
                                        </button> :null}
                        {this.state.fileName !== "" && this.state.category && this.state.description && this.state.title?
                          <button ref="uploadBtn" className="btn btn-success"  >
                            {this.state.isLoading ? <span><i className="fa fa-spin fa-spinner" style={{ marginRight: "5px" }}></i> Uploading</span> : "Continue"}

                          </button>
                          : null}
                      </FileUpload>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  admin: state.admin,
  user: state.user
}); //

Admin.propTypes = {
  auth: PropTypes.shape({
    isAuthenticated: PropTypes.bool.isRequired,
    user: PropTypes.shape({}).isRequired
  }).isRequired,
  logoutAction: PropTypes.func.isRequired
};

export default connect(mapStateToProps, {
  logoutAction,
  getAdmin,
  getAllUsers,
  creditUser
})(Admin);
