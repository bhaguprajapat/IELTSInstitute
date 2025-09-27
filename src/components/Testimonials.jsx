import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const testimonials = [
  { name: 'Alice', review: 'This platform improved my speaking skills tremendously!' },
  { name: 'Bob', review: 'Mock tests helped me feel confident on exam day.' },
  { name: 'Charlie', review: 'AI Band Scores were accurate and very helpful.' },
];

function Testimonials() {
  return (
    <section className="bg-light py-5" id="Testimonials">
      <Container>
        <h2 className="text-center mb-4">What Our Students Say</h2>
        <Row>
          {testimonials.map((t, idx) => (
            <Col md={4} key={idx} className="mb-3">
              <Card className="h-100 shadow-sm d-flex flex-column">
                <Card.Body className="flex-grow-1">
                  <Card.Text>"{t.review}"</Card.Text>
                </Card.Body>
                <hr/>
                <Card.Footer className="text-end fw-bold bg-white border-0">
                  {t.name}
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Testimonials;
