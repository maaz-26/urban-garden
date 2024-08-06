import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Container, Row, Col, Form } from 'react-bootstrap';

const plants = [
  { id: 1, name: 'Rose', image: '/images/rose image.jpeg', description: 'Beautiful rose' },
  { id: 2, name: 'Tulip', image: '/images/tulip.jpeg', description: 'Lovely tulip' },
  { id: 3, name: 'Daisy', image: '/images/daisy.jpeg', description: 'Charming daisy' },
  
];



const Homepage = () => {
  return (
    <Container>
      <h1 className="mt-4">Welcome to the Sustainable Urban Garden</h1>
      <p>Discover how you can create and manage your own sustainable urban garden.</p>
      <Row>
        {plants.map((plant) => (
          <Col key={plant.id} sm={12} md={6} lg={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={plant.image} alt={plant.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title>{plant.name}</Card.Title>
                <Card.Text>{plant.description}</Card.Text>
                <Link to="/plants">
                  <Button variant="primary">View Plant</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <h2 className="mt-4">Register</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </Container>
  );
};

export default Homepage;