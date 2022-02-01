import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaravan, faDumbbell, faSwimmingPool, faWifi, faTshirt, faUtensils, faCalendarDay, faHotel, faSpa, faCar } from "@fortawesome/free-solid-svg-icons";
import React from 'react';
import Slider from '../components/Slider';

const Services = () => {
  return (
    <div>
      <Slider />
      <div className="container ">
        <h1 className="text-center headerPurple">Services</h1>
        <p className="mt-3">
          Whether you are travelling for business or pleasure, the luxury hotel
          services offered by the five star Grand Palace Hotel make it an ideal
          choice for your stay in Riga, Latvia. The hotel’s luxurious
          surroundings, comfort, thoughtful touches and a personalized service
          sets it apart from any other hotel, allowing you to feel like being at
          home from your very first steps into the hotel. We are geared towards
          the fulfilment of the needs of any discerning guest and below you can
          find an overview of the most commonly-used services and facilities
          offered by our boutique hotel.
        </p>
        <div className="row my-5">
          <div className="col-md-3">
            <FontAwesomeIcon icon={faHotel} />
            <h4 className="ms-3 d-inline text-danger">Accommodations</h4>
            <p className="mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem hic
              deserunt, illum eaque nam harum corrupti perferendis cupiditate
              inventore officia cumque sed distinctio in expedita fugiat
              dignissimos totam, rerum magnam!
            </p>
          </div>
          <div className="col-md-3">
            <FontAwesomeIcon icon={faUtensils} />
            <h4 className="ms-3 d-inline text-danger">Restaurants</h4>
            <p className="mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem hic
              deserunt, illum eaque nam harum corrupti perferendis cupiditate
              inventore officia cumque sed distinctio in expedita fugiat
              dignissimos totam, rerum magnam!
            </p>
          </div>
          <div className="col-md-3">
            <FontAwesomeIcon icon={faTshirt} />
            <h4 className="ms-3 d-inline text-danger">Laundry</h4>
            <p className="mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem hic
              deserunt, illum eaque nam harum corrupti perferendis cupiditate
              inventore officia cumque sed distinctio in expedita fugiat
              dignissimos totam, rerum magnam!
            </p>
          </div>
          <div className="col-md-3">
            <FontAwesomeIcon icon={faDumbbell} />
            <h4 className="ms-3 d-inline text-danger">Fitness Center</h4>
            <p className="mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem hic
              deserunt, illum eaque nam harum corrupti perferendis cupiditate
              inventore officia cumque sed distinctio in expedita fugiat
              dignissimos totam, rerum magnam!
            </p>
          </div>
          <div className="col-md-3">
            <FontAwesomeIcon icon={faSwimmingPool} />
            <h4 className="ms-3 d-inline text-danger">Swimming Pool</h4>
            <p className="mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem hic
              deserunt, illum eaque nam harum corrupti perferendis cupiditate
              inventore officia cumque sed distinctio in expedita fugiat
              dignissimos totam, rerum magnam!
            </p>
          </div>
          <div className="col-md-3">
            <FontAwesomeIcon icon={faCalendarDay} />
            <h4 className="ms-3 d-inline text-danger">Event & Meeting Hall</h4>
            <p className="mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem hic
              deserunt, illum eaque nam harum corrupti perferendis cupiditate
              inventore officia cumque sed distinctio in expedita fugiat
              dignissimos totam, rerum magnam!
            </p>
          </div>
          <div className="col-md-3">
            <FontAwesomeIcon icon={faCaravan} />
            <h4 className="ms-3 d-inline text-danger">Parking</h4>
            <p className="mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem hic
              deserunt, illum eaque nam harum corrupti perferendis cupiditate
              inventore officia cumque sed distinctio in expedita fugiat
              dignissimos totam, rerum magnam!
            </p>
          </div>
          <div className="col-md-3">
            <FontAwesomeIcon icon={faWifi} />
            <h4 className="ms-3 d-inline text-danger">Internet Access</h4>
            <p className="mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem hic
              deserunt, illum eaque nam harum corrupti perferendis cupiditate
              inventore officia cumque sed distinctio in expedita fugiat
              dignissimos totam, rerum magnam!
            </p>
          </div>
          <div className="col-md-3">
            <FontAwesomeIcon icon={faSpa} />
            <h4 className="ms-3 d-inline text-danger">SPA & WELLNESS</h4>
            <p className="mt-3">
              Away from the hustle and bustle of city life and after a day of
              rigorous sight seeing in Bagan. One can find regiments for
              soothing tired muscles and stiff joints, easing other bodily aches
              and pains, or simply just to unwind.
            </p>
          </div>
          <div className="col-md-3">
            <FontAwesomeIcon icon={faCar} />
            <h4 className="ms-3 d-inline text-danger">Car Shuttle</h4>
            <p className="mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
              veniam quasi veritatis quod odit vitae quibusdam consequuntur
              aliquam dicta perspiciatis itaque delectus sint quam hic eveniet,
              rem asperiores. Sint, autem!
            </p>
          </div>
          <div className="col-md-3">
            <FontAwesomeIcon icon={faCar} />
            <h4 className="ms-3 d-inline text-danger">Bar & Lounge</h4>
            <p className="mt-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatum sapiente sequi pariatur aliquid quod consequatur nemo
              consectetur animi nulla sunt dolores deleniti beatae, assumenda
              asperiores at aut explicabo quas magni.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

