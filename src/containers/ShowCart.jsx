import {connect} from "react-redux";
import {Modal, Button} from 'antd';
import React from 'react'
import CartItem from '../components/CartItem'
import {getCartCount, getCartItems} from '../reducers/mall'


const CartContainer = ({cartList,totalAmount, checkOut, clearCart}) => (
    <Modal
        title="My Cart"
        visible={false}
        onOk={checkOut}
        onCancel={clearCart}
    >
        {cartList.map(item =>
            <CartItem key={item.id} {...item} />
        )}
        <p>${totalAmount}</p>
    </Modal>
)

const mapStateToProps = (state) => ({
    cartList: getCartItems(state),
    totalAmount: getCartCount(state)
})

export default connect(mapStateToProps)(CartContainer)