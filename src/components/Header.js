import { headerLogoUrl } from "../utils/constant"

const Header = () => {
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
          </ul>
         </div>
      </header>
    )
 }

 export default Header