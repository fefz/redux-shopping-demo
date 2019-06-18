export const ADD_TO_CART = "ADD_CART";
export const DEL_FROM_CART = "DEL_FROM_CART";
export const CLEAR_CART = "CLEAR_CART";
export const CHECK_OUT = "CHECK_OUT";
export const GET_ALL_ITEMS = "GET_ALL_ITEMS";

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
