import {configureStore} from "@reduxjs/toolkit"
import CartReducer from "../features/CartSlice"
import DetailsReducer from "../features/Details"
import storage from "redux-persist/lib/storage"
import {persistReducer} from "redux-persist"
import { combineReducers } from "redux"

const persistConfig = {
    key: "root",
    version: 1,
    storage,
}

const reducer = combineReducers({
    cart: CartReducer,
    value: DetailsReducer
})
 
const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
//  reducer: {
//  cart: CartReducer,
//  }
reducer: persistedReducer,
})