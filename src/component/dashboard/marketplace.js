import React, { Component } from 'react';
import moment from "moment"
class Marketplace extends Component {
    render() {
        return (


            <div classNam="row">
                {this.props.products.map((product) => (
                    <div className="col-lg-4 col-md-6">
                        <a href="listings-single-page.html" className="listing-item-container compact">
                            <div className="listing-item">
                                <img src={product.imgUrl} alt="" />
                                <div className="listing-item-details" >
                                    <ul>
                                        <li>{moment(product.date).format("LL")}</li>
                                    </ul>
                                </div>
                                <div className="listing-item-content" >
                                    <div className="numerical-rating high" data-rating="5.0"></div>
                                    <h3 style={{ textTransform: "capitalize" }}>{product.title}</h3>
                                    <span style={{ textTransform: "capitalize" }}>${product.price}</span>
                                </div>
                                <span className="like-icon"></span>
                            </div>
                        </a>
                    </div>
                ))}

            </div>
        );
    }
}

export default Marketplace;