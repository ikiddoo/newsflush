import React from "react";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from "react-bootstrap";
import "./NavBar.css";
import logo from "../../assets/logo.png";

const NavBar: React.FC = () => {
  return (
    <Navbar bg="light" expand="lg" className="mb-3">
      <Container>
        <Navbar.Brand href="#">
          <img
            src={logo}
            alt="NewsFlush Logo"
            style={{ height: "32px", marginRight: "12px", verticalAlign: "middle" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <NavDropdown title="News" id="navbarDropdown">
              <NavDropdown.Item href="/sports">Sports</NavDropdown.Item>
              <NavDropdown.Item href="/technology">Technology</NavDropdown.Item>
              <NavDropdown.Item href="/health">Health</NavDropdown.Item>
              <NavDropdown.Item href="/entertainment">Entertainment</NavDropdown.Item>
              <NavDropdown.Item href="/business">Business</NavDropdown.Item>
              <NavDropdown.Item href="/science">Science</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Contact</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-dark">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
