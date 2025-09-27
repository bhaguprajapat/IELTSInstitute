import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import heroImage from '../assets/logo.png'; 
function Navigation() {
  return (
    <Navbar  expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand href="/"> <img src={heroImage} alt="Hero" className="logo-img" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#Features">Features</Nav.Link>
            <Nav.Link href="#Testimonials">Testimonials</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
