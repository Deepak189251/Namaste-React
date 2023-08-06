import { headerLogoUrl } from "../utils/constant"
import { useState } from "react"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
const Header = () => {
    const [logBtn, setLogBtn] = useState("LogIn")
    const onlineStatus = useOnlineStatus();
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
             <li className="nav-link px-4  hover:text-orange-500 text-lg font-bold">Cart</li>
             <button className="nav-btn px-4  hover:text-orange-500 text-lg font-bold" onClick={() => {
              logBtn === "LogIn" ? setLogBtn("LogOut") : setLogBtn("LogIn")
             }}>{logBtn}</button> 
          </ul>
         </div>
      </header>
    )
 }

 export default Header