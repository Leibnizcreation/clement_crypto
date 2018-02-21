import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app.js';
import { Provider } from "react-redux";
import  allReducer  from "./reducer/index"
import { createStore } from "redux";
import jwt from "jsonwebtoken";
import { setCurrentUser } from "./actions/index"
import setAuthorizationToken from "./component/auth"

var store = createStore(allReducer);

if (localStorage.jwToken) {
    setAuthorizationToken(localStorage.jwtToken);
    console.log(jwt.decode(localStorage.jwToken))
    store.dispatch(setCurrentUser(jwt.decode(localStorage.jwToken)))
}

ReactDOM.render(<BrowserRouter>
    <Provider store={store}>
        <App />
    </Provider >
</BrowserRouter>, document.getElementById('root'));