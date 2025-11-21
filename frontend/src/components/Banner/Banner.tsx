
import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner: React.FC = () => (
  <div className="banner-container">
    <h1 className="banner-title">Welcome to NewsFlush!</h1>
    <p className="banner-desc">Stay updated with the latest news. Sign up now to personalize your experience and get exclusive content!</p>
    <Button
      as={Link as any}
      to="/register"
      variant="primary"
      size="lg"
      className="banner-btn"
    >
      Sign Up Now
    </Button>
  </div>
);

export default Banner;
