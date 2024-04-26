import { configureStore } from '@reduxjs/toolkit'
import StatesSlice from './reducer/StatesSlice'

export const store = configureStore({
  reducer: {StatesSlice},
})