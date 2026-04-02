import React, { useState } from "react";


function Payment({ cartItems = [] }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  // Calculate total from cart items
  const total = cartItems.reduce((sum, item) => sum + Number(item.price || 0), 0);

  const payWithPaystack = () => {
    if (!name || !email || !phone || !address) {
      alert("Please fill all fields");
      return;
    }

    const handler = window.PaystackPop.setup({
      key: "pk_test_893a28ca6ebb31f0a6d3db881299c9e08c6f1de1", //  public key
      email: email,
      amount: total * 100, // Paystack expects kobo
      currency: "NGN",
      callback: function (response) {
        alert("Payment successful! Ref: " + response.reference);
      },
      onClose: function () {
        alert("Payment window closed");
      },
    });

    handler.openIframe();
  };

  return (
    <div className="payment-page">
      <h2>Checkout</h2>

      <div className="form">
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <textarea
          placeholder="Delivery Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>

      <h3>Total: ₦{total}</h3>

      <button onClick={payWithPaystack} className="pay-btn" disabled={total <= 0}>
        Pay Now
      </button>

      {total <= 0 && <p>No items in cart to pay for.</p>}
    </div>
  );
}

export default Payment;