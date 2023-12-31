import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    cartItems: [],
    cartItemsQuantity: 0,
    cartTotalAmount: 0
}

const addCartSlice = createSlice(
    {
        name: "addToCart",
        initialState,
        reducers: {
            addToCart(state, action) {
                const itemIndex = state.cartItems.findIndex(
                    (item) => item.id === action.payload.id
                ); 
                console.log(itemIndex, 'Index Number')
                if (itemIndex >= 0) {
                    state.cartItems[itemIndex].cartQuantity += 1
                } else {                
                    const tempProduct = {...action.payload, cartQuantity: 1}
                    state.cartItems.push(tempProduct)
                }
            },
            cartItemIncrement(state, action) {
                const itemIndex = state.cartItems.findIndex(
                    (item) => item.id === action.payload.id
                );
                state.cartItems[itemIndex].cartQuantity += 1
            },
            cartItemDecrement(state, action) {
                const itemObject = state.cartItems.find(
                    (item) => item.id === action.payload.id
                );
                if (itemObject.cartQuantity === 1) {
                    state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id)
                    state.cartItemsQuantity--
                } else {
                    itemObject.cartQuantity--
                }
            },
            removeItem(state,action) {
                let selectedItem = state.cartItems.filter((item) => item.id !== action.payload.id);
                state.cartItems = selectedItem
            },
            cartTotalvalue(state) {
                let { total, quantity } = state.cartItems.reduce((cartTotal, cartItem) => {
                    const { price, cartQuantity } = cartItem;
                    const itemTotal = price * cartQuantity;
                    cartTotal.total += itemTotal
                    cartTotal.quantity += cartQuantity
                    return cartTotal
                }, {
                    total: 0,
                    quantity: 0
                });
                state.cartTotalAmount = total;
                state.cartItemsQuantity = quantity;
            }
        }
    }
)

export const { addToCart, cartItemIncrement, cartItemDecrement, cartTotalvalue, removeItem } = addCartSlice.actions;
export default addCartSlice.reducer;