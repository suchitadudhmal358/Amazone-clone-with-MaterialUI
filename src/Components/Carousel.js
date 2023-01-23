import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      style={{
        display: "flex",
        background: "transparent",
        width: "80px",
        height: "250px",
        alignItems: "center",
        justifyContent: "center",
        // border: "1px solid black",
        position: "absolute",
        top: 0,
        right: 0,
        zIndex: 10,
      }}
      onClick={onClick}
    >
      <ArrowForwardIosRoundedIcon fontSize="large" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      style={{
        display: "flex",
        background: "transparent",
        width: "80px",
        height: "250px",
        alignItems: "center",
        justifyContent: "center",
        // border: "1px solid black",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 10,
      }}
      onFocus={{ border: "2px solid black" }}
      onClick={onClick}
    >
      <ArrowBackIosNewRoundedIcon fontSize="large" />
    </div>
  );
}

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div
      style={{
        textAlign: "center",
        margin: "0 auto",
        width: "100%",
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      <Slider style={{ display: "flex", alignItems: "center" }} {...settings}>
        <div>
          <img
            src="https://m.media-amazon.com/images/I/61aURrton0L._SX3000_.jpg"
            width="100%"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://m.media-amazon.com/images/I/51KNitnBxjL._SX3000_.jpg"
            width="100%"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://m.media-amazon.com/images/I/8160RuRhSUL._SX3000_.jpg"
            width="100%"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://m.media-amazon.com/images/I/713NGv+dKHL._SX3000_.jpg"
            width="100%"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://m.media-amazon.com/images/I/71vdTR50hFL._SX3000_.jpg"
            width="100%"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://m.media-amazon.com/images/I/61GnAucagBL._SX3000_.png"
            width="100%"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
