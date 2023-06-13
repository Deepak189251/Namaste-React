import { useState } from "react"
const MenuCard = (props) => {
 
 const {name, imageId, price, ratings, description, defaultPrice} = props.response
 
    return(
  /*  <div className="menu-container">
        <div className="recommended-section">
             <div className="heading">
                <h5>heading</h5>
             </div>
             <div>
                <span>+</span>
             </div>
             <div className="menu-products">
                <p>answers</p>
             </div>
        </div>
    </div> */


  <div>
     <h6>{name}</h6>
     <p>{price? "Rs"+ price/100 : "Rs"+defaultPrice/100}</p>
     <p>{description}</p>
   </div>
   )
}


export default MenuCard