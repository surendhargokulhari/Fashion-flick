
import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../App.css';

const ContactPage = () => {
  return (
    <div id="contact">
      <header id="contact-h" className="bg-dark text-white text-center py-4">
        <h1>Contact</h1>
        <p>We'd love to hear from you!</p>
      </header>

      <Container className="py-5">
        <Row className="align-items-center g-4">
          {/* Contact Form Section */}
          <Col md={6}>
            <div className="p-4 shadow rounded bg-light">
              <h3 className="mb-3">Get In Touch</h3>
              <p className="text-muted">Have questions or feedback? Fill out the form and we’ll get back to you as soon as possible.</p>
              <Form>
                <Form.Group controlId="formName" className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="Enter your name" 
                    required 
                    aria-label="Enter your full name" 
                  />
                </Form.Group>

                <Form.Group controlId="formEmail" className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control 
                    type="email" 
                    placeholder="Enter your email" 
                    required 
                    aria-label="Enter your email address" 
                  />
                </Form.Group>

                <Form.Group controlId="formMessage" className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control 
                    as="textarea" 
                    rows={4} 
                    placeholder="Your message..." 
                    required 
                    aria-label="Enter your message" 
                  />
                </Form.Group>

                <Button variant="primary" type="submit" aria-label="Send your message">Send Message</Button>
              </Form>
            </div>
          </Col>

          {/* Contact Info + Map */}
          <Col md={6}>
            <div className="p-4 shadow rounded bg-light">
              <h4>Store Address</h4>
              <p>FashionFlick Hub,<br />Coimbatore, Tamil Nadu, India</p>

              <h4>Email</h4>
              <p>support@zudio.com</p>

              <h4>Phone</h4>
              <p>+91 98765 43210</p>

              <h4 className="mt-4">Our Location</h4>
              <div className="map-responsive rounded overflow-hidden">
                <iframe
                  title="store-location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.288956373804!2d76.95528731475305!3d11.014350692149596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85967d7386cf3%3A0x5c5d15c6e2e6c6c3!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1615182697931!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  frameBorder="0"
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                  aria-label="Google map showing FashionFlick Hub location in Coimbatore, Tamil Nadu, India"
                ></iframe>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactPage;