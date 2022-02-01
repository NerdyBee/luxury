import React from 'react';
import Slider from './Slider';
import img12 from "../images/reception-hall.jpg";

const Halls = () => {
  return (
    <>
      <Slider />
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6 pull-left">
            <img src={img12} alt="" className="img-thumbnail" />
          </div>
          <div className="col-md-6 px-2 pull-left">
            <h1 className="headerPurple text-center">Events Hall</h1>
            <p>
              Surrounded by the romantic and historic Riga Old Town, the Grand
              Palace Hotel is an ideal 5-star venue for your wedding
              celebration. Being as individual as you, it offers the right mix
              of romance, glamour and its own unique charm for a truly memorable
              celebration of your big day. Whether you are looking for a grand
              banquet or an intimate gathering of close friends and family, our
              attentive staff provide expertise in a wide range of services to
              ensure your wedding celebration runs smoothly.
            </p>
            <h4>Celebrations, Parties and Outside Catering</h4>
            <p>
              Located in the heart of Riga Old Town, Grand Palace Hotel provides
              a perfect venue for any celebration. Be it a birthday party,
              anniversary, theme party, graduation or a reception, the list of
              possible celebrations under our luxurious roof is nearly endless.
              Boutique premises of the Grand Palace Hotel will be a couture
              backdrop for your celebration, while our experienced staff will
              make sure it is a complete success.
            </p>
            <p>
              Five star catering at the ocassion of your choice. No matter how
              small or large the occasion is we extend our impeccable service
              and deliver a unique experience at your home, office or any other
              location. By offering an first class outside catering service for
              your corporate lunch, gala dinner, birthday party or even picnic,
              we endeavour to make your celebration successful, with delightful
              culinary creations and impecciable service.
            </p>
          </div>
          <div className="col-md-6">
            <h4 className="text-secondary">Amenities</h4>
            <ul className="d-flex flex-wrap mx-auto text-primary">
              <li className="mx-3">Air Conditioned</li>
              <li className="mx-3">400 person seat</li>
              <li className="mx-3">Tables</li>
              <li className="mx-3">Projector</li>
              <li className="mx-3">Parking</li>
              <li className="mx-3">Restroom</li>
              <li className="mx-3">Stage</li>
              <li className="mx-3">Power Supply</li>
              <li className="mx-3">Changing Room</li>
            </ul>
          </div>
          <div className="col-md-6">
            <h4 className="text-secondary">Technical Equipment</h4>
            <ul className="d-flex flex-wrap mx-auto text-primary">
              <li className="mx-3">Multimedia projector</li>
              <li className="mx-3">Flipchart</li>
              <li className="mx-3">TV</li>
              <li className="mx-3">Screen</li>
              <li className="mx-3">Sound system with microphone</li>
              <li className="mx-3">High-speed wireless internet connection</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Halls;
