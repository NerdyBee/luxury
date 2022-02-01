import { Link } from "react-router-dom";
import { items } from "../data";
import defaultImg from "../images/1.jpeg";

const Room = () => {
  return (
    <section className="featured-rooms container my-5">
      <div className="row">
        {/* <Title title="Featured Rooms" /> */}
        {items
          .map((item) => (
            <div className="col-md-4 col-12 mx-auto p-2">
              <div className="card shadow-lg border-0 room">
                <img
                  src={item.fields.images[0].fields.file.url || defaultImg}
                  alt="single room"
                  className="img-fluid"
                />
                <div className="price-top">
                  <h6># {item.fields.price}</h6>
                  <p>per night</p>
                </div>
                <Link
                  to={`/rooms/${item.fields.slug}`}
                  className="btn-warning room-link text-center"
                >
                  Features
                </Link>
                <p className="room-info">{item.fields.name}</p>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Room;
