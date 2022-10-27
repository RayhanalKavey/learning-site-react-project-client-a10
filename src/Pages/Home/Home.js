import React from "react";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../../assets/image/debugging.png";
import img2 from "../../assets/image/context-api.png";
import img3 from "../../assets/image/react-hooks.png";
import "./Home.css";
const Home = () => {
  return (
    <div className=" home-container vh-md-100 ">
      <Carousel className="text-light  mx-auto pb-5 " fade>
        <Carousel.Item>
          <img
            className="d-block w-100 carousal-image"
            src={img2}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousal-image"
            src={img1}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousal-image"
            src={img3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <h2 className="text-center py-5">Lean React</h2>
    </div>
  );
};

export default Home;
