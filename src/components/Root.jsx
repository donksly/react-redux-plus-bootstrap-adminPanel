import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

//router imports
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Axios from "./Axios";
import Post from "./Post";
import Redux from "./Redux";
import PostRedux from "./PostRedux";

import ninja_icon from "../components/assets/red_army.png";
import ScrollTop from "./widgets/ScrollTop";

class Root extends Component {
  state = {};

  style_sidenav = {
    position: "absolute",
    "will-change": "transform",
    top: "0px, left: 0px"
  };

  render() {
    return (
      <BrowserRouter>
        <div className="root-component">
          <Navbar />
          <div className="load-components-here" id="wrapper">
            {/**side nav - start */}
            <div id="sidebar-wrapper">
              <ul className="sidebar-nav">
                <li className="sidebar-brand">
                  <a
                    href="https://github.com/donksly"
                    className="text-center"
                    target="_blank"
                  >
                    <img src={ninja_icon} alt="GitLabs" id="side-nav-icon" />
                  </a>
                </li>
                <li>
                  <div className="sidenav-divider" />
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-dashboard m-1" />
                    Dashboard
                  </a>
                </li>
                <li>
                  <div className="sidenav-divider" />
                </li>
                <li className="active">
                  <a
                    href="#homeSubmenu"
                    data-toggle="collapse"
                    aria-expanded="false"
                    className="dropdown-toggle collapsed"
                  >
                    <i className="fa fa-home m-1" />
                    Home
                  </a>
                  <ul className="list-unstyled collapse" id="homeSubmenu">
                    <li>
                      <a href="#">Home 1</a>
                    </li>
                    <li>
                      <a href="#">Home 2</a>
                    </li>
                    <li>
                      <a href="#">Home 3</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <div className="sidenav-divider" />
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-link m-1" />
                    Shortcuts
                  </a>
                </li>
                <li>
                  <div className="sidenav-divider" />
                </li>
                <li>
                  <a href="#">
                    {" "}
                    <i className="fa fa-globe m-1" />
                    Overview
                  </a>
                </li>
                <li>
                  <div className="sidenav-divider" />
                </li>
                <li>
                  <a href="#">
                    {" "}
                    <i className="fa fa-calendar m-1" />
                    Events
                  </a>
                </li>
                <li>
                  <div className="sidenav-divider" />
                </li>
                <li>
                  <a href="#">
                    {" "}
                    <i className="fa fa-info-circle m-1" />
                    About
                  </a>
                </li>
                <li>
                  <div className="sidenav-divider" />
                </li>
                <li>
                  <a href="#">
                    {" "}
                    <i className="fa fa-desktop m-1" />
                    Services
                  </a>
                </li>
                <li>
                  <div className="sidenav-divider" />
                </li>
                <li>
                  <a href="#">
                    {" "}
                    <i className="fa fa-phone m-1" />
                    Contact
                  </a>
                </li>
                <li>
                  <div className="sidenav-divider" />
                </li>
              </ul>
            </div>
            {/**side nav - stop */}

            <div className="rest-of-page-items-to-dom">
              <br />
              <h1>Platforms</h1>
              {/**Load routes */}
              <div className="load-routes">
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/about" component={About} />
                  <Route path="/contact" component={Contact} />
                  <Route path="/axios" component={Axios} />
                  <Route path="/redux" component={Redux} />

                  <Route path="/redux_post/:post_id" component={PostRedux} />
                  <Route path="/:post_id" component={Post} />
                </Switch>
              </div>
              <br />
              <br />
              <br />
              {/**Scroll to top */}
              <ScrollTop />
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default Root;
