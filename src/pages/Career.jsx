import React from 'react';
import Slider from '../components/Slider';
import img12 from "../images/reception-hall.jpg";

const Career = () => {
  return (
    <div>
      <Slider />
      <div class="container">
        <div className="m-5 p-5 bg-light">
          <h1 className='text-center'>Want to be part of luxury largest hotel chain?</h1>
        </div>
        <div class="row">
          <div class="pull-left ">
            <img
              src={img12}
              className="col-lg-3 img-responsive"
              alt="Responsive"
            />
            <p class="col-md-4">
              Lots of text here... Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Et eum nobis ex numquam ducimus, error neque
              accusantium, id minus nostrum ratione quae totam recusandae?
              Officia est harum voluptatibus magnam ex!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
