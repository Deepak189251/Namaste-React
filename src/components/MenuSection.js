import MenuItem from "./MenuItem"
import MenuItems from "./MenuItem";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import FilterSwitch from "./FilterSwitch";
import MenuSubSection from "./MenuSubSection";

const MenuSection = (props)=> {
  const [itemList, setItemList] = useState([])
    let {itemCards, title, categories} = props.response ; 
    const changeShow = props.showItems
   // console.log(changeShow)
    const show = props.show
    const index = props.no
    const filterbtn = props.filter
   // let productList
   // let vegItems
   // console.log(filterbtn)
   // console.log(item)
   if(props.response?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"){
    /* productList = categories.map((res) => {
       return res.itemCards
        })*/
      {/*console.log("nested")*/}
      return (
      <section className="menu-container text-center">
      

        <div id="Accordian-Header" className="heading bg-white flex justify-between" onClick={() => changeShow(index, show)}>
          <h5 className="menu-heading inline-block m-[10px] mr-[100px] ml-0 font-bold">{`${title}`}</h5>
          <button className="menu-btn border-none m-0 p-0 bg-none text-inherit cursor-pointer outline-none" >{show? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown}/>}</button>
        </div>
        <div id="Accordian-body" className="menu-border w-[100%] h-[13px] bg-gray-100 mb-[15px] mt-[5px]"></div>
        {show && <div className="answer w-[680px] m-auto"> {categories.map((res, index) => {
           return <MenuSubSection key= {index} response= {res} filter={filterbtn}/>
        })}
        
          
           {/**  {filterbtn ? (productList.map((res, index)=>{
           return <MenuItems key= {index} response = {res.card.info}/>
             })) : (  itemCards.map((res, index)=>{
             return <MenuItems key= {index} response = {res.card.info}/>
    }))} */}
      </div>}
    </section> 
      )
   }
   else{
     
    /*  const productList = itemCards.filter((res) => {
    return res.card.info.isVeg === 1
 }) */
    


   //console.log(itemCards)
    
  //  console.log(categories+ " categories")
   
  
  /* const [show, setShow] = useState(false);

    function changeShow (){
      setShow(!show)
    } */
    
   const productList = itemCards.filter((res) => {
    return res?.card?.info?.itemAttribute?.vegClassifier !== "NONVEG"
  }) 

  console.log(itemCards)

  console.log(productList)

  /* 
    if(reso)
  */
  
   return ( 
   <section className="menu-container text-center">
     

     <div id="Accordian-Header" className="heading bg-white flex justify-between" onClick={() => changeShow(index, show)}>
      <h5 className="menu-heading inline-block m-[10px] mr-[100px] ml-0 font-bold">{`${title} (${filterbtn ? productList.length : itemCards.length})`}</h5>
      <button className="menu-btn border-none m-0 p-0 bg-none text-inherit cursor-pointer outline-none" >{show? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown}/>}</button>
     </div>
     <div id="Accordian-body" className="menu-border w-[100%] h-[13px] bg-gray-100 mb-[15px] mt-[5px]"></div>
       {show && <div className="answer w-[680px] m-auto">  {filterbtn ? (productList.map((res, index)=>{
     return <MenuItems key= {index} response = {res.card.info}/>
   })) : (  itemCards.map((res, index)=>{
     return <MenuItems key= {index} response = {res.card.info}/>
   }))}
     </div>}
   </section> 
   
  /* itemCards.map((res, index)=>{
     return <MenuItem key= {index} response = {res.card.info}/>
   })
   
   
   itemCards.length
   
   */
  
)

/*itemCards.map((res, index)=>{
   return <MenuCard key= {index} response = {res.card.info}/>
})*/
   }
 
  
}

export default MenuSection