import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: "products",
    initialState: {
        products: null,
    },
    reducers: {
        setProductData: (state, action) => {
            state.products = action.payload;
        }
    }
});

export const { setProductData } = productSlice.actions;
export default productSlice.reducer;