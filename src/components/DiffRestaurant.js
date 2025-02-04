import { useDispatch } from "react-redux"
import { replaceCart, updateCart } from "../utils/userSlice"

const DiffRestaurant = ({close, show, data}) => {
  const dispatch = useDispatch()
  const freshStart = () => {
    dispatch(replaceCart(data))
    close(!show)
    console.log(data)
  }
  return (
    <>
        <div className="  z-[10] fixed top-0 bottom-0 left-0 right-0 " onClick={() => close(!show)}></div>
        <div className=" bg-white fixed z-[20] w-[500px] text-left shadow-dm p-[30px] bottom-[40px] left-[50%] translate-x-[-50%] " >
            <h2 className="mb-[3px] font-bold text-lg">{"Items already in cart"}</h2>
            <p className="mb-[30px] text-sm">{"Your cart contains items from other restaurant. Would you like to reset your cart for adding items from this restaurant?"}</p>
            <div className=" flex justify-between">
                <button className=" w-[200px] py-[10px] border-green-500 border-[2px] text-green-500 hover:shadow-dm" onClick={() => close(!show)}>
                   <p>{"NO"}</p>
                </button>

                <button className=" w-[200px] py-[10px] bg-green-500 text-white hover:shadow-dm" onClick={freshStart}>
                   <p>{"YES, START AFRESH"}</p>
                </button>
            </div>
        </div>
    </>
  )
}

export default DiffRestaurant