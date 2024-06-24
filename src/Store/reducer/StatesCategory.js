import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    category: [ ],
  value: 0,
}

export const counter2Slice = createSlice({
  name: 'count2',
  initialState,
  reducers: {
    categoryToState: (state, action) => {
        state.category = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { categoryToState } = counter2Slice.actions

export default counter2Slice.reducer