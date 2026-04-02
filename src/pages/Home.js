import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Cart from "../components/Cart";
import SizeSelector from "../components/SizeSelector";
import Payment from "../components/Payment";

// Local images
import heroImage from "../assets/hero.jpeg";
import product1 from "../assets/img2.jpg";
import product2 from "../assets/img3.jpg";
import product3 from "../assets/img4.jpg";
import product4 from "../assets/img5.jpg";
import product5 from "../assets/winter1.jpeg";
import product6 from "../assets/winter2.jpeg";
import product7 from "../assets/winter3.jpeg";
import product8 from "../assets/winter4.jpeg";

 export default function Home() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, size) => {
  if (!size) {
    alert("Please select size");
    return;
  }

  setCartItems((prev) => [
    ...prev,
    { ...product, size }
  ]);
};
  const removeFromCart = (indexToRemove) => {
    setCartItems((prevItems) =>
      prevItems.filter((item, index) => index !== indexToRemove)
    );
  };
    {/*  LANDING PAGE / HERO SECTION */}
  <section className="hero">
    <div className="hero-content">
      <h1>Xeelot Modesty</h1>
      <p>Elegant Modest Fashion for Confident Women</p>
      <button onClick={() => window.location.href="#products"}>
        Shop Now
      </button>
    </div>
  </section>

  const [selectedSize, setSelectedSize] = useState("M");
  
   const ProductCard = ({ product }) => {
    const [selectedSize, setSelectedSize] = useState("M"); 

   

    return (
      <div className="card">
        <div className="image-container">
          <img src={product.image} alt={product.name} />
          
          <div className="overlay">
            <div className="overlay-content">
              <p className="description">{product.description}</p>
              <button className="overlay-btn">Shop Now</button>
            </div>
          </div>
        </div>

        <h4>{product.name}</h4>
        <p className="price">₦{product.price}</p>

        <SizeSelector
          sizes={["S", "M", "L", "XL"]}
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
        />
         {/* ADD TO CART FIX */}
        <button
          className="add-to-cart-btn"
          onClick={() => addToCart(product, selectedSize)}
        >
          Add To Cart
        </button>
      </div>
      
    );
  };

 const featuredProducts = [
    {
      id: 1,
      name: "Summer Dress",
      price: 19000,
      image: product1,
      description: "Elegant summer dress with breathable fabric. Perfect for casual and evening wear."
    },
    {
      id: 2,
      name: "Summer Dress",
      price: 20000,
      image: product2,
      description: "Lightweight and stylish dress. Perfect for summer outings."
    },
    {
      id: 3,
      name: "Summer Dress",
      price: 25000,
      image: product3,
      description: "Comfortable fabric with a modern cut for daily wear."
    },
    {
      id: 4,
      name: "Summer Dress",
      price: 15000,
      image: product4,
      description: "Elegant design suitable for both casual and evening events."
    },
    {
      id: 5,
      name: "Winter Dress",
      price: 11000,
      image: product5,
      description: "Warm winter dress made with high-quality materials."
    },
    {
      id: 6,
      name: "Winter Dress",
      price: 35000,
      image: product6,
      description: "Classic winter dress, soft and cozy for cold days."
    },
    {
      id: 7,
      name: "Winter Dress",
      price: 101000,
      image: product7,
      description: "Chic winter outfit perfect for casual gatherings."
    },
    {
      id: 8,
      name: "Summer Dress",
      price: 22000,
      image: product8,
      description: "Stylish summer dress with breathable, lightweight fabric."
    }
  ];

  // New arrivals array 
  const newArrivals = [
    {
      id: 9,
      name: "Elegant Abaya",
      price: 18000,
      image: "https://i.pinimg.com/736x/46/df/5b/46df5badcb0c8c3fc105a6a79a3e1713.jpg",
      description: "Elegant abaya with intricate designs, perfect for formal events."
    },
    {
      id: 10,
      name: "Luxury Dress",
      price: 15500,
      image: "https://i.pinimg.com/736x/e6/5e/e7/e65ee7390289a18c5a5e2d456b561cdd.jpg",
      description: "Luxury dress with a modern cut, perfect for casual outings."
    },
    {
      id: 11,
      name: "Royal Abaya",
      price: 12000,
      image: "https://img.fantaskycdn.com/d34a82481a2f638321b7e1c71c9e25ee_1024x.jpeg",
      description: "Royal abaya with classic elegance and breathable fabric."
    },
    {
      id: 12,
      name: "Luxury Dress",
      price: 45000,
      image: "https://i.pinimg.com/736x/62/bd/89/62bd89c262cdec41bb6927882fd9c9c1.jpg",
      description: "High-quality luxury dress with sophisticated design."
    },
    {
      id: 13,
      name: "Luxury Dress",
      price: 25000,
      image: "https://i.pinimg.com/736x/2d/d1/7b/2dd17b65361de039211d40f46cf292ba.jpg",
      description: "Elegant dress perfect for summer and formal events."
    },
    {
      id: 14,
      name: "Luxury Dress",
      price: 10000,
      image: "https://i.pinimg.com/1200x/eb/ab/84/ebab846692997b86569e1c6ea1904a94.jpg",
      description: "Stylish dress with lightweight breathable fabric."
    },
    {
      id: 15,
      name: "Luxury Dress",
      price:30000,
      image: "https://i.pinimg.com/736x/4e/2e/41/4e2e41c90b1c9013760dc174cf431dc7.jpg",
      description: "Elegant dress with a classic luxury design."
    },
    {
      id: 16,
      name: "Luxury Dress",
      price: 23000,
      image: "https://i.pinimg.com/736x/df/6d/87/df6d878c3cd114e37892b57d396f61c0.jpg",
      description: "Modern luxury dress suitable for formal events."
    }
  ];


  return (
    <>
      {/* ✅ Navbar with cart count */}
      <Navbar cartCount={cartItems.length} />
      <section className="hero">
  <div className="hero-container">
    
    {/* LEFT TEXT */}
    <div className="hero-text">
      <h1>Modest Fashion, Redefined</h1>
      <p>
        Discover timeless abayas and elegant hijabs designed for confidence,
        comfort, and class.
      </p>

      <div className="hero-actions">
        <button onClick={() => window.location.href="#products"}>
          Shop Now
        </button>

        <button className="secondary-btn">
          Explore Collection
        </button>
      </div>
    </div>

    {/* RIGHT IMAGE */}
    <div className="hero-image">
      <img src={heroImage} alt="Modest Fashion" />
    </div>

  </div>
</section>

      {/* Featured Products */}
      <section id="products" className="section">
        <h2 className="section-title">Featured Products</h2>
        <div className="product-grid">
          {featuredProducts.map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>
      </section>

      {/* New Arrivals */}
      <section id="collection" className="section dark-section">
        <h2 className="section-title">New Arrivals</h2>
        <div className="product-grid">
          {newArrivals.map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>
      </section>

      {/* ✅ CART (YOU MISSED THIS BEFORE) */}
      <Cart cartItems={cartItems} 
      removeFromCart={removeFromCart} 
      />

      {/* ✅ PAYMENT (PASS cartItems!) */}
      <Payment cartItems={cartItems} />

      <footer className="footer">
        <p>© 2026 Xeelot Modesty | All Rights Reserved</p>
      </footer>
    </>
  );
}