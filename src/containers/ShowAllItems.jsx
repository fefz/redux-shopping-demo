import {connect} from "react-redux";
import React from 'react'
import AllItems from "../components/AllItems";
import {addItem, openCart, addToCart} from "../actions/mall";
import {getVisibleItems} from "../reducers/items"
import {Button} from "antd";


const AllItemsContainer = ({itemsList, addToCart, showCart}) => (
    <div>
        <AllItems itemsList={itemsList} addToCart={addToCart}/>
        <Button type="primary" onClick={() => showCart(true)}>Open Cart</Button>
    </div>
)

const mapStateToProps = state => ({
    itemsList: getVisibleItems(state.itemsList)
})

// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {
//         addToCart: (id) => {
//             console.log(ownProps)
//             if (ownProps.itemsList.itemById[id].count > 0) {
//                 dispatch(addItem(id))
//             }
//         },
//         showCart: (visible) => dispatch(openCart(visible))
//     }
// }

export default connect(
    mapStateToProps, {addToCart}
)(AllItemsContainer);
