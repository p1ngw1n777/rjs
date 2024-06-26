import { combineReducers, configureStore } from '@reduxjs/toolkit'
import StatesSlice from './reducer/StatesSlice'
import StatesCategory from './reducer/StatesCategory'
import StatesCatalog from './reducer/StatesCatalog'
import StatesProducts from './reducer/StatesProducts'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import StatesTable from './reducer/StatesTable'

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  StatesTable, 
  StatesSlice,
  StatesCatalog,
  StatesCategory,
  StatesProducts,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
})

export let persistor = persistStore(store)