import { useContext, useState, useEffect } from "react"
//import { CartData } from "../utils/Context"
import { Link } from "react-router-dom";
import CartItems from "./CartItems";
import { CartState } from "../utils/Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
//import { TotalPriceData }  from "../utils/PriceContext";
import { CartState } from "../utils/Context";

const Cart = () =>{
    
   // const [price, setPrice] = useState(0)
   // const {cart, setCart} = useContext(CartData)
   // const {totalPrice} = useContext(TotalPriceData)
    //const [finalItem, setFinalItem] = useState([])
    const [Price, setPrice] = useState(0)
    // let finalItem = []

    const{state: {cart}, dispatch} = CartState();
   
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

 /*  let len = cart.length
   let leng = finalItem.length*/

  /*   for(let i = 0 ; i < cart.length ; i++){
       for(let j = 0 ; j <= finalItem.length ; j++){
            if(finalItem.length === 0) {
        debugger;      setFinalItem(cart[i])
               console.log(cart[0])
                 console.log(finalItem)
            }
           else if(Number(cart[i].id) !== Number(finalItem[j].id))
                setFinalItem([...finalItem, cart[i]])
        }
    } */

    useEffect(() => {
        setPrice(cart.reduce((acc, curr) => acc + curr.price * curr.qty , 0))
     }, [])



   // finalItem = [... new Set(cart)] 

   // console.log(finalItem)
 /* useEffect(() => {

  },[totalPrice])*/
    


   
   console.log(totalPrice)
    if(cart.length === 0){
        return(
            <div className=" text-center mt-32">
                <h5 className=" text-lg font-bold pb-2">Your cart is empty!</h5>
                <p className=" mb-[30px]">You can go to home page to view more restaurants.</p>
                <Link to={"/"}><div className=" p-[6px] m-auto w-[240px] bg-orange-500 text-sm font-bold text-white">SEE RESTAURANTS NEAR YOU</div></Link>
            </div>
        )
    }
    
    return (
        <div >
        <h3 className=" text-center mb-10 text-xl font-extrabold mt-4">Your Cart</h3>
        <div className="heading flex  w-[600px] mb-4 m-auto text-sm font-bold">
            <div className="  mr-[290px]">Added Items</div>
            <div className=" mr-[35px]">Quantity</div>
            <div>Price</div>
        </div>
        <div>
            {cart.map((res, index) => {
               return <CartItems key={index} res={res}/>
            })}
        </div>
     <div className=" flex">
        <div className="priceContainer w-[260px] ml-[620px]">
            <div className=" border-b-2 pb-2 pt-2">
                <span className=" mr-[133px] font-semibold text-sm">Subtotal :</span>
                <span className="text-sm font-semibold ">{parseFloat(totalPrice.toFixed(2))}</span>
            </div>
            <div className="border-b-2 pb-2 pt-2">
                <span className=" mr-[65px] text-sm font-semibold">Delivery charges :  <FontAwesomeIcon icon={faCircleInfo}/> </span>
                <span className="text-sm font-semibold ">10</span>
            </div>
            <div className="border-b-2 pb-2 pt-2">
                <span className="mr-[100px] font-semibold">Grandtotal : </span>
                <span className=" font-bold text-base text-left">{parseFloat(totalPrice.toFixed(2)) + 10}</span>
            </div>

        </div>

        <div className=" ml-6 w-[155px] mt-[88px]">
          <div className=" p-[6px] m-auto w-[100%] text-center  bg-orange-500 text-sm font-bold text-white cursor-pointer" onClick={()=> alert("your order is placed!")}>Proceed to Checkout</div>
        </div>
        </div>
        </div>
    )
}

export default Cart