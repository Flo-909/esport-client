import React from "react";
import ReactDOM from "react-dom";
import "assets/scss/material-kit-react.scss?v=1.9.0";
import "bootstrap/dist/css/bootstrap.min.css";
import "./views/MessengerPage/App.css";

import token from "./reducers/token";
import campaign from "./reducers/campaign";
import role from "./reducers/role";

import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import App from "./App";

const store = createStore(combineReducers({ token, campaign, role }));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
