import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    category: [ ],
  value: 0,
}

export const counterSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    categoryToState: (state, action) => {
        state.category = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { categoryToState } = counterSlice.actions

export default counterSlice.reducer