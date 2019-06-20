import { connect } from "react-redux";
import React from "react";
import AllItems from "../components/AllItems";
import { toggleCart, addToCart, searchByTitle } from "../actions/mall";
import { getVisibleItems } from "../reducers/items";
import { Button, Input } from "antd";

const Search = Input.Search;

const AllItemsContainer = ({
  itemsList,
  addToCart,
  toggleCart,
  searchByTitle
}) => (
  <div className="appContainer">
    <Search
      placeholder="input search item"
      onSearch={val => searchByTitle(val)}
    />
    <AllItems itemsList={itemsList} addToCart={addToCart} />
    <Button type="primary" onClick={() => toggleCart(true)}>
      Open Cart
    </Button>
  </div>
);

const mapStateToProps = state => ({
  itemsList: getVisibleItems(state.itemsList)
});

// const mapDispatchToProps = () => {
//   return {
//     addToCart: addToCart,
//     showCart: toggleCart
//   };
// };

export default connect(
  mapStateToProps,
  { addToCart, toggleCart, searchByTitle }
)(AllItemsContainer);
