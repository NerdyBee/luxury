import React from "react";
import FeaturedRooms from "../components/FeaturedRooms";
import Features from "../components/Features";
import Slideshow from "../components/Banner";
import Intro from "../components/Intro";
import FeaturedHall from "../components/FeaturedHall";

export default function Home() {
  return (
    <>
      <Slideshow />
      <Intro />
      <Features />
      <FeaturedRooms />
      <FeaturedHall />
    </>
  );
}
