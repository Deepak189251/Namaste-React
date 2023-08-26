import { headerLogoUrl } from "../utils/constant"
import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
import { faShoppingCart, faCircle, faSquareCaretUp  } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { CartData } from "../utils/Context"
import CartItems from "./CartItems"
import { CartState } from "../utils/Context"
import { TotalPriceData } from "../utils/PriceContext"


const Header = () => {
    const [logBtn, setLogBtn] = useState("LogIn")
   // const {cart} = useContext(CartData)
   // const {totalPrice, setTotalPrice} = useContext(TotalPriceData)
   const [Price, setPrice] = useState(0)
    const onlineStatus = useOnlineStatus();
    const [mouseHover, setMouseHover] = useState(false)
    const {state: {cart} } = CartState();
    //console.log(mouseHover)
   /* setTotalPrice(cart.reduce((acc, curr) => {
      curr.price ? acc = acc + curr.price/100 : acc = acc + curr.defaultPrice/100
      return acc
   }, 0)); */
   setPrice(cart.reduce((acc, curr) => acc + curr.price * curr.qty , 0))

    return(
      <header className="flex justify-between" style={{boxShadow: "0 0px 50px -4px rgb(0 0 0 / 0.1)"}}>
        <div className="logo-container h-[100px] ml-16">
          <img className="w-[100] bg-transparent" src={headerLogoUrl} alt="logo" />
         </div>
         <div className="nav-items ml-[200px] flex">
          <ul className="flex  items-center mr-[100px]">
             <li className="px-4 ">{(onlineStatus) ? "✅" : "🔴"}</li>
             <li className="px-4 hover:text-orange-500 text-lg font-bold"><Link className="nav-link" to={"/"}>Home</Link></li>
             <li className="px-4  hover:text-orange-500 text-lg font-bold"><Link className="nav-link" to={"/about"}>About</Link></li>
             <li className="px-4  hover:text-orange-500 text-lg font-bold"><Link className="nav-link" to={"/contactus"}>Contact Us</Link></li>
             <button className="nav-btn px-4  hover:text-orange-500 text-lg font-bold" onClick={() => {
              logBtn === "LogIn" ? setLogBtn ("LogOut") : setLogBtn ("LogIn")
             }}>{logBtn}</button> 


 {/*<span onMouseEnter={() => (setMouseHover(true))} onMouseLeave={() => (setMouseHover(false))} className="nav-link px-4  hover:text-orange-500 text-lg font-bold h-[120px] ml-2 pt-4 my-auto"><Link to={"/cart"}>{<FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>} Cart {`(${cart.length})`}</Link> */}
             
          <li className="nav-link px-4  hover:text-orange-500 text-lg font-bold h-[100px] pt-[37px] " onMouseEnter={() => (setMouseHover(true))} onMouseLeave={() => (setMouseHover(false))} ><Link  to={"/cart"}>{<FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>} Cart {`(${cart.length})`}</Link> 
             {mouseHover && (<div className=" w-[300px] bg-white absolute top-[100px] right-[110px] border-t-2 border-orange-400 shadow-md">
              
              {cart.length > 0 
             
             ?
              
             (<div className=" mt-3 " >
              {cart.map((res, index) => (<div className="flex justify-between " key={index}> 
                       {/*<div className=" bg-slate-300 w-100px"><img className=" w-[100%]" src={res.imageId} alt=""></img></div>*/}
                       <div className=" ml-[25px] ">
                            <span>{res.itemAttribute.vegClassifier === "VEG" ? (<FontAwesomeIcon icon={faSquareCaretUp} style={{color: "green"}} />) : (<FontAwesomeIcon icon={faSquareCaretUp} style={{color: "red"}} />)}</span>
                            <span className=" text-xs ml-3 font-semibold text-black">{res.name.substring(0, 20) + "..."}</span>
                        </div>
                        <div>
                            <span className=" text-xs  mr-[20px] font-medium text-[#93959f]">{res.price ? parseFloat( (res.price / 100).toFixed(0)): parseFloat( (res.defaultPrice / 100).toFixed(0))}</span>
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
      </header>
    )
 }

 export default Header 