import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons/faStar"
import { faArrowRight, faCircle, faSquareCaretUp, faIndianRupee, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { foodImgPlaceholder, restaurantLogoUrl } from "../utils/constant"
import { useSelector } from "react-redux"
import { increaseQty, decreaseQty, addInCart } from "../utils/userSlice"
import { useState } from "react"
import DiffRestaurant from "./DiffRestaurant"
const SearchCard = ({data, type, resData}) => {
    console.log(data, type)
    const cart = useSelector(store => store.user.userCart)
    const slicedCuisine = !type ? data.cuisines.join(", ").length > 38 ? data.cuisines.join(", ").slice(0, 38) + "..." : data.cuisines.join(", ") : null
    const slicedName = !type ? data.name.length > 30 ? data.name.slice(0, 30) + "..." : data.name : null
    const [refresh, setRefresh] = useState()
    const [show, setShow] = useState(false)
    const index = type && cart?.filter((item) => item.id === data.id)

    const dispatchnow = useDispatch()
    //console.log(data?.availability?.opened)
    //console.log(type && data.isVeg)
    const increaseQuantity = () => {
      dispatchnow(increaseQty(data.id))
      setRefresh(!refresh)
   }

   const decreaseQuantity = () => {
      dispatchnow(decreaseQty(data.id))
      setRefresh(!refresh)
   }
   const addToCart = () => {
   
      dispatchnow(addInCart({id: data.id, data: data, qty: 1, restaurant: resData.info.id, resName: resData.info.name}))
      setRefresh(!refresh)
   
    //  setCart([...cart, props.response])
     // quantity = quantity + 1
     // console.log(cart)
   }
   const differentRestaurant = () => {
    console.log("different restaurant used.")
    setShow(true)
 }
   const handleCart =  () => {
    /* const cart = JSON.parse(localStorage.getItem("userCart"))
     if(cart.length === 0){
        cart?.push({id: id, data: props.response, qty: 1})
     }
     else{
        const res = cart.find((item) => item?.id === id)
        if(!res){
           cart?.push({id: id, data: props.response, qty: 1})
        }
        else{
           res.qty++
        }
        
     }
     localStorage.setItem("userCart", JSON.stringify(cart))
     dispatchnow(addInCart(cart))
     setRefresh(!refresh)*/
     if(cart?.length > 0 && cart[0]?.restaurant !== resData.info.id){
        //console.log(resid)
        differentRestaurant()
     }
     else{
        addToCart()
     }
     
  }

  return ( type
    ? 
    
        <>
            <div className=" lg:w-[400px] md:w-[340px] w-[400px] bg-white mb-[15px] py-[20px] px-[15px]  rounded-xl">
                <Link to={`/restaurants/${resData.info.id}`}>
                    <div  className=" flex justify-between text-gray-600 mb-[15px]">
                        <div>
                            <p className=" text-sm  font-semibold">{"By " + resData?.info?.name}</p>
                            <div className=" flex">
                             <div className=" flex mr-[7px]">
                                    <FontAwesomeIcon className=" w-[13px] h-[12px] mr-[4px] mt-[4px]" icon={faStar}/>
                                    <p className=" text-[13px] font-normal">{resData?.info?.avgRatingString}</p>
                                </div>
                                <FontAwesomeIcon className=" w-[3px] h-[3px] mt-[9px] mr-[7px]" icon={faCircle} />
                                <p className=" text-[13px] font-normal mr-[5px]">{resData?.info?.sla.slaString}</p>
                            </div>
                        </div>
                        <div>
                        <FontAwesomeIcon icon={faArrowRight} color="grey" className=" w-[24px] h-[19px] mt-[12px]" />
                        </div>
                    </div>
                </Link>
                <hr className=" border-dotted mx-[5px]"></hr>
                <div className=" flex justify-between mt-[15px]">
                    <div>
                        {data.isVeg ? <FontAwesomeIcon icon={faCircle} style={{color: "green"}}/> : <FontAwesomeIcon icon={faSquareCaretUp} style={{color: "red"}}/>}
                        <p className=" text-base font-bold w-[190px] leading-5">{data?.name}</p>
                        <div className=" flex mt-[5px]">
                            <FontAwesomeIcon className=" mr-[2px] mt-[6px] h-[14px]" icon={faIndianRupee} /> 
                            <p className=" font-semibold">{data.price/100}</p>
                        </div>
                    </div>
                    {show && <DiffRestaurant close={setShow} show={show} data={[{id: data.id, data: data, qty: 1, restaurant: resData.info.id, resName: resData.info.name}]} />}
                    <div className=" relative">
                        <img className=" rounded-md w-[110px] h-[100px]" src={data.imageId ? restaurantLogoUrl + data.imageId : foodImgPlaceholder} alt="dish_logo" />
                        <div className="   ">
         
         
                            {cart?.some(p => p?.id === data.id) ? 
                            (<div className=" bg-white rounded-md text-center shadow-md absolute bottom-[-6px] right-[9px] w-[88px] text-green-600 font-medium  flex justify-between text-sm ">
                                <div className="  cursor-pointer hover:bg-gray-300 rounded-s-md" onClick={decreaseQuantity}>
                                    <FontAwesomeIcon className="mx-[10px] my-[7px]" icon={faMinus} />
                                </div>
                                <div className=" mx-[5px] my-[4px] font-semibold">
                                    {index[0]?.qty}
                                </div>
                                <div className=" cursor-pointer hover:bg-gray-300 rounded-e-md" onClick={increaseQuantity}>
                                    <FontAwesomeIcon className="mx-[10px] my-[7px]" icon={faPlus} />
                                </div>
                            </div>)

                        :

                            ( <div className="  bg-white rounded-md  text-center shadow-md absolute bottom-[-6px] right-[9px]  w-[88px] text-green-600 font-medium text-xs cursor-pointer " onClick={handleCart}>
                                <div className="hover:bg-gray-300 rounded-md">
                                    <p className=" py-[7px]">ADD</p>
                                </div>
                            </div>)
      
                        }
      
        </div>
                    </div>
                </div>
            </div>
        </> 
    
    :
        <Link to={`/restaurants/${data.id}`}>
            <div className=" lg:w-[400px] md:w-[340px] sm:w-[400px] w-[290px] sm:h-[150px] h-[130px] bg-white mb-[15px] sm:py-[20px] py-[14px] sm:px-[15px] px-[5px] flex">
                <div>
                    <img alt="restruant_logo" className={` sm:w-[90px] sm:h-[95px] h-[85px] w-[72px] rounded-md ${data.availability.opened ? 'filter-none'  : 'filter grayscale'} `} src={restaurantLogoUrl + data.cloudinaryImageId}/>
                </div>
                <div className=" ml-[10px] sm:pt-[15px] pt-[13px] ">
                    <div className=" mb-[3px]">
                        <p className=" font-bold sm:text-base text-sm">{slicedName}</p>
                    </div>
                    {data.availability.opened 


                    ? 
                        <>
                            <div className=" flex text-gray-600 mb-[3px]">
                                <div className=" flex sm:mr-[7px] mr-[5px]">
                                    <FontAwesomeIcon className=" w-[13px] h-[12px] mr-[4px] mt-[4px]" icon={faStar}/>
                                    <p className=" text-[13px] font-semibold">{data.avgRatingString}</p>
                                </div>
                                <FontAwesomeIcon className=" w-[3px] h-[3px] mt-[9px] sm:mr-[7px] mr-[5px]" icon={faCircle} />
                                <p className=" text-[13px] font-semibold mr-[5px]">{data.sla.slaString}</p>
                                <FontAwesomeIcon className=" w-[3px] h-[3px] mt-[9px] sm:mr-[7px] mr-[5px]" icon={faCircle} />
                                <div className=" flex">
                                    <p className=" text-[13px] font-semibold mr-[3px]">{data.costForTwo / 100}</p>
                                    <p className=" text-[12px] font-semibold mt-[1px]">{"for two"}</p>
                                </div>
                            </div>
                            <div className=" text-gray-500">
                                <p className=" sm:text-[14px] text-[13px] font-medium">{slicedCuisine}</p>
                            </div>
                        </>
                    :
                        <>
                            <div className=" text-gray-500 mb-[3px]">
                                <p className=" text-[14px]">{slicedCuisine}</p>
                            </div>
                            <div className="text-gray-500">
                                <p className=" text-[13px] font-semibold">{data?.availability?.nextOpenTimeMessage?.toUpperCase()}</p>
                            </div>
                        </>
                    }
               
                </div>
            </div>
        </Link>
  )
}

export default SearchCard