import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Tienda Muebles</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Galeria</Nav.Link>
          <Nav.Link href="#pricing">Trabajos</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
