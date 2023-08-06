import MenuItem from "./MenuItem"
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons"


const MenuSection = (props)=> {
    let {itemCards, title, categories} = props.response ; 
   // console.log(item)
   if(categories != undefined){
      categories.map((res) => {
        itemCards = res.itemCards;
      })
   }
    
  //  console.log(categories+ " categories")
    const [show, setShow] = useState(false);
   
    return ( 
     <section className="menu-container text-center">
    <div className="heading bg-white flex justify-between">
      <h5 className="menu-heading inline-block m-[10px] mr-[100px] ml-0 font-bold">{`${title} (${itemCards.length})`}</h5>
      <button className="menu-btn border-none m-0 p-0 bg-none text-inherit cursor-pointer outline-none" onClick={() => setShow(!show)}>{show? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown}/>}</button>
    </div>
      <div className="menu-border w-[100%] h-[13px] bg-gray-100 mb-[15px] mt-[5px]"></div>
        {show && <div className="answer">  {itemCards.map((res, index)=>{
          return <MenuItem key= {index} response = {res.card.info}/>
        })}
        </div>}
    </section> 
    
   
 )

 /*itemCards.map((res, index)=>{
    return <MenuCard key= {index} response = {res.card.info}/>
})*/
  
}

export default MenuSection