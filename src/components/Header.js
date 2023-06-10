import { headerLogoUrl } from "../utils/constant"
import { useState } from "react"
const Header = () => {
    const [logBtn, setLogBtn] = useState("LogIn")
    return(
      <header className="header">
        <div className="logo-container">
          <img className="logo" src={headerLogoUrl} alt="logo" />
         </div>
         <div className="nav-items">
          <ul>
             <li>Home</li>
             <li>About</li>
             <li>Contact Us</li>
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