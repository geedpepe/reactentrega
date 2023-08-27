import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import mesa from "../images/mesa.jpg";
import sofa from "../images/sofa.jpg";
import Rack from "../images/rack.jpg";
import Aparador from "../images/comoda.jpg";
import Silla from "../images/silla.jpg";
import Placard from "../images/placard.jpg";
import Lampara from "../images/lampara pie.jpg";
import mratona from "../images/mesa ratona.jpg";
import './cards.css';


function Cards() {
  const [cartItems, setCartItems] = useState([]); // Estado para almacenar los productos en el carrito

  const products = [
    { id: 1, name: 'Mesa', description: 'Mesa madera 120x60x75', imagen: mesa },
    { id: 2, name: 'Sofa', description: 'Sofá aquaclean 200x80', imagen: sofa },
    { id: 3, name: 'Rack', description: 'Sofá aquaclean 200x80', imagen: Rack },
    { id: 4, name: 'Aparador', description: 'Sofá aquaclean 200x80', imagen: Aparador },
    { id: 5, name: 'Mesa Ratona', description: 'Sofá aquaclean 200x80', imagen: mratona },
    { id: 6, name: 'Silla', description: 'Sofá aquaclean 200x80', imagen: Silla },
    { id: 7, name: 'Placard', description: 'Sofá aquaclean 200x80', imagen: Placard },
    { id: 8, name: 'Lampara', description: 'Sofá aquaclean 200x80', imagen: Lampara },
    // ... otros productos ...
  ];

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div className="card-container">
      {products.map(product => (
        <Card key={product.id} style={{ width: '18rem' }}>
          <Card.Img variant="top" src={product.imagen} alt={product.name} width="200px" height="200px" />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <Button variant="primary" onClick={() => addToCart(product)}>Agregar al carrito</Button> {/* Agregar la función de agregar al carrito */}
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Cards;
