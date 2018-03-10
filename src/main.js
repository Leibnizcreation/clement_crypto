import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './component/homepage/index';
import Search from './component/search/index';
import Dashboard from './component/dashboard/index';
import Appointment from './component/dashboard/appointment';
import Services from './component/services/index';
import City from './component/city/index';
import FAQ from './component/faq/index';
import Addgig from './component/addgig/index';
import Gig from './component/gig/index';

import Notfound from './component/notfound/index';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import $ from "jquery"
class Main extends Component {

    render() {
        return (
            <div className="">
                <Switch>
                    <Route exact path="/" render={(props) => (
                        <div>
                            <Homepage {...props} />
                        </div>
                    )} />
                    <Route exact path="/search" component={Search} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/faq" component={FAQ} />
                    <Route exact path="/services/:type" component={Services} />
                    <Route exact path="/city/:type" component={City} />
                    <Route exact path="/service" component={Addgig} />
                    <Route exact path="/gig" component={Gig} />
                    {/* <Route exact path="/dashboard/dispute" component={Dispute} />
                    <Route exact path="/dashboard/review" component={Reviews} />
                    <Route exact path="/dashboard/order" component={Orders} /> */}
                    <Route exact path="*" component={Notfound} />
                </Switch>

            </div>
        );
    }
}

export default Main;