import { useState, createContext } from "react";
/*
const CartContext = useContext({
     
    cartList: [],
    setCartList: 0
});*/

export const CartData = createContext()

const CartContext = ({children}) => {
    const [cart, setCart] = useState([]);
    
    return(
        <CartData.Provider value={{cart, setCart}}>{children}</CartData.Provider>
    )
}

export default CartContext;