import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Card from './Components/ItemListContainer';
import NavbarComponent from './Components/Navbar'; 
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Pricing from './views/Gallery';

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
      <NavbarComponent addToCart={addToCart} calculateTotal={calculateTotal} /> 
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
        <h1>Destacados</h1>
        <Card addToCart={addToCart} />
        
      </Container>
    </>
  );
}

export default ColorSchemesExample;
