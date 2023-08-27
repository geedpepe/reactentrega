import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import mesa from "../images/mesa.jpg";
import sofa from "../images/sofa.jpg";
import './cards.css';


function Cards() {
  const [cartItems, setCartItems] = useState([]); // Estado para almacenar los productos en el carrito

  const products = [
    { id: 1, name: 'Mesa', description: 'Mesa madera 120x60x75', imagen: mesa },
    { id: 2, name: 'Sofa', description: 'Sofá aquaclean 200x80', imagen: sofa },
    { id: 3, name: 'Rack', description: 'Sofá aquaclean 200x80', imagen: sofa },
    { id: 4, name: 'Aparador', description: 'Sofá aquaclean 200x80', imagen: sofa },
    { id: 5, name: 'Mesa Ratona', description: 'Sofá aquaclean 200x80', imagen: sofa },
    { id: 6, name: 'Silla', description: 'Sofá aquaclean 200x80', imagen: sofa },
    { id: 7, name: 'Placard', description: 'Sofá aquaclean 200x80', imagen: sofa },
    { id: 8, name: 'Lampara', description: 'Sofá aquaclean 200x80', imagen: sofa },
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
