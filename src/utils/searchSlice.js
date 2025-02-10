import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    
    name: "search",
    initialState: {
        searchedRestaurant: null,
        searchedDish: null,
        searchedKeyword: null
    },

    reducers: {
        addSearchedRestaurant: (state, action) => {
            state.searchedRestaurant = action.payload
        },
        addSearchedDish: (state, action) => {
            state.searchedDish = action.payload
        },
        addSearchedKeyword: (state, action) => {
            state.searchedKeyword = action.payload
        },
        removeSearchedDish: (state) => {
            state.searchedDish = null
        },
        removeSearchedRestaurant: (state) => {
            state.searchedRestaurant = null
        }
    }
})
 export const { addSearchedDish, addSearchedKeyword, addSearchedRestaurant, removeSearchedDish, removeSearchedRestaurant } = searchSlice.actions

export default searchSlice.reducer