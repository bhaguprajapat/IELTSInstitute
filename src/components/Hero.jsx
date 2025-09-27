import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import heroImage from '../assets/logo.png'; 

function Hero() {
  return (
    <section className="bg-light py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h1 className="display-4 fw-bold">Achieve Your IELTS Goals</h1>
            <p className="lead">
              Practice speaking, take mock tests, and get AI-based band scores to track your progress.
            </p>
            <Button variant="primary" size="lg">Get Started</Button>
          </Col>
          <Col md={6}>
            <img src={heroImage} alt="Hero" className="img-fluid rounded" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
