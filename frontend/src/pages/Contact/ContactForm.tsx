import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "./Contact.css";

const ContactForm: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    title: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can add your submit logic here
    alert("Thank you for contacting us!");
    setForm({ name: "", email: "", title: "", message: "" });
  };

  return (
    <Container className="contact-form-container">
      <Row className="justify-content-center">
        <Col md={8}>
          <h2>Contact Us</h2>
          <p className="contact-desc">
            Our business typically responds within 1-3 business days. Thank you for your patience!
          </p>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={form.title}
                onChange={handleChange}
                required
                placeholder="Subject"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                placeholder="Type your message here"
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;
