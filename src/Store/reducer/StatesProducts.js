import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [ ],
    value: 0,
}

export const counterSlice1 = createSlice({
    name: 'counterOne',
    initialState,
    reducers:{
        productsToState: (state, action) => {
            state.products = action.payload;
        },
    },
});

export const { productsToState } = counterSlice1.actions;
export default counterSlice1.reducer