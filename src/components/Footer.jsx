import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpenText, faLocationArrow, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <div className="container-fluid px-5 bg-dark text-white mt-5">
        <footer className="py-5">
          <div className="row justify-content-between">
            <div className="col-md-4">
              <h5 className="text-primary">Address</h5>
              
                <p><FontAwesomeIcon icon={faLocationArrow} /> Shop 5 oppossite AP terminus, Jos, Plateau State.</p>
              
              <h5 className="text-primary">Phone</h5>
              <p><FontAwesomeIcon icon={faPhone} /> 08034150437, 07060984243</p>
              <h5 className="text-primary">Email</h5>
              <p><FontAwesomeIcon icon={faEnvelopeOpenText} /> luxury@gmail.com</p>
            </div>
            <div className="col-md-2">
              <h5>Nav</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <Link to="/" className="nav-link p-0 text-muted">
                    Home
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/rooms/" className="nav-link p-0 text-muted">
                    Rooms
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/services/" className="nav-link p-0 text-muted">
                    Services
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/halls/" className="nav-link p-0 text-muted">
                    Events
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/about" className="nav-link p-0 text-muted">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-md-2">
              <h5>Quick Link</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <Link to="/contact/" className="nav-link p-0 text-muted">
                    Contact Us
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/career/" className="nav-link p-0 text-muted">
                    Career
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/register/" className="nav-link p-0 text-muted">
                    Register
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/login/" className="nav-link p-0 text-muted">
                    Sign In
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/" className="nav-link p-0 text-muted">
                    About
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-md-4">
              <form>
                <h5>Subscribe to our newsletter</h5>
                <p>Monthly digest of whats new and exciting from us.</p>
                <div className="d-flex w-100 gap-2">
                  <label for="newsletter1" className="visually-hidden">
                    Email address
                  </label>
                  <input
                    id="newsletter1"
                    type="text"
                    className="form-control"
                    placeholder="Email address"
                  />
                  <button className="btn btn-primary" type="button">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="d-flex justify-content-between py-4 my-4 border-top">
            <p>&copy; 2021 Company, Inc. All rights reserved.</p>
            <ul className="list-unstyled d-flex">
              <li className="ms-3">
                <Link className="link" to="/">
                  <FontAwesomeIcon icon={faFacebook} />
                </Link>
              </li>
              <li className="ms-3">
                <Link className="link" to="/">
                  <FontAwesomeIcon icon={faTwitter} />
                </Link>
              </li>
              <li className="ms-3">
                <Link className="link" to="/">
                  <FontAwesomeIcon icon={faInstagram} />
                </Link>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
