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
      <div className=" mx-auto md:w-[700px] sm:w-[490px] w-[300px] h-auto">
        <div className=" flex justify-center mb-3 mt-3 relative md:h-[100px] sm:h-[78px] h-[75px]">
            
            <div className="image md:w-[100px] sm:w-[76px] w-[75px] md:h-[100px] sm:h-[76px] h-[75px] md:mr-8 sm:mr-[15px] mr-[8px]">
                <img className=" w-[100%] h-[100%] rounded-md" src={restaurantLogoUrl + data?.imageId} rel=""/>
            </div>
            <div className="details md:w-[300px] sm:w-[230px] w-[200px] pl-0 md:mr-[28px] sm:mr-[25px] mr-[10px] text-xs font-semibold sm:text-sm sm:pt-5 pt-[2px]">
                <p>{data?.name}</p>
            </div>
            {/*<div className="quantity pr-2 w-[60px] mr-11 text-xs flex  border border-gray-200 h-[30px] mt-4 pl-2 pt-[3px] cursor-pointer">
              <span onClick={decreaseQuantity} className="mt-[3px]">
                <FontAwesomeIcon icon={faMinus} size="xs" style={{color: "green"}}></FontAwesomeIcon>
              </span> 
              <div className=" pl-2 pr-2 text-sm font-semibold text-green-600">{qty}</div>
              <span onClick={increaseQuantity} className="mt-[3px]">
                <FontAwesomeIcon icon={faPlus} size="xs" style={{color: "green"}}></FontAwesomeIcon>
              </span>
            </div>*/}
            <p className=" sm:hidden absolute text-xs font-semibold top-[50px] left-[81px]">{"Qty:"}</p>
            <div className=" bg-white rounded-md text-center shadow-md md:w-[88px] sm:w-[75px] w-[60px] sm:static absolute top-[27px] left-[112px] sm:h-[30px] h-[25px] mt-[18px] mr-[20px] text-green-600 font-medium  flex justify-between text-sm ">
                <div className="  cursor-pointer hover:bg-gray-300 rounded-s-md" onClick={decreaseQuantity}>
                          <FontAwesomeIcon className="md:mx-[10px] sm:mx-[8px] sm:my-[7px] mx-[5px] my-[5px]" icon={faMinus} />
                </div>
                <div className=" sm:mx-[5px] mx-[3px] sm:my-[4px] my-[2px] font-semibold">
                          {qty}
                </div>
                <div className=" cursor-pointer hover:bg-gray-300 rounded-e-md" onClick={increaseQuantity}>
                          <FontAwesomeIcon className="md:mx-[10px] sm:mx-[8px] sm:my-[7px] mx-[5px] my-[5px]" icon={faPlus} />
                </div>
            </div>

            {/*<p className=" sm:hidden absolute text-xs font-semibold top-[32px] right-[100px]">{"Rs:"}</p>*/}

            <div className="price md:mr-[25px] sm:mr-[20px] mr-[14px] w-auto text-sm font-semibold pt-4 sm:static flex absolute right-[48px] top-[23px]" >
                <p className=" sm:hidden static text-xs font-semibold mt-[3px] mr-[5px]">{"Rs:"}</p>
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