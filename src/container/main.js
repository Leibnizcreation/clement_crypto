import React, { Component } from "react";

import {Switch,Route} from "react-router-dom"
import Notfound from "../component/error/index"
import Hompage from "../component/homepage/index"
import Login from "../component/login/index"
import Register from "../component/register/index"
import {bindActionCreator} from "redux"
import {connect} from "react-redux"
class Main extends Component {
    render() {
        return (
         <div>
                <Switch>
                    <Route exact path="/" component={Hompage} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/login" component={Login} />
                    <Route path="*" component={Notfound} />
                </Switch>
        
        </div>
        )
    }
}

export default connect(Main);