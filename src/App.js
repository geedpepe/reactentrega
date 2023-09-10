import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Landing from './views/Home';
import Contacto from './views/Contacto';
import NavbarComponent from './Components/Navbar';
import Cards from './Components/ItemListContainer'; 
import ItemDetail from './Components/ItemDetail'; 

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
          <Route path="/landing" element={<Landing />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/item/:itemId" element={<ItemDetail />} /> 
        </Routes>
        <h1>Destacados</h1>
        <Cards addToCart={addToCart} /> 
      </Container>
    </>
  );
}

export default ColorSchemesExample;
