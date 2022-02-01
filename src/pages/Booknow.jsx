import moment from 'moment';
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Slider from '../components/Slider';
import { items } from '../data';
import defaultBcg from "../images/room-3.jpeg";

const Booknow = ({ onAdd }) => {
  const [fromDate, setFromDate] = useState("")
  const [toDate, setToDate] = useState('')
  const [days, setDays] = useState(0)
  const params = useParams();
  // const startDate = new Date()
  // const endDate = new Date()

  let handleCheckIn = (e) => {
    let checkInDate = e.target.value
    setFromDate(e.target.value)
    console.log(checkInDate)
  }

  let handleCheckOut = (e) => {
    let checkOutDate = e.target.value;
    setToDate(e.target.value)
    console.log(checkOutDate);
  };

  const calculateDays = (e) => {
    // let oned = 24 * 60 * 60 * 1000
    // setDays(Math.ceil((Date(toDate) - Date(fromDate)) / oned))
    let inDate = moment(fromDate, "YYYY-MM-DD");
    let outDate = moment(e.target.value, "YYYY-MM-DD");
    const Diff = moment.duration(outDate.diff(inDate)).asDays();
    console.log(Diff)
    setDays(Diff);
  }

  const onSubmit = (e) => {
    e.preventDefault();

    if (!fromDate) {
      alert("Please select a valid date...");
      return;
    }

    onAdd({ fromDate, toDate });

    setFromDate("");
    setToDate("");
  };

  return (
    <div>
      {items
        .filter((room) => room.fields.slug === params.slug)
        .map((room) => (
          <>
            <Slider />
            <div className="container my-5">
              <div className="row">
                <div className="col-md-10 mx-auto col-12 card shadow-lg border-0 p-4">
                  <div>
                    <h1 className="display-4">Booking</h1>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-12 my-auto">
                      <img
                        src={
                          room.fields.images[0].fields.file.url || defaultBcg
                        }
                        className="img-fluid"
                        alt="selected room"
                      />
                    </div>
                    <div className="col-md-6 col-12 my-auto">
                      <h1>Rooms Details</h1>
                      <table className="table">
                        <thead className="thead-light">
                          <tr>
                            <th className="bg-light">Room Type</th>
                            <td>{room.fields.name}</td>
                          </tr>
                          <tr>
                            <th className="bg-light">Capacity</th>
                            <td>{room.fields.capacity}</td>
                          </tr>
                          <tr>
                            <th className="bg-light">Size</th>
                            <td>{room.fields.size} sqft.</td>
                          </tr>
                          <tr>
                            <th className="bg-light">Breakfast</th>
                            <td>
                              {room.fields.breakfast === true
                                ? `Included`
                                : `Not Included`}
                            </td>
                          </tr>
                          <tr>
                            <th className="bg-light">Pets</th>
                            <td>
                              {room.fields.pets === true
                                ? `Allowed`
                                : `Not Allowed`}
                            </td>
                          </tr>
                        </thead>
                      </table>
                    </div>
                  </div>
                  <form method="POST" onSubmit={onSubmit}>
                    <div className="row my-3">
                      <div className="col-md-6 col-12">
                        <div className="form-group">
                          <label
                            htmlFor="Fromdate"
                            className="font-weight-bolder mr-3"
                          >
                            From Date{" "}
                          </label>
                          <input
                            type="date"
                            onChange={handleCheckIn}
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 col-12">
                        <div className="form-group">
                          <label
                            htmlFor="Todate"
                            className="font-weight-bolder mr-3"
                          >
                            To Date{" "}
                          </label>
                          <input
                            type="date"
                            onChange={ (e) => { handleCheckOut(e); calculateDays(e); }}
                            className="form-control"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 col-12">
                        <h6 className="font-weight-bolder">
                          Number of days : {days}
                        </h6>
                        <mark>
                          Please make sure Checkin time is from 9 am to 12 pm
                        </mark>
                      </div>
                      <div className="col-md-6 col-12">
                        <h6 className="font-weight-bold">
                          Price per day :{" "}
                          <span className="text-primary">
                            # {room.fields.price}
                          </span>
                        </h6>
                        <h6 className="font-weight-bold">
                          Total Price to be paid :{" "}
                          <span className="text-primary">
                            # {days * room.fields.price}
                          </span>
                        </h6>
                      </div>
                    </div>
                    <div className="row my-4">
                      <div className="col-md-6 col-12">
                        <div className="form-group">
                          <label
                            htmlFor="payment"
                            className="font-weight-bolder"
                          >
                            Payment Options
                          </label>
                          <select className="form-control">
                            <option disabled>Select payment option</option>
                            <option value="Credit">Credit Card</option>
                            <option value="Debit">Debit Card</option>
                            <option value="checkin">Pay during Checkin</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6 col-12 my-auto">
                        <div className="col-md-6 col-12 float-right">
                          <button
                            className="btn btn-block btn-outline-primary"
                            //   data-toggle="modal"
                            //   data-target="#thanks"
                          >
                            Confirm Booking
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="modal fade" id="thanks">
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-body p-4">
                      <h3>Thank you </h3>
                      <p className="lead">
                        Your room is booked successfully....
                      </p>
                    </div>
                    <div className="modal-footer">
                      <Link to="/" className="btn btn-dark">
                        Goto Home
                      </Link>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            ;
          </>
        ))}
    </div>
  );
};

export default Booknow;

