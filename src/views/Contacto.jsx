import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function LandingPage() {
  return (
    <Container>
      <h1>Contacto</h1>
      <Form>
        <Form.Group controlId="name">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Escribe tu nombre" required />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Escribe tu correo electrónico" required />
        </Form.Group>

        <Form.Group controlId="message">
          <Form.Label>Mensaje</Form.Label>
          <Form.Control as="textarea" rows={4} placeholder="Escribe tu mensaje" required />
        </Form.Group>

        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </Container>
  );
}

export default LandingPage;

