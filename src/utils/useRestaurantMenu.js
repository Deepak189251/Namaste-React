import { useEffect, useState } from "react"
import { menuApi } from "../utils/constant";
const useRestaurantMenu = (resId) => {

const [resInfo, setResInfo] = useState(null)
//const [menu, setMenu] = useState([])
//const [filteredSection, setFilteredSection] = useState([])

useEffect(() => {
   fetchInfo();
}, []);


const fetchInfo = async () => {
    // It is swiggy's original Api used in this app
    const data = await fetch(menuApi + resId);
  
    const resdata = await data.json()
  console.log(resdata)
    

   setResInfo(resdata) ;
  // setResInfo(resdata?.data?.cards[0]?.card?.card?.info) ;
  //setMenu(resdata?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

  
   
}
  /*  filteredSection = menu.filter((res) => {
    return res.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  })*/

 /* setFilteredSection(menu.filter((res) => {
    return res.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  }))*/
    return resInfo ;
}

export default useRestaurantMenu;