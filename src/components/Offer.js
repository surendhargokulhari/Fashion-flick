
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import "../Offer.css"
const Offer = () => {
  const offers = [
    {
      title: "50% Off on All T-Shirts",
      text: "Grab your favorite T-shirts at half price! Limited time only.",
      image: "https://cdn.pixabay.com/photo/2016/07/17/20/19/t-shirt-1524677_1280.jpg"
    },
    {
      title: "Buy One Get One Free on Jeans",
      text: "Don't miss out on this amazing offer. Get two pairs of jeans for the price of one!",
      image: "https://images.unsplash.com/photo-1714143164510-7833c904d8c9?w=600"
    },
    {
      title: "Flat ₹500 Off on Jackets",
      text: "Stay warm and stylish with a ₹500 discount on all jackets.",
      image: "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=600"
    }
  ];

  return (
    <section className="offers-section py-5">
      <Container>
        <h2 className="text-center mb-4">
          <span role="img" aria-label="special-offer">💥</span> Special Offers
        </h2>
        <Row>
          {offers.map((offer, index) => (
            <Col md={4} className="mb-4" key={index}>
              <Card className="h-100 shadow-sm">
                <Card.Img id='offer'
                  variant="top" 
                  src={offer.image} 
                  alt={offer.title} // Added alt text for accessibility
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{offer.title}</Card.Title>
                  <Card.Text>{offer.text}</Card.Text>
                  <div className="mt-auto d-flex justify-content-between">
                    <Button variant="primary" aria-label="Shop Now">Shop Now</Button>
                    {/* Removed "Add to Cart" functionality */}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Offer;

