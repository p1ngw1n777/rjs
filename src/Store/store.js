import { configureStore } from '@reduxjs/toolkit'
import StatesSlice from './reducer/StatesSlice'
import StatesCategory from './reducer/StatesCategory'
import StatesCatalog from './reducer/StatesCatalog'

export const store = configureStore({
  reducer: {StatesSlice, StatesCategory, StatesCatalog},
})