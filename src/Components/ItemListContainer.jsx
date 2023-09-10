import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'; // Importa Link
import mesa from "../images/mesa.jpg";
import sofa from "../images/sofa.jpg";
import Rack from "../images/rack.jpg";
import Aparador from "../images/comoda.jpg";
import Silla from "../images/silla.jpg";
import Placard from "../images/placard.jpg";
import Lampara from "../images/lampara pie.jpg";
import mratona from "../images/mesa ratona.jpg";
import './ItemListContainer.css';
import './popup.css';

function Cards({ addToCart }) {
  const products = [
    { id: 1, name: 'Mesa', description: 'Mesa madera 120x60x75 $150', price: 150 , image: mesa },
    { id: 2, name: 'Sofa', description: 'Sofá aquaclean 200x80 $450', price: 450 , image: sofa },
    { id: 3, name: 'Rack', description: 'Rack de TV moderno $200', price: 200 , image: Rack },
    { id: 4, name: 'Aparador', description: 'Aparador cajones $400', price: 400 , image: Aparador },
    { id: 5, name: 'Mesa Ratona', description: 'Mesa ratona 100x60 $250', price: 250 , image: mratona },
    { id: 6, name: 'Silla', description: 'Silla madera standard $50', price: 50 , image: Silla },
    { id: 7, name: 'Placard', description: 'Placar multiuso $80', price: 80 , image: Placard },
    { id: 8, name: 'Lampara', description: 'Lampara pie en hierro $130', price: 130 , image: Lampara },
  ];

  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState('');

  useEffect(() => {
    if (showPopup) {
      const popupTimer = setTimeout(() => {
        setShowPopup(false);
        setPopupContent('');
      }, 2000);

      return () => {
        clearTimeout(popupTimer);
      };
    }
  }, [showPopup]);

  const handleAddToCartClick = (product) => {
    addToCart(product);
    setPopupContent(`Producto "${product.name}" agregado al carrito`);
    setShowPopup(true);
  };

  return (
    <div className="card-container">
      {products.map(product => (
        <Card key={product.id} style={{ width: '18rem' }}>
          <Card.Img variant="top" src={product.image} alt={product.name} width="200px" height="200px" />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <Link to={`/item/${product.id}`}>
              <Button variant="primary">Ver Detalles</Button>
            </Link>
            <Button variant="primary" onClick={() => handleAddToCartClick(product)}>Agregar al carrito</Button>
          </Card.Body>
        </Card>
      ))}

      {showPopup && (
        <div className="popup">
          <p>{popupContent}</p>
        </div>
      )}
    </div>
  );
}

export default Cards;
