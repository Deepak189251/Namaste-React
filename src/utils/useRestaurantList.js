import { useState, useEffect } from "react";
import { api } from "./constant";

const useRestaurantList = () => {
  const [restaurantList, setRestaurantList] = useState([])

   useEffect(() => {
   fetchData()
   
  },[]);

    
   const fetchData = async () => {
     const data = await fetch(api);
     const jsondata = await data.json()
     setRestaurantList(jsondata?.data?.cards[2]?.data?.data?.cards)
     console.log(restaurantList)
    
  }  
   return restaurantList;
}

export default useRestaurantList;