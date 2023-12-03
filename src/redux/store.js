import { configureStore } from '@reduxjs/toolkit'
import allProducts from './slices/index'
import addCartSlice from './slices/cartSlice'
export const store = configureStore({
    reducer: {
        allData: allProducts,
        cart: addCartSlice
    }
})