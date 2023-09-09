import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Card from './Components/ItemListContainer';
import Navbar from './Components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Pricing from './views/Products';

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
<Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
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
