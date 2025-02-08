import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import  cartReducer  from "./cartSlice";
import searchReducer from "./searchSlice";


const store = configureStore({

    reducer: {
        user: userReducer,
        cart: cartReducer,
        search: searchReducer
    }
})

export default store