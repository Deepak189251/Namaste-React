import { headerLogoUrl } from "../utils/constant"
import { useState } from "react"
import { Link } from "react-router-dom"
const Header = () => {
    const [logBtn, setLogBtn] = useState("LogIn")
    return(
      <header className="header">
        <div className="logo-container">
          <img className="logo" src={headerLogoUrl} alt="logo" />
         </div>
         <div className="nav-items">
          <ul>
             <li><Link to={"/"}>Home</Link></li>
             <li><Link to={"/about"}>About</Link></li>
             <li><Link to={"/contactus"}>Contact Us</Link></li>
             <li>Cart</li>
             <button onClick={() => {
              logBtn === "LogIn" ? setLogBtn("LogOut") : setLogBtn("LogIn")
             }}>{logBtn}</button> 
          </ul>
         </div>
      </header>
    )
 }

 export default Header