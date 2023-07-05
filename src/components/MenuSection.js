import MenuItem from "./MenuItem"
import { useState } from "react";

const MenuSection = (props)=> {
    console.log(props.response);
    let {itemCards, title, categories} = props.response ; 
   // console.log(categories)
   if(categories != undefined){
      categories.map((res, index) => {
        itemCards = res.itemCards;
      })
   }
  //  console.log(itemCards+ " itemcards")
  //  console.log(categories+ " categories")
    const [show, setShow] = useState(false);
   
    return ( 
     <section className="menu-container">
    <div className="heading">
      <h5 className="menu-heading">{title}</h5>
      <button onClick={() => setShow(!show)}>{show? "-" : "+"}</button>
    </div>
    {show && <div className="answer">  {itemCards.map((res, index)=>{
        return <MenuItem key= {index} response = {res.card.info}/>
    })}</div>}
     <hr></hr>
    </section> 
    
   
 )

 /*itemCards.map((res, index)=>{
    return <MenuCard key= {index} response = {res.card.info}/>
})*/
  
}

export default MenuSection