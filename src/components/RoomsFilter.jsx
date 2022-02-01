import React from 'react';



const handleChange = () => {

}

const RoomsFilter = () => {
  return (
    <div>
      <div className="container mt-5">
        {/* <Title title="Search Rooms" /> */}
        <div className="row">
          <div className="col-md-6 col-12">
            <div className="form-group">
              <label htmlFor="type">Room Type</label>
              <select
                name="type"
                id="type"
                // value={type}
                className="form-control"
                onChange={handleChange}
              >
                {/* {types} */}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="capacity">Guests</label>
              <select
                name="capacity"
                id="capacity"
                // value={capacity}
                className="form-control"
                onChange={handleChange}
              >
                {/* {people} */}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="price">Room Price #</label>
              {/* {price} */}
              <input
                type="range"
                name="price"
                // min={minPrice}
                // max={maxPrice}
                id="price"
                // value={price}
                onChange={handleChange}
                className="form-control"
              />
            </div>
          </div>
          <div className="col-md-4 col-12 ml-auto">
            <div className="custom-control custom-checkbox my-5">
              <input
                type="checkbox"
                className="custom-control-input"
                name="breakfast"
                id="breakfast"
                // checked={breakfast}
                onChange={handleChange}
              />
              <label htmlFor="breakfast" className="custom-control-label">
                Breakfast
              </label>
            </div>
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                name="pets"
                id="pets"
                // checked={pets}
                onChange={handleChange}
              />
              <label htmlFor="pets" className="custom-control-label">
                Pets
              </label>
            </div>
            <div className="input-group my-5">
              <label htmlFor="size" className="mr-3">
                Room Size{" "}
              </label>
              <input
                type="number"
                name="minSize"
                id="size"
                // value={minSize}
                onChange={handleChange}
                className="form-control"
              />
              <input
                type="number"
                name="maxSize"
                id="size"
                // value={maxSize}
                onChange={handleChange}
                className="form-control"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomsFilter;
