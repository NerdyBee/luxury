import React from 'react';
import hall from '../images/banquet-1.jpg'

const FeaturedHall = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center headerPurple">Banquet & Meeting Hall</h2>
      <div className="row my-5">
        <div className="d-flex flex-wrap align-items-center text-center col-md-4">
          {/* <h3>Banquet</h3> */}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id fugit
            quisquam architecto ad! Dicta reprehenderit omnis delectus animi.
            Minima magnam quidem explicabo, natus dolor provident pariatur
            mollitia excepturi placeat illo. lor
          </p>
        </div>
        <div className="col-md-8">
          <img src={hall} alt="" className="rounded img-thumbnail" />
        </div>
      </div>
    </div>
  );
};

export default FeaturedHall;
