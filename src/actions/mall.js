import http from "../mock/http";

export const ADD_TO_CART = "ADD_CART";
export const DEL_FROM_CART = "DEL_FROM_CART";
export const CLEAR_CART = "CLEAR_CART";
export const CHECK_OUT = "CHECK_OUT";
export const GET_ALL_ITEMS = "GET_ALL_ITEMS";
export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";
export const OPEN_CART = "OPEN_CART";
export const CLOSE_CART = "CLOSE_CART";
export const SEARCH_ITEM = "SEARCH_ITEM";

export const searchByTitle = title => dispatch => {
  dispatch({ type: SEARCH_ITEM, searchKey: title });
};
const receiveProducts = items => ({
  type: RECEIVE_PRODUCTS,
  items
});
export const openCart = () => {
  return {
    type: OPEN_CART
  };
};
export const closeCart = () => {
  return {
    type: CLOSE_CART
  };
};
export const toggleCart = () => (dispatch, getState) => {
  if (getState().visibleCart.visible) {
    dispatch(closeCart());
  } else {
    dispatch(openCart());
  }
};
export const getAllItems = () => dispatch => {
  http.getItems(items => {
    dispatch(receiveProducts(items));
  });
};

export const addToCart = id => (dispatch, getState) => {
  if (getState().itemsList.itemById[id].count > 0) {
    dispatch(addItem(id));
  }
};

export const addItem = id => {
  return { type: ADD_TO_CART, id };
};
export const delItem = id => {
  return { type: DEL_FROM_CART, id };
};
export const claer = () => {
  return { type: CLEAR_CART };
};
export const checkout = () => {
  return { type: CHECK_OUT };
};
export const getItems = () => {
  return { type: GET_ALL_ITEMS };
};
