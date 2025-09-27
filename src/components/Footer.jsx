import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-light py-4" id="Contact">
      <Container>
        <Row>
          <Col md={6}>
            <h5>IELTS INSTITUTE</h5>
            <p>Helping students achieve their dream band score.</p>
          </Col>
          <Col md={6} className="text-md-end">
            <p>Contact: info@ieltsprep.com</p>
            <p>© 2025 IELTSPrep. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
