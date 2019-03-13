import React from "react";
import $ from "jquery";

//Links and Navbar
import { Link, NavLink, withRouter } from "react-router-dom";

const Navbar = props => {
  //high order component just supercharged the Navbar
  /*setTimeout(() => {
    props.history.push("/about");
  }, 20000);*/
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <a
          className="navbar-brand"
          href="https://github.com/donksly"
          target="_blank"
        >
          <span className="navbar-brand-name">NINJAS INC</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample03"
          aria-controls="navbarsExample03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample03">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a href="#menu-toggle" className="btn btn-light" id="menu-toggle">
                <i className="fa fa-reorder fa-2x" />
              </a>
            </li>
            <li className="nav-item menu-items-start">
              <a className="nav-link" href="/">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item menu-items-start">
              <NavLink className="nav-link" to="/about">
                About <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item menu-items-start">
              <NavLink className="nav-link" to="/contact">
                Contact <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item menu-items-start">
              <NavLink className="nav-link" to="/axios">
                Axios <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item menu-items-start">
              <NavLink className="nav-link" to="/redux">
                Redux <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://github.com/donksly">
                <i className="fa fa-bell " />
                <span className="badge badge-danger">9+</span>
              </a>
            </li>
          </ul>
          <div className="pull-right right-side-nav">
            <ul>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle nav-show-user-name"
                  href="https://github.com/donksly"
                  id="dropdown03"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fa fa-angle-down fa-2x" />
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdown03">
                  <span className="dropdown-item" href="javascript:;">
                    <i className="fa fa-user" />
                    &nbsp; UserName
                  </span>
                  <div className="dropdown-divider" />
                  <a
                    className="dropdown-item"
                    href="https://github.com/donksly"
                  >
                    Action
                  </a>
                  <a
                    className="dropdown-item"
                    href="https://github.com/donksly"
                  >
                    Another action
                  </a>
                  <a
                    className="dropdown-item"
                    href="https://github.com/donksly"
                  >
                    Something else here
                  </a>
                  <div className="dropdown-divider" />
                  <a
                    className="dropdown-item"
                    href="https://github.com/donksly"
                  >
                    <i className="fa fa-power-off" /> Logout
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <form className="form-inline my-2 my-md-0">
            <input
              className="form-control search-text-field"
              type="text"
              placeholder="Search"
            />
          </form>
        </div>
      </nav>
    </div>
  );
};

$(document).ready(function() {
  $("#wrapper").toggleClass("toggled");
  $("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
  });
});

export default withRouter(Navbar);
