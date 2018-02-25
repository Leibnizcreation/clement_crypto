import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './component/homepage/index';
import Search from './component/search/index';
import Notfound from './component/notfound/index';
// import Login from "./component/login/index"
// import Register from "./component/register/index"
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
                    <Route exact path="*" component={Notfound} />
                </Switch>

            </div>
        );
    }
}

export default Main;