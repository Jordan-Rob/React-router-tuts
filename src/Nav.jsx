import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-item nav-link active" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
              <Link to="/about">
                <a className="nav-item nav-link" href="#">
                  About
                </a>
              </Link>
              <Link to="/Services">
                <a className="nav-item nav-link" href="#">
                  Services
                </a>
              </Link>
              <Link to="/ContactUs">
                <a className="nav-item nav-link" href="#">
                  Contact
                </a>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
export default Nav;
