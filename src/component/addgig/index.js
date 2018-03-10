import React, { Component } from 'react';
import Navbar from "../navbar/index"
import Footer from "../footer/index"
class Addgig extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="container">

                    <div className="row">
                        <div className="col-lg-12">

                            <div className="notification notice large margin-bottom-55">
                                <h4>Don't Have an Account? 🙂</h4>
                                <p>If you don't have an account you can create one by entering your email address in contact details section. A password will be automatically emailed to you.</p>
                            </div>

                            <div id="add-listing" className="separated-form">

                                <div className="add-listing-section">

                                    <div className="add-listing-headline">
                                        <h3><i className="sl sl-icon-doc"></i> Basic Informations</h3>
                                    </div>

                                    <div className="row with-forms">
                                        <div className="col-md-6">
                                            <h5>Business owner name <i className="tip" data-tip-content="Name of your business"></i></h5>
                                            <input className="search-field" type="text" />
                                        </div>
                                        <div className="col-md-6">
                                            <h5>Stylist type <i className="tip" data-tip-content="Name of your business"></i></h5>
                                            <input className="search-field" type="text" />
                                        </div>
                                    </div>

                                    <div className="row with-forms">

                                        <div className="col-md-6">
                                            <h5>Offered Services</h5>
                                            <select className="chosen-select-no-single" >
                                                <option label="blank">Select Category</option>
                                                <option>Eat & Drink</option>
                                                <option>Shops</option>
                                                <option>Hotels</option>
                                                <option>Restaurants</option>
                                                <option>Fitness</option>
                                                <option>Events</option>
                                            </select>
                                        </div>
                                        {/* <div className="col-md-6">
                                            <h5>Keywords <i className="tip" data-tip-content="Maximum of 15 keywords related with your business"></i></h5>
                                            <input type="text" placeholder="Keywords should be separated by commas" />
                                        </div> */}

                                    </div>

                                </div>

                                <div className="add-listing-section margin-top-45">

                                    <div className="add-listing-headline">
                                        <h3><i className="sl sl-icon-location"></i> Location</h3>
                                    </div>

                                    <div className="submit-section">

                                        <div className="row with-forms">

                                            <div className="col-md-6">
                                                <h5>City</h5>
                                                <select className="chosen-select-no-single" >
                                                    <option label="blank">Select City</option>
                                                    <option>New York</option>
                                                    <option>Los Angeles</option>
                                                    <option>Chicago</option>
                                                    <option>Houston</option>
                                                    <option>Phoenix</option>
                                                    <option>San Diego</option>
                                                    <option>Austin</option>
                                                </select>
                                            </div>

                                            <div className="col-md-6">
                                                <h5>Address</h5>
                                                <input type="text" placeholder="e.g. 964 School Street" />
                                            </div>


                                            <div className="col-md-6">
                                                <h5>Zip-Code</h5>
                                                <input type="text" />
                                            </div>

                                        </div>

                                    </div>
                                </div>


                                <div className="add-listing-section margin-top-45">

                                    <div className="add-listing-headline">
                                        <h3><i className="sl sl-icon-picture"></i> Gallery</h3>
                                    </div>

                                    <div className="submit-section">
                                        <form action="/file-upload" className="dropzone" ></form>
                                    </div>

                                </div>



                                <div className="add-listing-section margin-top-45">

                                    <div className="add-listing-headline">
                                        <h3><i className="sl sl-icon-clock"></i> Opening Hours</h3>
                                        <label className="switch"><input type="checkbox" checked /><span className="slider round" ></span></label>
                                    </div>

                                    <div className="switcher-content">
                                        <div className="row opening-day">
                                            <div className="col-md-2"><h5>Monday</h5></div>
                                            <div className="col-md-5">
                                                <select className="chosen-select" data-placeholder="Opening Time">
                                                    <option label="Opening Time"></option>
                                                    <option>Closed</option>
                                                    <option>1 AM</option>
                                                    <option>2 AM</option>
                                                    <option>3 AM</option>
                                                    <option>4 AM</option>
                                                    <option>5 AM</option>
                                                    <option>6 AM</option>
                                                    <option>7 AM</option>
                                                    <option>8 AM</option>
                                                    <option>9 AM</option>
                                                    <option>10 AM</option>
                                                    <option>11 AM</option>
                                                    <option>12 AM</option>
                                                    <option>1 PM</option>
                                                    <option>2 PM</option>
                                                    <option>3 PM</option>
                                                    <option>4 PM</option>
                                                    <option>5 PM</option>
                                                    <option>6 PM</option>
                                                    <option>7 PM</option>
                                                    <option>8 PM</option>
                                                    <option>9 PM</option>
                                                    <option>10 PM</option>
                                                    <option>11 PM</option>
                                                    <option>12 PM</option>
                                                </select>
                                            </div>
                                            <div className="col-md-5">
                                                <select className="chosen-select" data-placeholder="Closing Time">
                                                    <option label="Closing Time"></option>
                                                    <option>Closed</option>
                                                    <option>1 AM</option>
                                                    <option>2 AM</option>
                                                    <option>3 AM</option>
                                                    <option>4 AM</option>
                                                    <option>5 AM</option>
                                                    <option>6 AM</option>
                                                    <option>7 AM</option>
                                                    <option>8 AM</option>
                                                    <option>9 AM</option>
                                                    <option>10 AM</option>
                                                    <option>11 AM</option>
                                                    <option>12 AM</option>
                                                    <option>1 PM</option>
                                                    <option>2 PM</option>
                                                    <option>3 PM</option>
                                                    <option>4 PM</option>
                                                    <option>5 PM</option>
                                                    <option>6 PM</option>
                                                    <option>7 PM</option>
                                                    <option>8 PM</option>
                                                    <option>9 PM</option>
                                                    <option>10 PM</option>
                                                    <option>11 PM</option>
                                                    <option>12 PM</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row opening-day">
                                            <div className="col-md-2"><h5>Tuesday</h5></div>
                                            <div className="col-md-5">
                                                <select className="chosen-select" data-placeholder="Opening Time">
                                                    <option label="Opening Time"></option>
                                                    <option>Closed</option>
                                                    <option>1 AM</option>
                                                    <option>2 AM</option>
                                                    <option>3 AM</option>
                                                    <option>4 AM</option>
                                                    <option>5 AM</option>
                                                    <option>6 AM</option>
                                                    <option>7 AM</option>
                                                    <option>8 AM</option>
                                                    <option>9 AM</option>
                                                    <option>10 AM</option>
                                                    <option>11 AM</option>
                                                    <option>12 AM</option>
                                                    <option>1 PM</option>
                                                    <option>2 PM</option>
                                                    <option>3 PM</option>
                                                    <option>4 PM</option>
                                                    <option>5 PM</option>
                                                    <option>6 PM</option>
                                                    <option>7 PM</option>
                                                    <option>8 PM</option>
                                                    <option>9 PM</option>
                                                    <option>10 PM</option>
                                                    <option>11 PM</option>
                                                    <option>12 PM</option>
                                                </select>
                                            </div>
                                            <div className="col-md-5">
                                                <select className="chosen-select" data-placeholder="Closing Time">
                                                    <option label="Closing Time"></option>
                                                    <option>Closed</option>
                                                    <option>1 AM</option>
                                                    <option>2 AM</option>
                                                    <option>3 AM</option>
                                                    <option>4 AM</option>
                                                    <option>5 AM</option>
                                                    <option>6 AM</option>
                                                    <option>7 AM</option>
                                                    <option>8 AM</option>
                                                    <option>9 AM</option>
                                                    <option>10 AM</option>
                                                    <option>11 AM</option>
                                                    <option>12 AM</option>
                                                    <option>1 PM</option>
                                                    <option>2 PM</option>
                                                    <option>3 PM</option>
                                                    <option>4 PM</option>
                                                    <option>5 PM</option>
                                                    <option>6 PM</option>
                                                    <option>7 PM</option>
                                                    <option>8 PM</option>
                                                    <option>9 PM</option>
                                                    <option>10 PM</option>
                                                    <option>11 PM</option>
                                                    <option>12 PM</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row opening-day">
                                            <div className="col-md-2"><h5>Wednesday</h5></div>
                                            <div className="col-md-5">
                                                <select className="chosen-select" data-placeholder="Opening Time">
                                                    <option label="Opening Time"></option>
                                                    <option>Closed</option>
                                                    <option>1 AM</option>
                                                    <option>2 AM</option>
                                                    <option>3 AM</option>
                                                    <option>4 AM</option>
                                                    <option>5 AM</option>
                                                    <option>6 AM</option>
                                                    <option>7 AM</option>
                                                    <option>8 AM</option>
                                                    <option>9 AM</option>
                                                    <option>10 AM</option>
                                                    <option>11 AM</option>
                                                    <option>12 AM</option>
                                                    <option>1 PM</option>
                                                    <option>2 PM</option>
                                                    <option>3 PM</option>
                                                    <option>4 PM</option>
                                                    <option>5 PM</option>
                                                    <option>6 PM</option>
                                                    <option>7 PM</option>
                                                    <option>8 PM</option>
                                                    <option>9 PM</option>
                                                    <option>10 PM</option>
                                                    <option>11 PM</option>
                                                    <option>12 PM</option>
                                                </select>
                                            </div>
                                            <div className="col-md-5">
                                                <select className="chosen-select" data-placeholder="Closing Time">
                                                    <option label="Closing Time"></option>
                                                    <option>Closed</option>
                                                    <option>1 AM</option>
                                                    <option>2 AM</option>
                                                    <option>3 AM</option>
                                                    <option>4 AM</option>
                                                    <option>5 AM</option>
                                                    <option>6 AM</option>
                                                    <option>7 AM</option>
                                                    <option>8 AM</option>
                                                    <option>9 AM</option>
                                                    <option>10 AM</option>
                                                    <option>11 AM</option>
                                                    <option>12 AM</option>
                                                    <option>1 PM</option>
                                                    <option>2 PM</option>
                                                    <option>3 PM</option>
                                                    <option>4 PM</option>
                                                    <option>5 PM</option>
                                                    <option>6 PM</option>
                                                    <option>7 PM</option>
                                                    <option>8 PM</option>
                                                    <option>9 PM</option>
                                                    <option>10 PM</option>
                                                    <option>11 PM</option>
                                                    <option>12 PM</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row opening-day">
                                            <div className="col-md-2"><h5>Thursday</h5></div>
                                            <div className="col-md-5">
                                                <select className="chosen-select" data-placeholder="Opening Time">
                                                    <option label="Opening Time"></option>
                                                    <option>Closed</option>
                                                    <option>1 AM</option>
                                                    <option>2 AM</option>
                                                    <option>3 AM</option>
                                                    <option>4 AM</option>
                                                    <option>5 AM</option>
                                                    <option>6 AM</option>
                                                    <option>7 AM</option>
                                                    <option>8 AM</option>
                                                    <option>9 AM</option>
                                                    <option>10 AM</option>
                                                    <option>11 AM</option>
                                                    <option>12 AM</option>
                                                    <option>1 PM</option>
                                                    <option>2 PM</option>
                                                    <option>3 PM</option>
                                                    <option>4 PM</option>
                                                    <option>5 PM</option>
                                                    <option>6 PM</option>
                                                    <option>7 PM</option>
                                                    <option>8 PM</option>
                                                    <option>9 PM</option>
                                                    <option>10 PM</option>
                                                    <option>11 PM</option>
                                                    <option>12 PM</option>
                                                </select>
                                            </div>
                                            <div className="col-md-5">
                                                <select className="chosen-select" data-placeholder="Closing Time">
                                                    <option label="Closing Time"></option>
                                                    <option>Closed</option>
                                                    <option>1 AM</option>
                                                    <option>2 AM</option>
                                                    <option>3 AM</option>
                                                    <option>4 AM</option>
                                                    <option>5 AM</option>
                                                    <option>6 AM</option>
                                                    <option>7 AM</option>
                                                    <option>8 AM</option>
                                                    <option>9 AM</option>
                                                    <option>10 AM</option>
                                                    <option>11 AM</option>
                                                    <option>12 AM</option>
                                                    <option>1 PM</option>
                                                    <option>2 PM</option>
                                                    <option>3 PM</option>
                                                    <option>4 PM</option>
                                                    <option>5 PM</option>
                                                    <option>6 PM</option>
                                                    <option>7 PM</option>
                                                    <option>8 PM</option>
                                                    <option>9 PM</option>
                                                    <option>10 PM</option>
                                                    <option>11 PM</option>
                                                    <option>12 PM</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row opening-day">
                                            <div className="col-md-2"><h5>Friday</h5></div>
                                            <div className="col-md-5">
                                                <select className="chosen-select" data-placeholder="Opening Time">
                                                    <option label="Opening Time"></option>
                                                    <option>Closed</option>
                                                    <option>1 AM</option>
                                                    <option>2 AM</option>
                                                    <option>3 AM</option>
                                                    <option>4 AM</option>
                                                    <option>5 AM</option>
                                                    <option>6 AM</option>
                                                    <option>7 AM</option>
                                                    <option>8 AM</option>
                                                    <option>9 AM</option>
                                                    <option>10 AM</option>
                                                    <option>11 AM</option>
                                                    <option>12 AM</option>
                                                    <option>1 PM</option>
                                                    <option>2 PM</option>
                                                    <option>3 PM</option>
                                                    <option>4 PM</option>
                                                    <option>5 PM</option>
                                                    <option>6 PM</option>
                                                    <option>7 PM</option>
                                                    <option>8 PM</option>
                                                    <option>9 PM</option>
                                                    <option>10 PM</option>
                                                    <option>11 PM</option>
                                                    <option>12 PM</option>
                                                </select>
                                            </div>
                                            <div className="col-md-5">
                                                <select className="chosen-select" data-placeholder="Closing Time">
                                                    <option label="Closing Time"></option>
                                                    <option>Closed</option>
                                                    <option>1 AM</option>
                                                    <option>2 AM</option>
                                                    <option>3 AM</option>
                                                    <option>4 AM</option>
                                                    <option>5 AM</option>
                                                    <option>6 AM</option>
                                                    <option>7 AM</option>
                                                    <option>8 AM</option>
                                                    <option>9 AM</option>
                                                    <option>10 AM</option>
                                                    <option>11 AM</option>
                                                    <option>12 AM</option>
                                                    <option>1 PM</option>
                                                    <option>2 PM</option>
                                                    <option>3 PM</option>
                                                    <option>4 PM</option>
                                                    <option>5 PM</option>
                                                    <option>6 PM</option>
                                                    <option>7 PM</option>
                                                    <option>8 PM</option>
                                                    <option>9 PM</option>
                                                    <option>10 PM</option>
                                                    <option>11 PM</option>
                                                    <option>12 PM</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row opening-day">
                                            <div className="col-md-2"><h5>Saturday</h5></div>
                                            <div className="col-md-5">
                                                <select className="chosen-select" data-placeholder="Opening Time">
                                                    <option label="Opening Time"></option>
                                                    <option>Closed</option>
                                                    <option>1 AM</option>
                                                    <option>2 AM</option>
                                                    <option>3 AM</option>
                                                    <option>4 AM</option>
                                                    <option>5 AM</option>
                                                    <option>6 AM</option>
                                                    <option>7 AM</option>
                                                    <option>8 AM</option>
                                                    <option>9 AM</option>
                                                    <option>10 AM</option>
                                                    <option>11 AM</option>
                                                    <option>12 AM</option>
                                                    <option>1 PM</option>
                                                    <option>2 PM</option>
                                                    <option>3 PM</option>
                                                    <option>4 PM</option>
                                                    <option>5 PM</option>
                                                    <option>6 PM</option>
                                                    <option>7 PM</option>
                                                    <option>8 PM</option>
                                                    <option>9 PM</option>
                                                    <option>10 PM</option>
                                                    <option>11 PM</option>
                                                    <option>12 PM</option>
                                                </select>
                                            </div>
                                            <div className="col-md-5">
                                                <select className="chosen-select" data-placeholder="Closing Time">
                                                    <option label="Closing Time"></option>
                                                    <option>Closed</option>
                                                    <option>1 AM</option>
                                                    <option>2 AM</option>
                                                    <option>3 AM</option>
                                                    <option>4 AM</option>
                                                    <option>5 AM</option>
                                                    <option>6 AM</option>
                                                    <option>7 AM</option>
                                                    <option>8 AM</option>
                                                    <option>9 AM</option>
                                                    <option>10 AM</option>
                                                    <option>11 AM</option>
                                                    <option>12 AM</option>
                                                    <option>1 PM</option>
                                                    <option>2 PM</option>
                                                    <option>3 PM</option>
                                                    <option>4 PM</option>
                                                    <option>5 PM</option>
                                                    <option>6 PM</option>
                                                    <option>7 PM</option>
                                                    <option>8 PM</option>
                                                    <option>9 PM</option>
                                                    <option>10 PM</option>
                                                    <option>11 PM</option>
                                                    <option>12 PM</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row opening-day">
                                            <div className="col-md-2"><h5>Sunday</h5></div>
                                            <div className="col-md-5">
                                                <select className="chosen-select" data-placeholder="Opening Time">
                                                    <option label="Opening Time"></option>
                                                    <option>Closed</option>
                                                    <option>1 AM</option>
                                                    <option>2 AM</option>
                                                    <option>3 AM</option>
                                                    <option>4 AM</option>
                                                    <option>5 AM</option>
                                                    <option>6 AM</option>
                                                    <option>7 AM</option>
                                                    <option>8 AM</option>
                                                    <option>9 AM</option>
                                                    <option>10 AM</option>
                                                    <option>11 AM</option>
                                                    <option>12 AM</option>
                                                    <option>1 PM</option>
                                                    <option>2 PM</option>
                                                    <option>3 PM</option>
                                                    <option>4 PM</option>
                                                    <option>5 PM</option>
                                                    <option>6 PM</option>
                                                    <option>7 PM</option>
                                                    <option>8 PM</option>
                                                    <option>9 PM</option>
                                                    <option>10 PM</option>
                                                    <option>11 PM</option>
                                                    <option>12 PM</option>
                                                </select>
                                            </div>
                                            <div className="col-md-5">
                                                <select className="chosen-select" data-placeholder="Closing Time">
                                                    <option label="Closing Time"></option>
                                                    <option>Closed</option>
                                                    <option>1 AM</option>
                                                    <option>2 AM</option>
                                                    <option>3 AM</option>
                                                    <option>4 AM</option>
                                                    <option>5 AM</option>
                                                    <option>6 AM</option>
                                                    <option>7 AM</option>
                                                    <option>8 AM</option>
                                                    <option>9 AM</option>
                                                    <option>10 AM</option>
                                                    <option>11 AM</option>
                                                    <option>12 AM</option>
                                                    <option>1 PM</option>
                                                    <option>2 PM</option>
                                                    <option>3 PM</option>
                                                    <option>4 PM</option>
                                                    <option>5 PM</option>
                                                    <option>6 PM</option>
                                                    <option>7 PM</option>
                                                    <option>8 PM</option>
                                                    <option>9 PM</option>
                                                    <option>10 PM</option>
                                                    <option>11 PM</option>
                                                    <option>12 PM</option>
                                                </select>
                                            </div>
                                        </div>


                                    </div>

                                </div>


                                <div className="add-listing-section margin-top-45">

                                    <div className="add-listing-headline">
                                        <h3><i className="sl sl-icon-book-open"></i> Pricing</h3>
                                        <label className="switch"><input type="checkbox" checked /><span className="slider round"></span></label>
                                    </div>

                                    <div className="switcher-content">

                                        <div className="row">
                                            <div className="col-md-12">
                                                <table id="pricing-list-container">
                                                    <tr className="pricing-list-item pattern">
                                                        <td>
                                                            <div className="fm-move"><i className="sl sl-icon-cursor-move"></i></div>
                                                            <div className="fm-input pricing-name"><input type="text" placeholder="Title" /></div>
                                                            <div className="fm-input pricing-ingredients"><input type="text" placeholder="Description" /></div>
                                                            <div className="fm-input pricing-price"><input type="text" placeholder="Price" data-unit="USD" /></div>
                                                            <div className="fm-close"><a className="delete" href="#"><i className="fa fa-remove"></i></a></div>
                                                        </td>
                                                    </tr>
                                                </table>
                                                <a href="#" className="button add-pricing-list-item">Add Item</a>
                                                <a href="#" className="button add-pricing-submenu">Add Category</a>
                                            </div>
                                        </div>

                                    </div>

                                </div>


                                <a href="#" className="button preview">Preview <i className="fa fa-arrow-circle-right"></i></a>

                            </div>
                        </div>

                    </div>

                </div>
                <Footer />
            </div >
        );
    }
}

export default Addgig;
