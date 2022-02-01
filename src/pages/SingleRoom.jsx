import React from 'react';
import { Link } from "react-router-dom";
import { items } from "../data";
// import defaultImg from "../images/1.jpeg";
import { useParams } from 'react-router-dom';
import Slider from '../components/Slider';

const SingleRoom = () => {
  const params = useParams();
  //console.log(params)
  return (
    <div>
      {items
        .filter((room) => room.fields.slug === params.slug)
        .map((room) => (
          <>
            <Slider />
            <section className="single-room container my-5">
              <div className="row">
                {room.fields.images.slice(1, 4).map((item, index) => {
                  return (
                    <div className="col-md-4 col-12 mx-auto" key={index}>
                      <div className="card border-0 shadow-lg">
                        <img
                          key={index}
                          src={item.fields.file.url}
                          alt={room.fields.name}
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="single-room-info">
                <article className="desc">
                  <h3>Details</h3>
                  <p>{room.fields.description}</p>
                </article>
                <article className="info">
                  <h3>Info</h3>
                  <h6>price : #{room.fields.price}</h6>
                  <h6>size : {room.fields.size} SQFT</h6>
                  <h6>
                    max capacity :{" "}
                    {room.fields.capacity > 1
                      ? `${room.fields.capacity} people`
                      : `${room.fields.capacity} person`}
                  </h6>
                  <h6>
                    {room.fields.pets ? "pets allowed" : "no pets allowed"}
                  </h6>
                  <h6>{room.fields.breakfast && "free breakfast included"}</h6>
                </article>
              </div>
            </section>
            <section className="room-extras container">
              <h3>Extras</h3>
              <ul className="extras">
                {room.fields.extras.map((item, index) => {
                  return <li key={index}>{item}</li>;
                })}
              </ul>
              <div className="p-4 clearfix">
                <div className="row">
                  <div className="col-md-3 col-12 ml-auto">
                    <Link
                      to={`/booknow/${params.slug}`}
                      className="btn btn-outline-primary btn-block btn-lg float-right "
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </>
        ))}
    </div>
  );
};

export default SingleRoom;
