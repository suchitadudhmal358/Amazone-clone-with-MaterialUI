import React from "react";
import Carousel from "../Components/Carousel";
import CategoriCards from "../Components/CategoriCards";

const Home = () => {
  return (
    <div style={{ width: "100vw" }}>
      <Carousel />
      <CategoriCards />
    </div>
  );
};

export default Home;
