import React, { useState } from "react";
import { Navbar, Nav, Container, Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
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
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#products">Products</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="/cart">🛒 Cart</Nav.Link>
          </Nav>

          <Form className="d-flex ms-3" onSubmit={handleSearch}>
            <FormControl
              type="search"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="me-2 searchbox"
              style={{ width: "200px", height: "35px" }}
            />
            <Button className="btn" type="submit" variant="outline-light" size="sm">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
