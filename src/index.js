import React from "react";
import ReactDOM from "react-dom";

import "jquery/dist/jquery.js";
import "popper.js";
import "react-bootstrap/dist/react-bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "datatables.net-bs4/js/dataTables.bootstrap4.js";
import "datatables.net-bs4/css/dataTables.bootstrap4.css";
import "font-awesome/css/font-awesome.min.css";
import "jquery-smooth-scroll/jquery.smooth-scroll.js";
import "jquery-ui";
import "jquery.easing/jquery.easing.js";

import "./index.css";

import "./components/widgets/widgets.js";
import "./components/widgets/widgets.css";

import App from "./components/Root";
import * as serviceWorker from "./serviceWorker";

//REDUX STORE
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers/rootReducer";

//where were fetching all our posts from
const store = createStore(rootReducer);

//we're wrapping our App with the store so that the data is gobally available in the App
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
