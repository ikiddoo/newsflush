import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "./Register.css";

const RegisterForm: React.FC = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add registration logic here
    alert("Registration successful!");
    setForm({ email: "", password: "", confirmPassword: "" });
  };

  return (
    <Container className="register-form-container">
      <Row className="justify-content-center">
        <Col md={8}>
          <h2 className="register-header">Register Today!</h2>
          <h4 className="register-subheader">Join our community and unlock exclusive benefits:</h4>
          <ul className="register-benefits">
            <li>Get <strong>50% off</strong> on shopping, dining, and exclusive events.</li>
            <li>Member privileges: allow posting of content &amp; become a freelance writer!</li>
            <li>Coaching &amp; mentorship opportunities.</li>
            <li>Stay up to date with the latest news of your choice.</li>
          </ul>
          <Form onSubmit={handleSubmit} className="register-form">
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
            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                placeholder="Enter your password"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                required
                placeholder="Confirm your password"
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              Sign Up Now
            </Button>
          </Form>
          <h4 className="register-subheader mt-4">Become a member and start your journey today!</h4>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterForm;
