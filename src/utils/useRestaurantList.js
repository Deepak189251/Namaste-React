import { useState, useEffect } from "react";
import { api } from "./constant";

const useRestaurantList = () => {
  const [restaurantList, setRestaurantList] = useState([])
  const [filteredRestaurant, setFilteredRestaurant] = useState([])
 //let filter;

  useEffect(() => {
    fetchData()
    
 },[]);
  

 const fetchData = async () => {
     const data = await fetch(api);
     const jsondata = await data.json()
     console.log(jsondata)
     setRestaurantList(jsondata?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
     setFilteredRestaurant(jsondata?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    // filter = jsondata?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
 } 
   return {restaurantList, filteredRestaurant};
}

export default useRestaurantList;