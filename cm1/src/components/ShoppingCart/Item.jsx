import React from "react";

function Item({ name, newItem, handleInputChange }) {
  return (
    <input
      type={name === "quantity" || name === "price" ? "number" : "text"}
      placeholder={`Enter ${name}...`}
      name={name}
      value={newItem[name]}
      onChange={handleInputChange}
      className="input-field"
    />
  );
}

export default Item;