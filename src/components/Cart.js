import React from "react";
import Payment from "../components/Payment";

function Cart({ cartItems, removeFromCart }) {

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);
 
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div className="cart-item" key={index}>
              
              <img src={item.image} alt={item.name} />

              <div className="cart-details">
                <h4>{item.name}</h4>
                <p>Size: {item.size}</p>
                <p>₦{item.price.toLocaleString()}</p>
              </div>

              {/* ✅ REMOVE BUTTON */}

              <button 
  onClick={() => {
    console.log("Removing:", index);
    removeFromCart(index);
  }}
>
  Remove
</button>
              <button 
                className="remove-btn"
                onClick={() => removeFromCart(index)}
              >
                Remove
              </button>

            </div>
          ))}

          <div className="cart-total">
            <h3>Total: ₦{total.toLocaleString()}</h3>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;