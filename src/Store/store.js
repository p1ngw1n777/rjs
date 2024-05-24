import { combineReducers, configureStore } from '@reduxjs/toolkit'
import StatesSlice from './reducer/StatesSlice'
import StatesCategory from './reducer/StatesCategory'
import StatesCatalog from './reducer/StatesCatalog'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
 

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  StatesSlice,
  StatesCatalog,
  StatesCategory,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
})

export let persistor = persistStore(store)