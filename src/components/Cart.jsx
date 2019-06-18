import React from "react";
import Item from "./Item";

const Cart = ({ cartList }) => {
  return (
    <div>
      <p>My Cart:</p>
      <ol>
        {cartList.map(item => {
          return <Item item={item} />;
        })}
      </ol>
    </div>
  );
};

export default Cart;
