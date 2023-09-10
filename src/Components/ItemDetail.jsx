import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import mesa from "../images/mesa.jpg";
import sofa from "../images/sofa.jpg";
import Rack from "../images/rack.jpg";
import Aparador from "../images/comoda.jpg";
import Silla from "../images/silla.jpg";
import Placard from "../images/placard.jpg";
import Lampara from "../images/lampara pie.jpg";
import mratona from "../images/mesa ratona.jpg";
import './ItemDetail.css';


function ItemDetail() {
  const { itemId } = useParams(); 
  const [product, setProduct] = useState(null); 

  useEffect(() => {
  

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

    const selectedProduct = products.find((product) => product.id === parseInt(itemId));

    if (selectedProduct) {
      setProduct(selectedProduct);
    }
  }, [itemId]);

  return (
    <div>
      {product ? (
        <div>
          <h2>{product.name} </h2>
          <img src={product.image} alt={product.name} className="product-image" />
          <p>{product.description}</p>
          <p>Precio: ${product.price}</p>
          
          
        </div>
      ) : (
        <p>Producto no encontrado</p>
      )}
    </div>
  );
}

export default ItemDetail;
