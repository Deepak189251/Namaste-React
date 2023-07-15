import MenuItem from "./MenuItem"
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons"


const MenuSection = (props)=> {
    let {itemCards, title, categories} = props.response ; 
   // console.log(item)
   if(categories != undefined){
      categories.map((res, index) => {
        itemCards = res.itemCards;
      })
   }
    
  //  console.log(categories+ " categories")
    const [show, setShow] = useState(false);
   
    return ( 
     <section className="menu-container">
    <div className="heading">
      <h5 className="menu-heading">{title}</h5>
      <button className="menu-btn" onClick={() => setShow(!show)}>{show? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown}/>}</button>
    </div>
      <div className="menu-border"></div>
    {show && <div className="answer">  {itemCards.map((res, index)=>{
        return <MenuItem key= {index} response = {res.card.info}/>
    })}</div>}
    </section> 
    
   
 )

 /*itemCards.map((res, index)=>{
    return <MenuCard key= {index} response = {res.card.info}/>
})*/
  
}

export default MenuSection