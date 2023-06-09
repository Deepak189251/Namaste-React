import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import MenuSection from "./MenuSection";
import { menuApi } from "../utils/constant";
const RestaurantMenu = () => {
   
    const [resInfo, setResInfo] = useState(null)
    const [menu, setMenu] = useState([])
    
    
    const {resId} = useParams();
   // console.log(resId)

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
    if(resInfo === null){
        return <Shimmer />
    }
    return(
        <div className="res-menu">
            <h5>{resInfo.name}</h5>
            <h6>{resInfo.cuisines.join(", ")}</h6>
            {menu.map((res, index) => {
                return <MenuSection key={index} response = {res?.card?.card}/>
            })}
        </div> 
    )
}
/*
{menu.map((res, index)=>{
    return <MenuCard key= {index} response = {res.card.info}/>
})} 


       setMenu(resdata?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)
       */

export default RestaurantMenu