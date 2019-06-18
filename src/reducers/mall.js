import {
  ADD_TO_CART,
  DEL_FROM_CART,
  CLEAR_CART,
  CHECK_OUT,
  GET_ALL_ITEMS
} from "../actions/mall";
import { combineReducers } from "redux";

const initCartState = {
  addItem: [],
  countOfItem: {}
}

const addedItem = (state = initCartState.addItem, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.indexOf(action.id) !== -1) {
        return state
      }
      return [...state, action.id]
    default:
      return state
  }
}

const countOfItem = (state = initCartState.countOfItem, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { id } = action
      return {
        ...state,
        [id]: (state[id] || 0) + 1
      }
    default:
      return state
  }
}

export const getCount = (state, id) =>
  state.countOfItem[id] || 0

export const getAddedItems = state => state.addItem

export const cartLIst = (state = initCartState, action) => {
  switch (action.type) {
    case CHECK_OUT:
      return initCartState
    case CLEAR_CART:
      return initCartState
    default:
      return {
        addedIds: addedItem(state.addedIds, action),
        quantityById: countOfItem(state.quantityById, action)
      }
  }
}

const totalAmount = (state = [], action) => {
  if (action.type === CHECK_OUT) {
    // let total = state.reduce((prev, curr) => {
    //   return prev.price + curr.price;
    // });
    return state;
  } else {
    return 0;
  }
};

const initItemState = [
  {
    id: "ed1b7fe6-7a27-4503-a0bd-4e1793a5eb05",
    name: "Rye Special Old",
    thumb: "http://dummyimage.com/50x50.png/dddddd/000000",
    count: 4
  },
  {
    id: "e81bd1eb-e65b-4936-a80b-a7d5fef56efb",
    name: "Remy Red Berry Infusion",
    thumb: "http://dummyimage.com/50x50.png/5fa2dd/ffffff",
    count: 4
  },
  {
    id: "713455a4-f2fd-4b7b-83ad-599617cc492e",
    name: "Sambuca - Ramazzotti",
    thumb: "http://dummyimage.com/50x50.png/ff4444/ffffff",
    count: 4
  }
];

const repository = (state = initItemState, action) => {
  switch (action.type) {
    case GET_ALL_ITEMS:
      return [...state, ...initItemState];
    case ADD_TO_CART:
      return [
        ...state,
        count: state.count - 1
      ]
    case DEL_FROM_CART:
      return {
        ...state,
        count: state.count + 1
      }
    default:
      return state
  }
};

const rootReducer = combineReducers({
  cartLIst,
  totalAmount,
  repository
});
export default rootReducer;
