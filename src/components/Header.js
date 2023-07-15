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
             <li ><Link className="nav-link" to={"/"}>Home</Link></li>
             <li ><Link className="nav-link" to={"/about"}>About</Link></li>
             <li ><Link className="nav-link" to={"/contactus"}>Contact Us</Link></li>
             <li className="nav-link">Cart</li>
             <button className="nav-btn" onClick={() => {
              logBtn === "LogIn" ? setLogBtn("LogOut") : setLogBtn("LogIn")
             }}>{logBtn}</button> 
          </ul>
         </div>
      </header>
    )
 }

 export default Header