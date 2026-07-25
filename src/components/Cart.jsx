import { useState } from 'react'

export default function Cart({ cartItem, onCheckout }) {
  const [orderPlaced, setOrderPlaced] = useState(false)
  const total = cartItem.reduce((sum, item) => sum + item.price * item.qty, 0)

  const handleCheckout = () => {
    if (cartItem.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    setOrderPlaced(true);
    onCheckout(); 
    setTimeout(() => setOrderPlaced(false), 3000);
  };

  return (
    <section className="cart" id="cart">
      <h2>Your Cart</h2>

      {orderPlaced && (
        <div className="order-success">
          ✅ Your order has been placed successfully!
        </div>
      )}

      {cartItem.map((item) => (
        <p key={item.id}>{item.name} x {item.qty} - ₹{item.price * item.qty}</p>
      ))}
      <h3>Total = ₹{total}</h3>
      <button onClick={handleCheckout}>Place Order</button>
    </section>
  );
}