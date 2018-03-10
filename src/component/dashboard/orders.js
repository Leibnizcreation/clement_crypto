import React, { Component } from 'react';

class Order extends Component {
    render() {
        return (
            <div className="dashboard-content">


                <div className="row">

                    <div className="col-lg-12 col-md-12">
                        <div className="dashboard-list-box margin-top-0">

                            <div className="sort-by">
                                <div className="sort-by-select">
                                    <select data-placeholder="Default order" className="chosen-select-no-single">
                                        <option>Any Status</option>
                                        <option>Approved</option>
                                        <option>Pending</option>
                                        <option>Canceled</option>
                                    </select>
                                </div>
                            </div>


                            <div id="small-dialog" className="zoom-anim-dialog mfp-hide">
                                <div className="small-dialog-header">
                                    <h3>Send Message</h3>
                                </div>
                                <div className="message-reply margin-top-0">
                                    <textarea cols="40" rows="3" placeholder="Your Message to Kathy"></textarea>
                                    <button className="button">Send</button>
                                </div>
                            </div>

                            <h4>Orders List</h4>
                            <ul>

                                <li className="pending-booking">
                                    <div className="list-box-listing bookings">
                                        <div className="list-box-listing-img"><img src="http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&s=120" alt="" /></div>
                                        <div className="list-box-listing-content">
                                            <div className="inner">
                                                <h3>Tom's Restaurant <span className="booking-status pending">Pending</span></h3>

                                                <div className="inner-booking-list">
                                                    <h5>Order Date:</h5>
                                                    <ul className="booking-list">
                                                        <li className="highlighted">12.12.2017 at 15:30 P.M</li>
                                                    </ul>
                                                </div>

                                                <div className="inner-booking-list">
                                                    <h5>Order Details:</h5>
                                                    <ul className="booking-list">
                                                        <li className="highlighted">3-4 People</li>
                                                    </ul>
                                                </div>

                                                <div className="inner-booking-list">
                                                    <h5>Client:</h5>
                                                    <ul className="booking-list">
                                                        <li>John Smith</li>
                                                        <li>john@example.com</li>
                                                        <li>123-456-789</li>
                                                    </ul>
                                                </div>

                                                <a href="#small-dialog" className="rate-review popup-with-zoom-anim"><i className="sl sl-icon-envelope-open"></i> Send Message</a>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="buttons-to-right">
                                        <a href="#" className="button gray reject"><i className="sl sl-icon-close"></i> Cancel</a>
                                        <a href="#" className="button gray approve"><i className="sl sl-icon-check"></i> Approve</a>
                                    </div>
                                </li>

                                <li className="approved-booking">
                                    <div className="list-box-listing bookings">
                                        <div className="list-box-listing-img"><img src="http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&s=120" alt="" /></div>
                                        <div className="list-box-listing-content">
                                            <div className="inner">
                                                <h3>Burger House <span className="booking-status">Approved</span></h3>

                                                <div className="inner-booking-list">
                                                    <h5>Order Date:</h5>
                                                    <ul className="booking-list">
                                                        <li className="highlighted">10.12.2017 at 12:30 P.M</li>
                                                    </ul>
                                                </div>

                                                <div className="inner-booking-list">
                                                    <h5>Order Details:</h5>
                                                    <ul className="booking-list">
                                                        <li className="highlighted">1-2 People</li>
                                                    </ul>
                                                </div>

                                                <div className="inner-booking-list">
                                                    <h5>Client:</h5>
                                                    <ul className="booking-list">
                                                        <li>Kathy Brown</li>
                                                        <li>kathy@example.com</li>
                                                        <li>123-456-789</li>
                                                    </ul>
                                                </div>

                                                <a href="#small-dialog" className="rate-review popup-with-zoom-anim"><i className="sl sl-icon-envelope-open"></i> Send Message</a>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="buttons-to-right">
                                        <a href="#" className="button gray reject"><i className="sl sl-icon-close"></i> Cancel</a>
                                    </div>
                                </li>

                                <li className="canceled-booking">
                                    <div className="list-box-listing bookings">
                                        <div className="list-box-listing-img"><img src="http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&s=120" alt="" /></div>
                                        <div className="list-box-listing-content">
                                            <div className="inner">
                                                <h3>Tom's Restaurant <span className="booking-status">Canceled</span></h3>

                                                <div className="inner-booking-list">
                                                    <h5>Order Date:</h5>
                                                    <ul className="booking-list">
                                                        <li className="highlighted">21.10.2017 at 9:30 A.M</li>
                                                    </ul>
                                                </div>

                                                <div className="inner-booking-list">
                                                    <h5>Order Details:</h5>
                                                    <ul className="booking-list">
                                                        <li className="highlighted">1-2 People</li>
                                                    </ul>
                                                </div>

                                                <div className="inner-booking-list">
                                                    <h5>Client:</h5>
                                                    <ul className="booking-list">
                                                        <li>Kathy Brown</li>
                                                        <li>kathy@example.com</li>
                                                        <li>123-456-789</li>
                                                    </ul>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="buttons-to-right">
                                        <a href="#" className="button gray reject"><i className="sl sl-icon-close"></i> Delete</a>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>


                    <div className="col-md-12">
                        <div className="copyrights">© 2017 Listeo. All Rights Reserved.</div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Order;
