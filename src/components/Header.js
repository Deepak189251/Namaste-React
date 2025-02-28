import { headerLogoUrl } from "../utils/constant"
import { useState, useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
import { faShoppingCart, faCircle, faSquareCaretUp, faMagnifyingGlass, faList  } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { restaurantLogoUrl } from "../utils/constant"
import { useNavigate } from "react-router-dom"
import LocationSlidebar from "./LocationSlidebar"
import { useDispatch, useSelector } from "react-redux"
import { updateCart } from "../utils/userSlice"

const Header = () => {
    
   // const {cart} = useContext(CartData)
   // const {totalPrice, setTotalPrice} = useContext(TotalPriceData)
    const [showLocation, setShowLocation] = useState(false)
    const [menu, setMenu] = useState(false)
    const [mouseHover, setMouseHover] = useState(false)
    const [Price, setPrice] = useState(0)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const cart = useSelector(store => store.user.userCart)

    //console.log(mouseHover)
  /*  setTotalPrice(cart.reduce((acc, curr) => {
      curr.price ? acc = acc + curr.price/100 : acc = acc + curr.defaultPrice/100
      return acc
   }, 0));*/
    //const {state: {cart} } = CartState();

   const location = localStorage.getItem("userLocation")
   const newCart = JSON.parse(localStorage.getItem("userCart"))
   //dispatch(addInCart(newCart))
   if(cart?.length !== newCart?.length){
      dispatch(updateCart(newCart))
   }
  /* if(cart?.length > 0){
      
   }*/

   

    //const newCart = localStorage.getItem()
   if(!localStorage?.getItem("userCart")) {
    localStorage?.setItem("userCart", "[]")
    
  }
  

   

    //setPrice(cart.reduce((acc, curr) => acc + curr.price * curr.qty , 0))
    useEffect(() => {
      setPrice(cart?.reduce((acc, curr) => curr.data.price ? acc = acc + curr.data.price /100 * curr.qty : acc = acc + curr.data.defaultPrice / 100 * curr.qty , 0))
      if(!location) navigate("/")
    },[cart])


    const CartLength = cart?.reduce((acc, curr) => (acc = acc + curr?.qty), 0)

    
    return(
      <header className="flex justify-between" style={{boxShadow: "0 0px 50px -4px rgb(0 0 0 / 0.1)"}}>
        <div className="logo-container h-[100px] lg:w-[210px] w-[190px] xl:ml-[100px] lg:ml-[45px] ml-[42px] flex justify-between ">
          <img className="lg:w-[100px] w-[90px] bg-transparent" src={headerLogoUrl}  alt="logo" />
          <p className=" lg:text-lg text-base font-bold md:block hidden  hover:text-orange-500 mt-[33px] cursor-pointer" onClick={() => setShowLocation(!showLocation)}>{"Location"}</p>
          {showLocation && 
            <LocationSlidebar close={setShowLocation} show={showLocation} />
          }
         </div>
         <div className="nav-items xl:ml-[200px] lg:ml-[120px] ml-[60px] md:flex hidden">
          <ul className="flex  items-center xl:mr-[100px] lg:mr-[60px] mr-[45px]">
             <li className="lg:px-4 lg:mr-[10px]  px-[15px] hover:text-orange-500 lg:text-lg text-base font-bold "><Link className="nav-link" to={"/"}>Home</Link></li>
             <li className="lg:px-4 lg:mr-[10px] px-[15px]  hover:text-orange-500 lg:text-lg text-base font-bold ">
                <Link className="nav-link" to={"/search"}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className=" mr-[8px]" />
                    <span >{"Search"}</span>
                </Link>
              </li>
             <li className="lg:px-4 lg:mr-[10px] px-[15px]  hover:text-orange-500 lg:text-lg text-base font-bold "><Link className="nav-link" to={"/about"}>About</Link></li>

 {/*<span onMouseEnter={() => (setMouseHover(true))} onMouseLeave={() => (setMouseHover(false))} className="nav-link px-4  hover:text-orange-500 text-lg font-bold h-[120px] ml-2 pt-4 my-auto"><Link to={"/cart"}>{<FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>} Cart {`(${cart.length})`}</Link> */}
             
          <li className="nav-link lg:px-4 px-[15px]  hover:text-orange-500 lg:text-lg text-base font-bold h-[100px] lg:pt-[37px] pt-[38px] " onMouseEnter={() => (setMouseHover(true))} onMouseLeave={() => (setMouseHover(false))} ><Link  to={"/cart"}>{<FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>} Cart {cart?.length > 0 && `(${CartLength})`}</Link> 
             {mouseHover && (<div className=" w-[300px] bg-white absolute top-[100px] right-[110px] border-t-2 border-orange-400 shadow-md">
              
            {cart?.length > 0 
             
             ?
              
             (<div className=" mt-3 " >
              {cart?.map((res, index) => (<div className="flex justify-between " key={index}> 
                       {/*<div className=" bg-slate-300 w-100px"><img className=" w-[100%]" src={restaurantLogoUrl + res.imageId} alt=""></img></div>*/}
                       <div className="ml-[20px]">
                            <span>{res.data.isVeg ? (<FontAwesomeIcon icon={faSquareCaretUp} style={{color: "green"}} />) : (<FontAwesomeIcon icon={faSquareCaretUp} style={{color: "red"}} />)}</span>
                            <span className=" text-xs  font-semibold text-black ml-3">{res.data.name.substring(0, 20) + "... " + "x " + res.qty}</span>
                        </div>
                        <div>
                            <span className=" text-xs  mr-[20px] font-medium text-[#93959f]">{res.data.price ? parseFloat( (res.data.price / 100 * res.qty).toFixed(0)): parseFloat( (res.data.defaultPrice / 100 * res.qty).toFixed(0))}</span>
                            </div>
                       
                    </div>))}
                     
                    <hr className=" mt-3 "></hr>
                    <div className=" ml-4 mt-3">
                      <span className=" text-sm font-semibold text-black">Sub total: </span> <span className=" ml-[180] text-sm font-semibold text-black">{parseFloat(Price.toFixed(0))}</span>
                      <p className=" text-xs text-[#93959f] ">Exra charges may apply</p>
                    </div>

                  <Link to={"/cart"}><div className=" bg-orange-500 text-white text-center mt-3 mb-4 ml-4 mr-4 pt-[6px] pb-[6px] font-semibold" >CHECKOUT</div></Link> 
                       
               <div></div>
             </div>)
              
             
             : 

              (<div>
                <h3 className=" ml-[50px] text-2xl font-bold mb-3 mt-[35px] text-[#7e808c]">Cart Empty!</h3>
                <p className=" ml-[45px] mr-[35px] mb-[30px] text-[#93959f]">Good food is always cooking go ahead, order some yummy items from menu</p>
              </div>)
              
              }</div>)}
              </li> 
              </ul>
         </div>
         <div className=" md:hidden " onClick={() => setMenu(!menu)}>
            <FontAwesomeIcon icon={faList} className=" mr-[40px] mt-[36px]"  />
            {menu &&
            <div>
              <div className="  z-[10] fixed top-0 bottom-0 left-0 right-0 " onClick={() => setMenu(!menu)}></div>

              <div style={{boxShadow: "0 0px 50px -4px rgb(0 0 0 / 0.1)"}} className=" absolute text-black right-[20px] z-[20] top-[102px] bg-white items-center flex flex-col justify-between py-[10px] h-[150px] w-[120px]">
                
            <div>
              <Link to={"/cart"} >
                <p className="cursor-pointer hover:underline hover:text-orange-500">{"Cart"}</p>
              </Link>
            </div>
            <div>
              <Link to={"/about"}>
                <p className="cursor-pointer hover:underline hover:text-orange-500">{"About"}</p>
              </Link>
            </div>
            <div>
              <Link to={"/search"}>
                <p className="cursor-pointer hover:underline hover:text-orange-500">{"Search"} </p>
              </Link>
            </div>
            <div>
                <p className="cursor-pointer hover:underline hover:text-orange-500" onClick={() => setShowLocation(!showLocation)} >{"Location"} </p>
            </div>
          </div> 
          </div>
            }
         </div>
         
      </header>
    )
 }

 export default Header 