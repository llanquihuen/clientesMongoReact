import React from  "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from "redux-thunk"
// import {Auth0Provider} from '@auth0/auth0-react' 


import reducers from './reducers'
import './index.css'


// import App from "./App";
// import Login from './Login'
import Routes from './Routes'


// const domain = process.env.REACT_APP_AUTH0_DOMAIN;
// const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
    // <Auth0Provider
    //     domain={domain}
    //     clientId={clientId}
    //     redirectUri={window.location.origin}
    // >
    
        <Provider store={store}>
            <Routes />
        </Provider>,

    document.getElementById("root")
);