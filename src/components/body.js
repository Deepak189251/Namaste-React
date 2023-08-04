import RestruantCard, {promotedRestaurant} from "./RestaurantCard"
import Shimmer from "./Shimmer"
import { useState, useEffect } from "react"
import { api } from "../utils/constant"
import useOnlineStatus from "../utils/useOnlineStatus"
import useRestaurantList from "../utils/useRestaurantList"


const Body = () => {

   const [searchText, setSearchText] = useState("")
 //  const [filteredRestaurant, setFilteredRestaurant] = useState([])
 
  // const restaurantList = useRestaurantList();
 
    
 //  const [restaurantList, setRestaurantList] = useState([])
   const onlineStatus = useOnlineStatus();
   let {restaurantList, filteredRestaurant} = useRestaurantList()
   console.log(restaurantList, filteredRestaurant)

 //  const promotedRestaurant = promotedRestaurant(RestruantCard)
  // console.log(useState());
 /*  
   useEffect(() => {
      fetchData()
      
   },[]);
    

   const fetchData = async () => {
       const data = await fetch(api);
       const jsondata = await data.json()
       console.log(jsondata)
       setRestaurantList(jsondata?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
       setFilteredRestaurant(jsondata?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
       
   }   
     
   */

   

   

   
   

//   Conditional Rendering. 
   if(onlineStatus === false){
     return(<h1>please Check your internet connection!</h1>)
   }  
   

   
    
   if(restaurantList.length === 0){
      return <Shimmer/>
   } 

   
   
   console.log(restaurantList)
   console.log(filteredRestaurant)
 

   
  // setFilteredRestaurant(restaurantList);
  
 
   return (
      <div className="body">
         <div className="search-element m-4">

            <button className="filter-btn px-4 py-2 bg-gray-200 m-4 rounded-lg" onClick={() => {
              const filteredList = restaurantList.filter((Restaurant) => (
                  Restaurant.info.avgRating >= 4
               ))
               filteredRestaurant = filteredList;
            }}>Top Rated Restaurant</button> 


            <input type="text" className="border border-solid border-black rounded-md" id="search-input" value={searchText} onChange={(e) => {setSearchText(e.target.value)}}></input>
            <button className="search-btn px-4 py-2  bg-green-200 m-4 rounded-lg" onClick={() => {
               const searchedRestaurant = restaurantList.filter((res)=> {
                 return res.info.name.toLowerCase().includes(searchText.toLowerCase())
               }) 
             //  setFilteredRestaurant(searchedRestaurant) 
               filteredRestaurant = searchedRestaurant
               }}>Search</button>
         </div>
          
         <div className="restruant-container flex flex-wrap">
           {
             
             filteredRestaurant?.map((Restaurant) => (
               
               <RestruantCard key = {Restaurant.info.id} resdata = {Restaurant}/>
            ))

           }
           
         </div>
      </div>
   )
}

 export default Body