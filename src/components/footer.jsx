import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div style={{ padding: "30px 0px" }}>
                <section id="footer-menu">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <ul className="nav">
                                    <li className="nav-item">
                                        <a className="nav-link" href="/">
                                            <font size="2">Poker</font>
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link" href="/trading">
                                            <font size="2">Trading</font>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/sports">
                                            <font size="2">Sports</font>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/tools">
                                            <font size="2">Tools</font>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <ul className="main-menu-socail">
                                    <li>
                                        <a href="" style={{ margin: "0px 5px" }}>
                                            <i className="fa fa-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="" style={{ margin: "0px 5px" }}>
                                            <i className="fa fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="" style={{ margin: "0px 5px" }}>
                                            <i className="fa fa-youtube"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="" style={{ margin: "0px 5px" }}>
                                            <i className="fa fa-google-plus"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="" style={{ margin: "0px 5px" }}>
                                            <i className="fa fa-instagram"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <ul className="main-menu-right nav">
                                    <li>
                                        <a className="nav-link" href="/blog">
                                            <font size="2">Blog</font>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="nav-link" href="/faq">
                                            <font size="2">FAQ</font>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="nav-link" href="">
                                            <font size="2">Affiliate</font>
                                        </a>
                                    </li>
                                    <li style={{padding:" 0px"}}>
                                        <a className="nav-link" href="/tos">
                                            <font size="2">Terms of Service</font>
                                        </a>
                                    </li>
                                </ul>

                            </div>

                        </div>
                    </div>
                </section>
                <section id="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">


                                &copy; 2018 BTC Grinders, All Right Reserved.
                    </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Footer;