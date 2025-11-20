import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Carousel.css";

const MyCarousel: React.FC = () => (
  <Carousel fade>
    <Carousel.Item>
      <img
        className="d-block w-100 carousel-img"
        src="https://cdn.pixabay.com/photo/2016/04/23/09/46/marina-bay-1347334_640.jpg"
        alt="Marina Bay"
      />
      <Carousel.Caption>
        <h3>Marina Bay</h3>
        <p>Singapore's iconic waterfront.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 carousel-img"
        src="https://cdn.pixabay.com/photo/2017/09/04/18/00/chinatown-singapore-2714868_640.jpg"
        alt="Chinatown Singapore"
      />
      <Carousel.Caption>
        <h3>Chinatown</h3>
        <p>Vibrant streets and culture.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 carousel-img"
        src="https://cdn.pixabay.com/photo/2017/08/05/14/23/city-2583969_640.jpg"
        alt="City Skyline"
      />
      <Carousel.Caption>
        <h3>City Skyline</h3>
        <p>Modern architecture and city lights.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);

export default MyCarousel;