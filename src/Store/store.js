import { configureStore } from '@reduxjs/toolkit'
import StatesSlice from './reducer/StatesSlice'
import StatesCategory from './reducer/StatesCategory'

export const store = configureStore({
  reducer: {StatesSlice, StatesCategory},
})