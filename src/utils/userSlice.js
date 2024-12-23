import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({

    name: "user",
    initialState: {
        userLocation: null,
        userCart: []
    },

    reducers: {
        addUserLocation: (state, action) => {
            state.userLocation = action.payload
        },
        addInCart: (state, action) => {
           if(state.userCart?.length === 0) {
                state.userCart?.push(action.payload)
           }
           else{
                const res = state?.userCart?.find((item) => item?.id === action?.payload?.id)
                if(!res){
                    state.userCart?.push(action.payload)
                }
                
           }
           localStorage.setItem("userCart", JSON.stringify(state?.userCart))
        },
        updateCart: (state, action) => {
            state.userCart = action.payload
        },
        increaseQty: (state, action) => {
            const res = state.userCart?.find((item) => item.id === action.payload)
            if(res){
                res.qty++
            }
            localStorage.setItem("userCart", JSON.stringify(state?.userCart))
        },
        decreaseQty: (state, action) => {
            const res = state.userCart?.find((item) => item.id === action.payload)
            if(res.qty > 1){
                res.qty--
            }
            else{
                state.userCart = state.userCart.filter((item) => item.id !== action.payload)
            }
            localStorage.setItem("userCart", JSON.stringify(state?.userCart))
        },
        removeFromCart: (state, action) => {
            state.userCart = state.userCart.filter((item) => item.id !== action.payload)
            localStorage.setItem("userCart", JSON.stringify(state?.userCart))

        }
    }
})

export const {addUserLocation, addInCart, updateCart, increaseQty, decreaseQty, removeFromCart} = userSlice.actions

export default userSlice.reducer