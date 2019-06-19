import {
    ADD_TO_CART,
    DEL_FROM_CART,
    CLEAR_CART,
    CHECK_OUT,
    GET_ALL_ITEMS,
    RECEIVE_PRODUCTS
} from "../actions/mall";

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

export const getAddedItems = state => state.addedIds

export const cartList = (state = initCartState, action) => {
    switch (action.type) {
        case CHECK_OUT:
            return initCartState
        case CLEAR_CART:
            return initCartState
        default:
            return {
                addedIds: addedItem(state.addedIds, action),
                countOfItem: countOfItem(state.countOfItem, action)
            }
    }
}

export default cartList