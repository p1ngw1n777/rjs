import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    review: [ ],
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    reviewToState: (state, action) => {
        state.review = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { reviewToState } = counterSlice.actions

export default counterSlice.reducer