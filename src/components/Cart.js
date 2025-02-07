import { useContext, useState, useEffect } from "react"
//import { CartData } from "../utils/Context"
import { Link } from "react-router-dom";
import CartItems from "./CartItems";
import { CartState } from "../utils/Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
//import { TotalPriceData }  from "../utils/PriceContext";
import { CartState } from "../utils/Context";
import { useSelector } from "react-redux";

const Cart = () =>{
    
    const [Price, setPrice] = useState(0)
   // const {cart, setCart} = useContext(CartData)
   //    const {totalPrice} = useContext(TotalPriceData)
    //const [finalItem, setFinalItem] = useState([])
    const cart = useSelector(store => store.user.userCart)
    //const{state: {cart}, dispatch} = CartState();
   
 /*   console.log(cart)

   let element = cart.reduce((acc, curr) => {
    acc[curr.id] = (acc[curr.id] || 0) + 1;
    return acc
}, {})

   let elements = Object.keys(element)

   console.log(elements)*/

   /* setQuantity(cart.reduce((acc, curr) => {
        acc[curr.id] = (acc[curr.id] || 0) + 1;
        return acc
   }, {}))*/

   // console.log(element)

   /* cart.map((res) => {
        if(finalItem.indexOf(Number(res.id)) === -1){
            finalItem.push(res)
        }
    }) */
  useEffect(() => {
    setPrice(cart.reduce((acc, curr) => curr.data.price ? acc = acc + curr.data.price /100 * curr.qty : acc = acc + curr.data.defaultPrice / 100 * curr.qty , 0))
  },[cart])
    


  
   //console.log(totalPrice)
    if(cart.length === 0){
        return(
            <div className=" text-center mt-32">
                <h5 className=" text-lg font-bold pb-2">Your cart is empty!</h5>
                <p className=" mb-[30px]">You can go to home page to view more restaurants.</p>
                <Link to={"/"}><div className=" p-[6px] m-auto sm:w-[240px] w-[220px] bg-orange-500 text-sm font-bold text-white">SEE RESTAURANTS NEAR YOU</div></Link>
            </div>
        )
    }
    
    return (
        <div >
        <h3 className="text-center sm:mb-10 mb-[20px] sm:text-xl text-lg md:font-extrabold font-bold mt-4">{cart[0]?.resName}</h3>
        <div className="heading flex sm:justify-start justify-center  md:w-[600px] sm:w-[490px] w-[290px] mb-4 m-auto text-sm font-bold">
            <div className="  md:mr-[370px] sm:mr-[265px] mr-0">Added Items</div>
            <div className=" hidden sm:block md:mr-[35px] mr-[30px]">Quantity</div>
            <div className="hidden sm:block">Price</div>
        </div>
        <div>
            {cart.map((res, index) => {
               return <CartItems key={index} res={res}/>
            })}
        </div>
     <div className=" flex sm:flex-row flex-col justify-center ">
        <div className="priceContainer md:w-[260px] w-[230px] mt-[10px] sm:ml-[2px] sm:mr-[0] ml-auto mr-auto ">
            <div className=" border-b-2 pb-2 pt-2">
                <span className=" mr-[133px] font-semibold text-sm">Subtotal :</span>
                <span className="text-sm font-semibold ">{parseFloat(Price.toFixed(2))}</span>
            </div>
            <div className="border-b-2 pb-2 pt-2">
                <span className=" mr-[65px] text-sm font-semibold">Delivery charges :  <FontAwesomeIcon icon={faCircleInfo}/> </span>
                <span className="text-sm font-semibold ">10</span>
            </div>
            <div className="border-b-2 pb-2 pt-2">
                <span className="mr-[100px] font-semibold">Grandtotal : </span>
                <span className=" font-bold text-base text-left">{parseFloat(Price.toFixed(2)) + 10}</span>
            </div>

        </div>

        <div className=" sm:ml-6 w-[155px] sm:mt-[60px] sm:mr-[2px] ml-auto mr-auto   mt-[20px]">
          <div className=" p-[6px] sm:m-0 m-auto w-[100%] text-center  bg-orange-500 text-sm font-bold text-white cursor-pointer" onClick={()=> alert("your order is placed!")}>Proceed to Checkout</div>
        </div>
        </div>
        </div>
    )
}

export default Cart