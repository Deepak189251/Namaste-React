import MenuItem from "./MenuItem"
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons"


const MenuSection = (props)=> {
    let {itemCards, title, categories} = props.response ; 
    const changeShow = props.showItems
    console.log(changeShow)
    const show = props.show
    const index = props.no
   // console.log(item)
   if(categories != undefined){
      categories.map((res) => {
        itemCards = res.itemCards;
      })
   }
    
  //  console.log(categories+ " categories")
   
  
  /* const [show, setShow] = useState(false);

    function changeShow (){
      setShow(!show)
    } */

   
    return ( 
     <section className="menu-container text-center">
    <div id="Accordian-Header" className="heading bg-white flex justify-between" onClick={() => changeShow(index, show)}>
      <h5 className="menu-heading inline-block m-[10px] mr-[100px] ml-0 font-bold">{`${title} (${itemCards.length})`}</h5>
      <button className="menu-btn border-none m-0 p-0 bg-none text-inherit cursor-pointer outline-none" >{show? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown}/>}</button>
    </div>
      <div id="Accordian-body" className="menu-border w-[100%] h-[13px] bg-gray-100 mb-[15px] mt-[5px]"></div>
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