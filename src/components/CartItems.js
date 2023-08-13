import { restaurantLogoUrl } from "../utils/constant"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons"
import { useContext, useState } from "react"
import { CartData } from "../utils/Context"

import { CartState } from "../utils/Context"

const CartItems = ({res}) => {
    const [quantity, setquantity] = useState(0)
    const {cart, setCart} = useContext(CartData)
 
  // const{state: {cart}, dispatch} = CartState()
    

    const {imageId, name, price, id, defaultPrice} = res

    const removeFromCart = () =>{
        setCart(cart.filter((res) => Number(id) !== Number(res.id)))
      /*  dispatch({
            type: "Remove",
            payload: res
        })*/
     }
    return(
        <div className="container flex mb-3 border-b-2 w-[750px]">
            
            <div className="image w-[100px] mr-8">
                <img className=" w-[100%] rounded-md" src={restaurantLogoUrl + imageId} rel=""/>
            </div>
            <div className="details w-[300px] pl-0 mr-8 font-semibold text-sm">
                <p>{name}</p>
            </div>
            <div className="quantity pr-2 w-[40px] mr-11 text-xs flex">
               <div className="pr-2">1</div>
            </div>
            <div className="price mr-12 w-[50px] text-sm font-semibold">
                <p>{price ? price / 100 : defaultPrice / 100}</p>
            </div>
            <div className="delete">
                <p><FontAwesomeIcon icon={faCircleXmark} style={{color: "red"}} onClick={removeFromCart}></FontAwesomeIcon></p>
            </div>
           
        </div>
    )
}

export default CartItems