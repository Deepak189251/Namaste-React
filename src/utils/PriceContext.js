import { useState, createContext } from "react";

export const TotalPriceData = createContext()

const TotalPriceContext = ({children}) => {
    const [totalPrice, setTotalPrice] = useState(0);
     return (<TotalPriceData.Provider value={{totalPrice, setTotalPrice}}>{children}</TotalPriceData.Provider>)
}

export default TotalPriceContext