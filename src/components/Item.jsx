import React from "react";

const Item = ({ item, onAddClick, onDelClick}) => {
  return (
    <li>
      <div className="item">
        <img src={item.thumb} alt={item.name} />
        <div className='item-wrap'>
          <span>Count: {item.count}</span>
          <p>{item.name}</p>
        </div>
        <div className="item-wrap">
          <button onClick={() => onAddClick(item.id)}>+</button>
          <button onClick={onDelClick}>-</button>
        </div>
      </div>
    </li>
  );
};

export default Item;
