import React, { useState } from "react";
import Home from "./pages/Home";

function App() {
  const [cartItems, setCartItems] = useState([]);

 const addToCart = (product) => {
    const exists = cartItems.find(item => item.id === product.id);
    if (exists) {
      setCartItems(
        cartItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  // Function to remove items from cart
  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
  };
  

  return (
    <div>
      <Home 
        cartItems={cartItems} 
        addToCart={addToCart} 
        removeFromCart={removeFromCart}
      />
    </div>
  );
}

export default App;