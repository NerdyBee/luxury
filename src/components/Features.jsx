import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faWifi, faSwimmingPool, faBars, faBuilding, faHandsWash, faHotel, faDumbbell } from "@fortawesome/free-solid-svg-icons";


const Features = () => {
  return (
    <div className="container px-4 py-5" id="icon-grid">
      <h2 className="pb-2 border-bottom headerPurple">Services</h2>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
        <div className="col d-flex align-items-start">
          <FontAwesomeIcon
            className="bi text-muted flex-shrink-0 me-3"
            icon={faHotel}
          />
          <div>
            <h4 className="fw-bold mb-0">Accommodations</h4>
            <p>Paragraph of text beneath the heading to explain the heading.</p>
          </div>
        </div>
        <div className="col d-flex align-items-start">
          <FontAwesomeIcon
            className="bi text-muted flex-shrink-0 me-3"
            icon={faWifi}
          />
          <div>
            <h4 className="fw-bold mb-0">WIFI</h4>
            <p>Paragraph of text beneath the heading to explain the heading.</p>
          </div>
        </div>
        <div className="col d-flex align-items-start">
          <FontAwesomeIcon
            className="bi text-muted flex-shrink-0 me-3"
            icon={faHandsWash}
          />
          <div>
            <h4 className="fw-bold mb-0">Laundry</h4>
            <p>Paragraph of text beneath the heading to explain the heading.</p>
          </div>
        </div>
        <div className="col d-flex align-items-start">
          <FontAwesomeIcon
            className="bi text-muted flex-shrink-0 me-3"
            icon={faSwimmingPool}
          />
          <div>
            <h4 className="fw-bold mb-0">Swimming Pool</h4>
            <p>Paragraph of text beneath the heading to explain the heading.</p>
          </div>
        </div>
        <div className="col d-flex align-items-start">
          <FontAwesomeIcon
            className="bi text-muted flex-shrink-0 me-3"
            icon={faBars}
          />
          <div>
            <h4 className="fw-bold mb-0">Bar</h4>
            <p>Paragraph of text beneath the heading to explain the heading.</p>
          </div>
        </div>
        <div className="col d-flex align-items-start">
          <FontAwesomeIcon
            className="bi text-muted flex-shrink-0 me-3"
            icon={faCoffee}
          />
          <div>
            <h4 className="fw-bold mb-0">Restaurant</h4>
            <p>Paragraph of text beneath the heading to explain the heading.</p>
          </div>
        </div>
        <div className="col d-flex align-items-start">
          <FontAwesomeIcon
            className="bi text-muted flex-shrink-0 me-3"
            icon={faBuilding}
          />
          <div>
            <h4 className="fw-bold mb-0">Banquet Hall</h4>
            <p>Paragraph of text beneath the heading to explain the heading.</p>
          </div>
        </div>
        <div className="col d-flex align-items-start">
          <FontAwesomeIcon
            className="bi text-muted flex-shrink-0 me-3"
            icon={faDumbbell}
          />
          <div>
            <h4 className="fw-bold mb-0">Fitness Center</h4>
            <p>Paragraph of text beneath the heading to explain the heading.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
