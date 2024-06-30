import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    dataOfTable: [ ],
    columnOfTable: [ ], 
}

export const tableSlice = createSlice({
  name: 'tables',
  initialState,
  reducers: {
    tablesToState1: (state, action) => {
      state.dataOfTable = action.payload;
    },
    columnToState: (state, action) => {
      state.columnOfTable = action.payload
    }
  },
});

// Action creators are generated for each case reducer function
export const { tablesToState1, columnToState } = tableSlice.actions
export default tableSlice.reducer