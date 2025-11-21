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
        <h3>Only the Latest News</h3>
        <p>Stay up to date with current events.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 carousel-img"
        src="https://cdn.pixabay.com/photo/2017/09/04/18/00/chinatown-singapore-2714868_640.jpg"
        alt="Chinatown Singapore"
      />
      <Carousel.Caption>
        <h3>One stop for all your news</h3>
        <p>Your comprehensive news source.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 carousel-img"
        src="https://cdn.pixabay.com/photo/2017/08/05/14/23/city-2583969_640.jpg"
        alt="City Skyline"
      />
      <Carousel.Caption>
        <h3>News on the US market</h3>
        <p>Stay informed with the latest updates.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);

export default MyCarousel;