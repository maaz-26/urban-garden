import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const Contact = () => {
  return (
    <Container className="mt-4">
      <h2>Contact Us</h2>
      <p>We'd love to hear from you! Whether you have questions, suggestions, or just want to say hello, feel free to reach out to us.</p>
      <h4>Email</h4>
      <p><a href="mailto:info@sustainableurbangarden.com">info@sustainableurbangarden.com</a></p>

      <h4>Phone</h4>
      <p>+1 (123) 456-7890</p>

      <h4>Address</h4>
      <p>123 Greenway Avenue, Urban City, ST 12345</p>

      <h4>Follow Us</h4>
      <p>
        <a href="https://www.facebook.com/sustainableurbangarden" target="_blank" rel="noopener noreferrer">Facebook</a> | 
        <a href="https://www.twitter.com/sustainableurbangarden" target="_blank" rel="noopener noreferrer">Twitter</a> | 
        <a href="https://www.instagram.com/sustainableurbangarden" target="_blank" rel="noopener noreferrer">Instagram</a>
      </p>

      <h4>Contact Form</h4>
      <Form>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Your message" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Send Message
        </Button>
      </Form>
    </Container>
  );
};

export default Contact;
