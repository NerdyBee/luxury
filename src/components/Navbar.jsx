import React from "react";
import { Link } from "react-router-dom";
import jquery from "jquery";

// for changing navbar  color
jquery(window).scroll(function () {
  jquery("nav").toggleClass("scrolled", jquery(this).scrollTop() > 0);
});

const Navbar = () => {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-sm navbar-dark bg-transparent py-2 fixed-top">
          <div className="container-fluid">
            <Link className="navbar-brand" to="#">
              Luxury Hotel
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/rooms">
                    Rooms
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/services">
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/halls">
                    Events
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact Us
                  </Link>
                </li>
              </ul>
              {/* <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <span className="fa fa-search text-white py-2"></span>
              </form> */}

              <div className="text-end text-white">
                {/* <Link to="cart.html">
                  <span className="fa fa-shopping-cart mx-5">
                    <span className="ms-2 bold text-danger">1</span>
                  </span>
                </Link> */}
                <Link to="/register/">
                  <button type="button" className="btn btn-warning mx-2">
                    Register
                  </button>
                </Link>
                <Link to="/login/">
                  <button type="button" className="btn btn-primary">
                    Sign-in
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};
export default Navbar;
