import { useContext, useState, useEffect } from "react"
import { CartData } from "../utils/Context"
import { Link } from "react-router-dom";
import CartItems from "./CartItems";

const Cart = () =>{
    const [price, setPrice] = useState(0)
    const {cart, setCart} = useContext(CartData)
    console.log(cart)

    useEffect(() => {
        setPrice(cart.reduce((acc, curr) => acc + curr.price/100 , 0));
    })

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
        <div className="priceContainer w-[260px] ml-[670px]">
            <div className=" border-b-2 pb-2 pt-2">
                <span className=" mr-[133px] font-semibold">Subtotal :</span>
                <span className="text-sm font-semibold ">{price}</span>
            </div>
            <div className="border-b-2 pb-2 pt-2">
                <span className=" mr-[76px] font-semibold">Delivery charges : </span>
                <span className="text-sm font-semibold ">10</span>
            </div>
            <div className="border-b-2 pb-2 pt-2">
                <span className="mr-[114px] font-semibold">Grandtotal : </span>
                <span className=" font-bold text-base ">{price + 10}</span>
            </div>

        </div>
        </div>
    )
}

export default Cart