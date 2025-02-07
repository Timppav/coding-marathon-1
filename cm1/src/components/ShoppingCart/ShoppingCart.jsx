import React, { useState } from "react";
import Items from "./Items";
import "./ShoppingCart.css";

const initialState = {
  itemName: "",
  quantity: 0,
  price: 0,
};

function ShoppingCart() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState(initialState);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setNewItem((prevItem) => ({ ...prevItem, [name]: value }));
  }

  function addItem() {
    if (newItem.itemName.trim() !== "" && newItem.quantity.trim() !== "") {
      setItems((i) => [...i, newItem]);
      setNewItem(initialState);
    }
  }

  const handleUpdateItem = (index) => {
    const updatedItem = [...items];
    updatedItem[index] = newItem;
    setItems(updatedItem);
    setNewItem(initialState);
  };

  function deleteItem(index) {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  }

  return (
    <div className="shopping-cart">
      <h1>Shopping Cart</h1>
      <div className="form-container">
        <Items newItem={newItem} handleInputChange={handleInputChange} />
        <button className="button" onClick={addItem}>
          Add Item
        </button>
      </div>

      <ol className="item-list">
        {items.map((item, index) => (
          <li key={index} className="item-list-wrap">
            <div className="item-details-info">
              <div className="item-detail">
                <strong>Product:</strong> {item.itemName}
              </div>
              <div className="item-detail">
                <strong>Qty:</strong> {item.quantity}
              </div>
              <div className="item-detail">
                <strong>Price:</strong> ${item.price}
              </div>
            </div>
            <div className="item-buttons">
              <button
                onClick={() => deleteItem(index)}
                className="item-button delete-button"
              >
                Delete
              </button>
              <button
                onClick={() => handleUpdateItem(index)}
                className="item-button update-button"
              >
                Update
              </button>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ShoppingCart;