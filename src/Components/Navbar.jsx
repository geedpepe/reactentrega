import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../Components/CartWidget';
import { Link } from 'react-router-dom'; 
import './Navbar.css';

function NavbarComponent({ calculateTotal }) {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Link to="/" className="navbar-brand">Tienda Muebles</Link> 
        <Nav className="me-auto">
          <Link to="/" className="nav-link">Home</Link> 
          <Link to="/gallery" className="nav-link">Comprar</Link> 
          <Link to="/Contacto" className="nav-link">Contacto</Link> 
        </Nav>
        <CartWidget calculateTotal={calculateTotal} />
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
