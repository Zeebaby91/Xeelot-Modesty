import React from "react";

function Navbar({ cartCount }) {
  return (
    <nav className="navbar">

      <h2 className="logo">Xeelot Modesty</h2>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#collection">Collection</a></li>
        <li><a href="#about">About Us</a></li>
      

      <div className="cart-icon">
        🛒
        <span className="cart-count">{cartCount}</span>
      </div>
</ul>
    </nav>
  );
}

export default Navbar;
