import { createAsyncThunk, createSlice, combineReducers } from "@reduxjs/toolkit";

//Action
export const allProducts = createAsyncThunk('allProductData', async () => {
    const response = await fetch("https://dummyjson.com/products");
    return response.json();
})

export const allData = createSlice({
    name: "allProducts",
    initialState: {
        isLoading: false,
        data: null,
        isError: false
    },
    extraReducers: (builder) => {
        builder.addCase(allProducts.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(allProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(allProducts.rejected, (state, action) => {
            state.isError = true;
        });
    }
})



export default allData.reducer;