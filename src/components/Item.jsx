import React from "react";

const Item = ({ item, onAddClick}) => {
  return (
    <li>
      <div className="item">
        <img src={item.thumb} alt={item.name} />
        <div className='item-wrap'>
          <span>Count: {item.count}</span>
          <p>{item.title}</p>
        </div>
        <div className="item-wrap">
          <button onClick={() => onAddClick(item.id)}>Add to cart</button>
        </div>
      </div>
    </li>
  );
};

export default Item;
