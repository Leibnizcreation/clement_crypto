import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app.js';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import 'jquery';
import 'bootstrap';
// import UIkit from 'uikit';
// import Icons from 'uikit/dist/js/uikit-icons';
import thunk from 'redux-thunk';
import 'react-select/dist/react-select.css';
// import 'react-datepicker/dist/react-datepicker.css';
import 'sweetalert2/dist/sweetalert2.min.css';
import './assets/sass/style.scss';
import rootReducer from './reducers/rootReducer';
import setAuthorizationToken from './utils/setAuthorizationToken';
import processLogin from './utils/processLogin';

// UIkit.use(Icons);

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

if (localStorage.getItem('jwtTokenBTCGrinders')) {
    const { dispatch } = store;
    const token = localStorage.getItem('jwtTokenBTCGrinders');
    processLogin(token, dispatch);
    setAuthorizationToken(token);
}

ReactDOM.render(<BrowserRouter>
    <Provider store={store}>
        <App />
    </Provider >
</BrowserRouter>, document.getElementById('app'));