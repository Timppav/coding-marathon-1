import React from "react";
import './ShoppingCart.css';
import Item from "./Item";

function Items({ newItem, handleInputChange }) {
  return (
    <div className="item-container">
      <Item name={'itemName'} newItem={newItem} handleInputChange={handleInputChange}/>
      <Item name={'quantity'} newItem={newItem} handleInputChange={handleInputChange}/>
      <Item name={'price'} newItem={newItem} handleInputChange={handleInputChange}/>
    </div>
  );
}

export default Items;