import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    itemsOfCategory: [ ],
  value: 0,
}

export const counterSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    categoryToItemsState: (state, action) => {
        state.itemsOfCategory = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { categoryToItemsState } = counterSlice.actions

export default counterSlice.reducer