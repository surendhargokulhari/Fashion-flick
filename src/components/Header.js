import React from "react";
import { Navbar, Nav, Container, Form, FormControl, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ searchTerm, setSearchTerm, scrollToProducts }) => {
  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    navigate("/"); // Make sure we're on home page
    scrollToProducts(); // Scroll immediately to products
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form reload
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="custom-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src="https://cdn-icons-png.freepik.com/256/12936/12936079.png"
            alt="Logo"
            style={{ width: "40px", height: "40px", borderRadius: "50%", marginRight: "10px" }}
          />
          FashionFlick
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#products">Products</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="/cart">🛒 Cart</Nav.Link>

            <Form className="d-flex ms-3" onSubmit={handleSubmit}>
              <FormControl
                type="search"
                placeholder="What are you looking for?"
                value={searchTerm}
                onChange={handleChange}
                className="me-2 searchbox"
                style={{ width: "250px", height: "35px" }}
              />
              <Button className="btn" type="submit" variant="outline-light" size="sm">
                Search
              </Button>
            </Form>

            <Nav.Link as={Link} to="/profile">👤 Profile</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
