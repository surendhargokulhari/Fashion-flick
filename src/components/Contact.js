import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import '../App.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('access_key', 'a5e99171-32f2-4140-98b8-fda2eb2f93d7'); // Your Web3Forms key
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('message', formData.message);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      });

      if (response.ok) {
        setShowSuccess(true);
        setShowError(false);
        setFormData({ name: '', email: '', message: '' });
      } else {
        setShowError(true);
        setShowSuccess(false);
      }
    } catch (error) {
      setShowError(true);
      setShowSuccess(false);
    }

    // Auto-hide after 5 seconds
    setTimeout(() => {
      setShowSuccess(false);
      setShowError(false);
    }, 5000);
  };

  return (
    <div id="contact">
      <header id="contact-h" className="bg-dark text-white text-center py-4">
        <h1>Contact</h1>
        <p>We'd love to hear from you!</p>
      </header>

      <Container className="py-5">
        <Row className="align-items-center g-4">
          <Col md={6}>
            <div className="p-4 shadow rounded bg-light">
              <h3 className="mb-3">Get In Touch</h3>
              <p className="text-muted">
                Have questions or feedback? Fill out the form and we’ll get back to you as soon as possible.
              </p>

              {/* Success & Error Messages */}
              {showSuccess && <Alert variant="success">✅ Message sent successfully!</Alert>}
              {showError && <Alert variant="danger">❌ Failed to send message. Please try again.</Alert>}

              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName" className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formEmail" className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formMessage" className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="message"
                    rows={4}
                    placeholder="Your message..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit">Send Message</Button>
              </Form>
            </div>
          </Col>

          <Col md={6}>
            <div className="p-4 shadow rounded bg-light">
              <h4>Store Address</h4>
              <p>FashionFlick Hub,<br />Coimbatore, Tamil Nadu, India</p>

              <h4>Email</h4>
              <p>gokulhari182@gmaol.com</p>

              <h4>Phone</h4>
              <p>+91 7639019726</p>

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
