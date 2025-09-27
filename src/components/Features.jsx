import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const features = [
  { title: 'Speaking Practice', text: 'Improve your speaking with AI feedback.', icon: '🗣️' },
  { title: 'Mock Tests', text: 'Simulate real exam conditions and track progress.', icon: '📝' },
  { title: 'AI Band Score', text: 'Get instant band score estimates for your answers.', icon: '🤖' },
  { title: 'Personal Dashboard', text: 'Track your progress and set goals.', icon: '📊' },
];

function Features() {
  return (
    <section className="py-5" id="Features">
      <Container>
        <h2 className="text-center mb-4">Our Features</h2>
        <Row>
          {features.map((feature, idx) => (
            <Col md={3} sm={6} key={idx} className="mb-4">
              <Card className="h-100 text-center shadow-sm">
                <Card.Body>
                  <div className="fs-1 mb-3">{feature.icon}</div>
                  <Card.Title>{feature.title}</Card.Title>
                  <Card.Text>{feature.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Features;
