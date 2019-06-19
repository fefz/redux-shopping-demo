import itemsList, * as fromItems from "./items";
import cartList, * as fromCartList from './cart'
import {combineReducers} from "redux";
import {OPEN_CAHRT} from '../actions/mall'


export default combineReducers({itemsList, cartList})

const openChart = (state, action) => {
    if (action.type) {
        return {openChart: true}
    }
}

const getAddedIds = state => fromCartList.getAddedItems(state.cartList)
const getCount = (state, id) => fromCartList.getCount(state.cartList, id)
const getItem = (state, id) => fromItems.getProduct(state.itemsList, id)
export const getCartCount = state =>
    getAddedIds(state)
        .reduce((total, id) =>
            total + getItem(state, id).price * getCount(state, id),
            0
        )
        .toFixed(2)

export const getCartItems = state =>
    getAddedIds(state).map(id => ({
        ...getItem(state, id),
        quantity: getCount(state, id)
    }))
