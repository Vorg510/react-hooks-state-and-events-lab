import {useState} from 'react';
import React from "react";

function Item({ name, category }) {
  
  const [inCart, setInCart] = useState(false)
  
  function clicked(){
    setInCart(!inCart)
  }

  return (
    <li className={inCart ? "in-cart" : null} >
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={clicked}>Add to Cart</button>
    </li>
  );
}

export default Item;
