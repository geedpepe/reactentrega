import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from './Components/ItemListContainer';

function ColorSchemesExample() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, product) => total + product.price, 0);
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
        <h1>Destacados</h1>
        <Card addToCart={addToCart} />
        <div className="cart-summary">
          <h2>Carrito</h2>
          <p>Cantidad de productos: {cartItems.length}</p>
          <p>Monto total: ${calculateTotal()}</p>
        </div>
      </Container>
    </>
  );
}

export default ColorSchemesExample;
