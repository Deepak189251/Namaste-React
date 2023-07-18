import { useEffect, useState } from "react"
import { menuApi } from "../utils/constant";
const useRestaurantMenu = (resId) => {

const [resInfo, setResInfo] = useState(null)
const [menu, setMenu] = useState([])

useEffect(() => {
   fetchInfo();
}, []);


const fetchInfo = async () => {
    // It is swiggy's original Api used in this app
    const data = await fetch(menuApi + resId);
  
    const resdata = await data.json()
  console.log(resdata)
    

   setResInfo(resdata?.data?.cards[0]?.card?.card?.info) ;
   setMenu(resdata?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
   
}
   
    return {resInfo, menu};
}

export default useRestaurantMenu;