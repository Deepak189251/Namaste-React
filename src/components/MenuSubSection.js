import MenuItems from "./MenuItem"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const MenuSubSection = ({response, filter, id}) => {
  console.log(response)
  const [show, setShow] = useState(false)
  const changeShow = () => {
     setShow(!show)
  }
    

    const {title, itemCards,} = response

    const productList = itemCards?.filter((res) => {
      return res?.card?.info?.itemAttribute?.vegClassifier !== "NONVEG"
    }) 

    return(
        <section className="menu-container text-center">
      

        <div id="Accordian-Header" className="heading bg-white flex justify-between" onClick={() => changeShow( show)}>
         <h5 className="menu-heading inline-block m-[10px] mr-[100px] ml-0 font-bold">{`${title} (${filter ? productList.length : itemCards.length})`}</h5>
         <button className="menu-btn border-none m-0 p-0 bg-none text-inherit cursor-pointer outline-none" >{show? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown}/>}</button>
        </div>
        <div id="Accordian-body" className="menu-border w-[100%] h-[13px] bg-gray-100 mb-[15px] mt-[5px]"></div>
          {show && <div className="answer w-[650px] m-auto">  {filter ? (productList.map((res, index)=>{
        return <MenuItems key= {index} response = {res.card.info} id={id}/>
      })) : (  itemCards.map((res, index)=>{
        return <MenuItems key= {index} response = {res.card.info} id={id}/>
      }))}
        </div>}
      </section> 
    )
}

export default MenuSubSection