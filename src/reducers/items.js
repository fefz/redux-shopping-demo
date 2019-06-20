import {
  ADD_TO_CART,
  DEL_FROM_CART,
  CLEAR_CART,
  CHECK_OUT,
  GET_ALL_ITEMS,
  SEARCH_ITEM,
  RECEIVE_PRODUCTS
} from "../actions/mall";
import { combineReducers } from "redux";

const items = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

const itemById = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return {
        ...state,
        ...action.items.reduce((obj, item) => {
          obj[item.id] = item;
          return obj;
        }, {})
      };
    default:
      const { id } = action;
      if (id) {
        return {
          ...state,
          [id]: items(state[id], action)
        };
      }
      return state;
  }
};

const visibleItems = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return action.items.map(item => item.id);
    default:
      return state;
  }
};

export const getProduct = (state, id) => state.itemById[id];

export const getVisibleItems = state => {
  let list = state.visibleItems.map(id => getProduct(state, id));
  if (!state.searchKey) {
    return list;
  } else {
    return list.filter(item => item.title.includes(state.searchKey));
  }
};

export const searchKey = (state = "", action) => {
  switch (action.type) {
    case SEARCH_ITEM:
      return action.searchKey;
    default:
      return state;
  }
};
export default combineReducers({ itemById, visibleItems, searchKey });
