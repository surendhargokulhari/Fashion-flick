import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="mb-3 shadow-sm">
            <Card.Body className="d-flex justify-content-between align-items-center">
              <div>
                <h5>👤 Profile</h5>
                <p className="mb-0">View or edit your personal details</p>
              </div>
              <Button variant="outline-primary" onClick={() => navigate("/account/profile")}>
                View
              </Button>
            </Card.Body>
          </Card>

          <Card className="mb-3 shadow-sm">
            <Card.Body className="d-flex justify-content-between align-items-center">
              <div>
                <h5>📦 Orders</h5>
                <p className="mb-0">Check your past orders</p>
              </div>
              <Button variant="outline-primary" onClick={() => navigate("/account/orders")}>
                View
              </Button>
            </Card.Body>
          </Card>

          <Card className="shadow-sm">
            <Card.Body className="d-flex justify-content-between align-items-center">
              <div>
                <h5 className="text-danger">🚪 Logout</h5>
                <p className="mb-0">Sign out from your account</p>
              </div>
              <Button variant="outline-danger" onClick={handleLogout}>
                Logout
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Account;
