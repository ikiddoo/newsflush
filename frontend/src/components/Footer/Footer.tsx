import React from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import "./Footer.css";

const Footer: React.FC = () => (
  <footer className="footer-container">
    <div className="footer-main">
      <div className="footer-columns">
        <div className="footer-col">
          <h4>Explore News</h4>
          <a href="#">Technology</a>
          <a href="#">Business</a>
          <a href="#">Science</a>
          <a href="#">Health</a>
          <a href="#">Entertainment</a>
          <a href="#">Sports</a>
        </div>
        <div className="footer-col">
          <h4>Navigation</h4>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
        <div className="footer-col">
          <h4>Locate Us</h4>
          <Form className="footer-search-form">
            <InputGroup>
              <Form.Control type="text" placeholder="Search location..." />
              <Button variant="outline-light">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85zm-5.442 1.398a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11z"/>
                </svg>
              </Button>
            </InputGroup>
          </Form>
        </div>
        <div className="footer-col">
          <h4>Social Media</h4>
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">TikTok</a>
          <a href="#">YouTube</a>
          <a href="#">Telegram</a>
        </div>
      </div>
    </div>
    <div className="footer-horizontal">
      <a href="#">Privacy Policy</a>
      <a href="#">Terms of Use</a>
      <a href="#">Sitemap</a>
      <a href="#">FAQ</a>
      <a href="#">Feedback</a>
      <a href="#">Legislation</a>
    </div>
    <div className="footer-copyright">
      <span>&copy; {new Date().getFullYear()} NewsFlush. All rights reserved.</span>
    </div>
  </footer>
);

export default Footer;
