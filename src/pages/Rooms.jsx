import React from "react";
import Room from "../components/Room";
import RoomsFilter from "../components/RoomsFilter";
import Slider from "../components/Slider";

const Rooms = () => {
  return (
    <div>
      <Slider />
      <RoomsFilter />
      <Room/>
    </div>
  );
};

export default Rooms;
