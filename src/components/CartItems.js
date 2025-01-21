import { restaurantLogoUrl } from "../utils/constant"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleXmark, faPlus, faMinus} from "@fortawesome/free-solid-svg-icons"
import { useContext, useState, useEffect } from "react"
import { CartData } from "../utils/Context"
import { TotalPriceData } from "../utils/PriceContext"
import { CartState } from "../utils/Context"
import { useDispatch, useSelector } from "react-redux"
import { decreaseQty, increaseQty, removeFromCart } from "../utils/userSlice"

//import { CartState } from "../utils/Context"

const CartItems = ({res}) => {
   // let [quantity, setquantity] = useState(1)
   // const {cart, setCart} = useContext(CartData)
   // const {totalPrice, setTotalPrice} = useContext(TotalPriceData)
   // const{state: {cart}, dispatch} = CartState()
    const cart = useSelector(store => store.user.userCart)
   const dispatch = useDispatch()
   //const {imageId, name, price, id, defaultPrice, qty} = res
   const {data, id, qty} = res
    const decreaseQuantity = () => {
       /* dispatch({
           type: "Decrement_Qty",
           payload: res
        })*/
        dispatch(decreaseQty(id))
     }
   
     const increaseQuantity = () => {
        /*dispatch({
           type: "Increment_Qty",
           payload: res
        })*/
       dispatch(increaseQty(id))
     }

  //
   // console.log(quantity)

  /*  setTotalPrice(cart.reduce((acc, curr) => {
        curr.price ? acc = acc + curr.price/100 : acc = acc + curr.defaultPrice/100 
        return acc * quantity
     }, 0));*/



    // const {state: {cart}, dispatch} = CartState()
    

    

    

    const removeItem = () =>{
        //setCart(cart.filter((res) => Number(id) !== Number(res.id)))
       /* dispatch({
            type: "Remove",
            payload: res
        })
     */
    
     dispatch(removeFromCart(id))
    }
     
    return(
      <div className="container">
        <div className=" flex justify-center mb-3  mt-3">
            
            <div className="image w-[100px] h-[100px] mr-8">
                <img className=" w-[100%] h-[100%] rounded-md" src={restaurantLogoUrl + data?.imageId} rel=""/>
            </div>
            <div className="details w-[300px] pl-0 mr-8 font-semibold text-sm pt-4">
                <p>{data?.name}</p>
            </div>
            <div className="quantity pr-2 w-[60px] mr-11 text-xs flex  border border-gray-200 h-[30px] mt-4 pl-2 pt-[3px] cursor-pointer">
              <span onClick={decreaseQuantity} className="mt-[3px]"><FontAwesomeIcon icon={faMinus} size="xs" style={{color: "green"}}></FontAwesomeIcon></span> <div className=" pl-2 pr-2 text-sm font-semibold text-green-600">{qty}</div><span onClick={increaseQuantity} className="mt-[3px]"><FontAwesomeIcon icon={faPlus} size="xs" style={{color: "green"}}></FontAwesomeIcon></span>
            </div>
            <div className="price mr-12 w-[50px] text-sm font-semibold pt-4" >
                <p>{data?.price ? data?.price / 100 * qty : data?.defaultPrice / 100 * qty}</p>
            </div>
            <div className="delete cursor-pointer pt-4">
                <p><FontAwesomeIcon icon={faCircleXmark} size="xs" style={{color: "red"}} onClick={removeItem}></FontAwesomeIcon></p>
            </div>
        </div>
        <hr className=""></hr>
      </div>
    )
}

export default CartItems