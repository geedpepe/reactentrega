import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './CartWidget.css';

function CartWidget({ calculateTotal }) {
    return (
      <div className="cart-summary">
        <h2>
          <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" /> 
        </h2>
        <p>Total compras: $ {calculateTotal()}</p>
      </div>
    );
  }
  
  
  export default CartWidget;
  

