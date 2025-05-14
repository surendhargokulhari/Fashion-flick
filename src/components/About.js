

import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap'; // Removed Button
import '../App.css'; // Keep your styles here

const AboutPage = () => {
  return (
    <div className="about-page" id="about">
      <header id='about-h' className="bg-primary text-white text-center py-5 shadow-lg animate-fade-in">
        <h1 className="display-4">About</h1>
        <p className="lead">Your Destination for Affordable Fashion</p>
      </header>

      <Container className="py-5">
        <Row className="align-items-center mb-5 bg-light rounded p-4 shadow-sm animate-slide-up">
          <Col md={6}>
            <Image
              src="https://images.unsplash.com/photo-1575111507952-2d4f371374f5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZhc2hpb24lMjBpbWd8ZW58MHx8MHx8fDA%3D"
              fluid
              alt="Fashion Image"
              className="rounded shadow mx-auto d-block img-hover"
            />
          </Col>
          <Col md={6}>
            <h2 className="text-primary">Who We Are</h2>
            <p>
              FashionFlick is a youth-driven fashion destination under the Tata Group’s retail wing, Trent Ltd.
              We aim to bring <strong>stylish and budget-friendly fashion</strong> to everyone.
            </p>
            <p>
              Whether it's casuals, workwear, ethnic, or seasonal trends, FashionFlick caters to all styles—making fashion for everyone.
            </p>
          </Col>
        </Row>

        <Row className="mb-5 bg-white rounded p-4 shadow-sm animate-fade-in">
          <Col md={12}>
            <h2 className="text-success">What Makes FashionFlick Different?</h2>
            <ul className="colorful-list">
              <li><span role="img" aria-label="jacket">🧥</span> Weekly refreshed collections to stay on trend</li>
              <li><span role="img" aria-label="t-shirt">👕</span> Affordable pricing with top-notch quality</li>
              <li><span role="img" aria-label="store">🏬</span> 400+ stores across India and expanding</li>
              <li><span role="img" aria-label="sparkles">✨</span> A vibrant in-store experience</li>
            </ul>
          </Col>
        </Row>

        <Row className="mb-5 bg-light rounded p-4 shadow-sm animate-slide-up">
          <Col md={6}>
            <h2 className="text-info">Our Vision</h2>
            <p>
              To make fashion accessible across all cities, towns, and localities—so everyone can express themselves in style.
            </p>
          </Col>
          <Col md={6}>
            <h2 className="text-info">Our Mission</h2>
            <p>
              To offer the best in design, quality, and affordability, while making fashion effortless, expressive, and fun.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutPage;