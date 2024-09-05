
import { configureStore } from "@reduxjs/toolkit";
import userApiSlice from "./app/services/userApiSlice.js";
import { setupListeners } from '@reduxjs/toolkit/query'
import productApiSlice from "./app/services/productApiSlice.js";
import rootReducers from "./redux/rootReducer.js";
import { thunk } from "redux-thunk";
import {applyMiddleware, createStore} from "redux"



const store=createStore(rootReducers,applyMiddleware(thunk));

// const store=configureStore({


    
//     reducer:{
//         [userApiSlice.reducerPath]:userApiSlice.reducer,
//         [productApiSlice.reducerPath]:productApiSlice.reducer,
//         rootReducers
//     },
//     middleware:(getDefaultMiddleware)=>(
//         getDefaultMiddleware().concat(userApiSlice.middleware,productApiSlice.middleware)
//     )

// })

// setupListeners(store.dispatch);

export default store;