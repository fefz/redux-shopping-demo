import { connect } from "react-redux";
import { Modal, Divider } from "antd";
import React from "react";
import CartItem from "../components/CartItem";
import { getCartCount, getCartItems } from "../reducers/mall";
import { toggleCart } from "../actions/mall";

const CartContainer = ({
  cartList,
  totalAmount,
  checkOut,
  visibleCart,
  toggleCart
}) => (
  <Modal
    title="My Cart"
    visible={visibleCart.visible}
    onOk={checkOut}
    onCancel={() => toggleCart()}
  >
    {cartList.map(item => (
      <CartItem key={item.id} {...item} />
    ))}
    <Divider />
    <p>Total amount: ${totalAmount}</p>
  </Modal>
);

const mapStateToProps = state => ({
  cartList: getCartItems(state),
  totalAmount: getCartCount(state),
  visibleCart: state.visibleCart
});

export default connect(
  mapStateToProps,
  { toggleCart }
)(CartContainer);
