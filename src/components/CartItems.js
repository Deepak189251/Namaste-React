import { restaurantLogoUrl } from "../utils/constant"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons"
import { useContext, useState, useEffect } from "react"
import { CartData } from "../utils/Context"
import { TotalPriceData } from "../utils/PriceContext"


import { CartState } from "../utils/Context"

const CartItems = ({res}) => {
    let [quantity, setquantity] = useState(1)
    const {cart, setCart} = useContext(CartData)
    const {totalPrice, setTotalPrice} = useContext(TotalPriceData)

 
    const quantityIncrement = () => {
        setquantity(quantity = quantity + 1)
    }

    const quantityDecrement = () => {
        setquantity(quantity = quantity - 1)
    }
  // const{state: {cart}, dispatch} = CartState()
   // console.log(quantity)

  /*  setTotalPrice(cart.reduce((acc, curr) => {
        curr.price ? acc = acc + curr.price/100 : acc = acc + curr.defaultPrice/100 
        return acc * quantity
     }, 0));*/

    

    const {imageId, name, price, id, defaultPrice} = res

    

    const removeFromCart = () =>{
        setCart(cart.filter((res) => Number(id) !== Number(res.id)))
      /*  dispatch({
            type: "Remove",
            payload: res
        })*/
     }
     useEffect(() => {
        setTotalPrice(totalPrice + price * quantity)
     }, [quantity])
    
     
     
    return(
        <div className="container flex mb-3 border-b-2 w-[750px]">
            
            <div className="image w-[100px] mr-8">
                <img className=" w-[100%] rounded-md" src={restaurantLogoUrl + imageId} rel=""/>
            </div>
            <div className="details w-[300px] pl-0 mr-8 font-semibold text-sm">
                <p>{name}</p>
            </div>
            <div className="quantity pr-2 w-[40px] mr-11 text-xs flex">
              <span onClick={quantityDecrement} className=" cursor-pointer">-</span> <div className="pr-2">{quantity}</div><span onClick={quantityIncrement} className=" cursor-pointer">+</span>
            </div>
            <div className="price mr-12 w-[50px] text-sm font-semibold">
                <p>{price ? price / 100 * quantity : defaultPrice / 100 * quantity}</p>
            </div>
            <div className="delete">
                <p><FontAwesomeIcon icon={faCircleXmark} style={{color: "red"}} onClick={removeFromCart}></FontAwesomeIcon></p>
            </div>
           
        </div>
    )
}

export default CartItems