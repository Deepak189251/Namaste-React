import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addInCart: (state, action) => {
            state = action.payload
        }
    }
})

export const {addInCart} = cartSlice.actions

export default cartSlice.reducer