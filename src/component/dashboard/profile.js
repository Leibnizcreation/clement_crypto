import React, { Component } from 'react';

import Profileform1 from "./profileform1"
import Profileform2 from "./profileform2"
import moment from "moment"
import FileUpload from "react-fileupload"
class Profile extends Component {



    render() {
        let token = localStorage.getItem("jwToken")

        return (
            <div className="">

                <div id="titlebar">
                    <div className="row">
                        <div className="col-md-12">
                            <h2>Admin, panel!</h2>
                            <nav id="breadcrumbs">
                                <ul>
                                    <li><a href="#">Home</a></li>
                                    <li>Dashboard</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>



                <div className="row">

                    <div className="col-lg-3 col-md-6">
                        <div className="dashboard-stat color-1">
                            <div className="dashboard-stat-content"><h4>{this.props.members.length}</h4> <span>Total Members</span></div>
                            <div className="dashboard-stat-icon"><i className="im im-icon-Map2"></i></div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="dashboard-stat color-2">
                            <div className="dashboard-stat-content"><h4>{this.props.events.length}</h4> <span>Total Events</span></div>
                            <div className="dashboard-stat-icon"><i className="im im-icon-Line-Chart"></i></div>
                        </div>
                    </div>


                    <div className="col-lg-3 col-md-6">
                        <div className="dashboard-stat color-3">
                            <div className="dashboard-stat-content"><h4>{this.props.products.length}</h4> <span>Items in marketplace</span></div>
                            <div className="dashboard-stat-icon"><i className="im im-icon-Add-UserStar"></i></div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="dashboard-stat color-4">
                            <div className="dashboard-stat-content"><h4>1</h4> <span>Blog Post</span></div>
                            <div className="dashboard-stat-icon"><i className="im im-icon-Heart"></i></div>
                        </div>
                    </div>
                </div>


                <div className="row">

                    <div className="col-lg-6 col-md-12">
                        <div className="dashboard-list-box with-icons margin-top-20">
                            <h4>Recent Activities</h4>
                            <ul>
                                {this.props.newArtist.map((artist) => (
                                    <li>
                                        <i className="list-box-icon sl sl-icon-layers"></i> {artist.firstName} {artist.lastName} <strong><a href="#">{artist.category} </a></strong> has just joined!
							<a href="#" className="close-list-item"><i className="fa fa-close"></i></a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="dashboard-list-box invoices with-icons margin-top-20">
                            <h4>Invoices</h4>
                            <ul>
                                {this.props.newProducts.map((product) => (
                                    <li><i className="list-box-icon sl sl-icon-doc"></i>
                                        <strong>{product.title}</strong>
                                        <ul>
                                            <li className="paid">Price</li>
                                            <li>${product.price}</li>
                                            <li>Date: {moment(product.date).format("LL")}</li>
                                        </ul>
                                        <div className="buttons-to-right">
                                            <a href="dashboard-invoice.html" className="button gray">View Item</a>
                                        </div>
                                    </li>
                                ))}

                            </ul>
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}

export default Profile;
