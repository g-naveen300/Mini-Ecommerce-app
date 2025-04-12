import { useState, useEffect } from 'react';

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  const updateCart = (index, quantity) => {
    const newCart = [...cart];
    newCart[index].quantity = quantity;
    localStorage.setItem('cart', JSON.stringify(newCart));
    setCart(newCart);
  };

  const removeItem = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(newCart));
    setCart(newCart);
  };

  const checkout = () => {
    localStorage.removeItem('cart');
    setCart([]);
    alert('Order placed successfully!');
  };

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cart.map((item, index) => (
        <div key={index} className="cart-item">
          <img src={item.image} alt={item.title} width="50" />
          <h4>{item.title}</h4>
          <input
            type="number"
            min="1"
            value={item.quantity}
            onChange={(e) => updateCart(index, parseInt(e.target.value))}
          />
          <button onClick={() => removeItem(index)}>Remove</button>
        </div>
      ))}
      <h3>Total: ${totalPrice.toFixed(2)}</h3>
      {cart.length > 0 && <button onClick={checkout}>Checkout</button>}
    </div>
  );
}

export default Cart;
