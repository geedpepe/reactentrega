import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from '../src/Components/cards';

function ColorSchemesExample() {

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };






  return (
    <>
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
      <Container>
        <h1>Productos</h1>
        <Card addToCart={addToCart} />
      </Container>
  
  
    </>
  );
}

export default ColorSchemesExample;