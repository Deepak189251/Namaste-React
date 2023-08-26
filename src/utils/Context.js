import { useState, createContext, useReducer, useContext } from "react";
import { CartReducer } from "./Reducers";
/*
const CartContext = useContext({
     
    cartList: [],
    setCartList: 0
});*/

export const CartData = createContext()

const CartContext = ({children}) => {
   // const [cart, setCart] = useState([]);

   const [state, dispatch] = useReducer(CartReducer, {
     
    cart: []

   })
    
    return(
      //  <CartData.Provider value={{cart, setCart}}>{children}</CartData.Provider>

        <CartData.Provider value={{state, dispatch}}>{children}</CartData.Provider>
    )
}

export default CartContext;

export const CartState = () => {
    return useContext(CartData)
}