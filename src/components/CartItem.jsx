import React from "react";

const CartItem = ({item}) => {
    return (
        <li>
            <div className="item">
                <div className='item-wrap'>
                    <span>Count: {item.count}</span>
                    <p>{item.title}</p>
                </div>
            </div>
        </li>
    );
};

export default CartItem;
