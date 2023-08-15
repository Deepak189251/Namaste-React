import { headerLogoUrl } from "../utils/constant"
import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { CartData } from "../utils/Context"
import CartItems from "./CartItems"
//import { CartState } from "../utils/Context"


const Header = () => {
    const [logBtn, setLogBtn] = useState("LogIn")
    const {cart, setCart} = useContext(CartData)
    const onlineStatus = useOnlineStatus();
    const [mouseHover, setMouseHover] = useState(false)

    //console.log(mouseHover)
    
    //const {state: {cart} } = CartState();

    return(
      <header className="flex justify-between" style={{boxShadow: "0 0px 50px -4px rgb(0 0 0 / 0.1)"}}>
        <div className="logo-container h-[100px] ml-16">
          <img className="w-[100] bg-transparent" src={headerLogoUrl} alt="logo" />
         </div>
         <div className="nav-items p-2 mr-16">
          <ul className="flex p-4 items-center">
             <li className="px-4 ">{(onlineStatus) ? "✅" : "🔴"}</li>
             <li className="px-4 hover:text-orange-500 text-lg font-bold"><Link className="nav-link" to={"/"}>Home</Link></li>
             <li className="px-4  hover:text-orange-500 text-lg font-bold"><Link className="nav-link" to={"/about"}>About</Link></li>
             <li className="px-4  hover:text-orange-500 text-lg font-bold"><Link className="nav-link" to={"/contactus"}>Contact Us</Link></li>
             <button className="nav-btn px-4  hover:text-orange-500 text-lg font-bold" onClick={() => {
              logBtn === "LogIn" ? setLogBtn("LogOut") : setLogBtn("LogIn")
             }}>{logBtn}</button> 
             <li className="nav-link px-4  hover:text-orange-500 text-lg font-bold"><Link onMouseEnter={() => (setMouseHover(true))} onMouseLeave={() => (setMouseHover(false))} to={"/cart"}>{<FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>} Cart {`(${cart.length})`}</Link> </li>
             {mouseHover && (<div className=" w-[300px] bg-white absolute top-[100px] right-[110px] border-t-2 border-orange-400 shadow-md">{cart.length > 0 
             
             ?
              
             (<div>
              {cart.map((res) => (
                 <CartItems key={res.id} res={res}/>
              ))}
             </div>)







             /* (<div>
                  {cart.map((res) => {
                    return 
                    (<div> 
                       <div><img src={res.imageId} alt=""></img></div>
                       <div><p>{res.name}</p></div>
                       <div><p>1</p></div>
                    </div>)
                  })}
              </div>)*/

             :

              (<div>
                <h3 className=" ml-[50px] text-2xl font-bold mb-3 mt-[35px] text-[#7e808c]">Cart Empty!</h3>
                <p className=" ml-[45px] mr-[35px] mb-[30px] text-[#93959f]">Good food is always cooking go ahead, order some yummy items from menu</p>
              </div>)
              
              }</div>)}
          </ul>
         </div>
      </header>
    )
 }

 export default Header