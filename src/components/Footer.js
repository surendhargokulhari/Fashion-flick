
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css'; // Optional for custom styles

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <Container>
        <Row>
          <Col md={4}>
            <h5>FashionFlick</h5>
            <p>Your one-stop destination for trendy, affordable fashion.</p>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-white">Home</a></li>
              <li><a href="#about" className="text-white">About</a></li>
              <li><a href="#products" className="text-white">Products</a></li>
              <li><a href="#contact" className="text-white">Contact</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact Us</h5>
            <p>Email: support@FashionFlick.com</p>
            <p>Phone: +91 98765 43210</p>
            <p>Address: Coimbatore, Tamil Nadu</p>
          </Col>
        </Row>
        <hr className="bg-white" />
        <p className="text-center mb-0">&copy; {new Date().getFullYear()} FashionFlick. All rights reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;