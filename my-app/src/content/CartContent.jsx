// src/components/CartContent.jsx

import React from 'react';

const CartContent = ({ cartItems, onRemoveItem, onUpdateQuantity }) => {
  if (cartItems.length === 0) {
    return <p>Your cart is empty!</p>;
  }

  return (
    <div>
      {cartItems.map((item) => (
        <div key={item.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
          <img src={item.image} alt={item.title} width="80" />
          <h3>{item.title}</h3>
          <p>Price: ${item.price}</p>
          <input
            type="number"
            value={item.quantity}
            min="1"
            onChange={(e) => onUpdateQuantity(item.id, e.target.value)}
          />
          <button onClick={() => onRemoveItem(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default CartContent;
