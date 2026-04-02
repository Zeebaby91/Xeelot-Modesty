import React from "react";

function SizeSelector({ sizes, selectedSize, setSelectedSize }) {
  return (
    <div className="sizes">
      {sizes.map((size) => (
        <button
          key={size}
          className={selectedSize === size ? "size active" : "size"}
          onClick={() => setSelectedSize(size)}
        >
          {size}
        </button>
      ))}
    </div>
  );
}

export default SizeSelector;