import RestruantCard from "./RestaurantCard"
import Shimmer from "./Shimmer"
import { useState, useEffect } from "react"
import { api } from "../utils/constant"
import useOnlineStatus from "../utils/useOnlineStatus"


const Body = () => {

   const [searchText, setSearchText] = useState("")
   const [filteredRestaurant, setFilteredRestaurant] = useState([])
 
  // const restaurantList = useRestaurantList();
 
    
   const [restaurantList, setRestaurantList] = useState([])
   const onlineStatus = useOnlineStatus();
   
   
   
      useEffect(() => {
         fetchData()
      
      },[]);
   
  


   const fetchData = async () => {
       const data = await fetch(api);
       const jsondata = await data.json()
       setRestaurantList(jsondata?.data?.cards[2]?.data?.data?.cards)
       setFilteredRestaurant(jsondata?.data?.cards[2]?.data?.data?.cards)

   }   
     
   
  
   
//   Conditional Rendering. 
if(onlineStatus === false){
   return(<h1>please Check your internet connection!</h1>)
}  
   
    
   if(restaurantList.length === 0){
      return <Shimmer/>
   } 

   
 //  console.log(restaurantList)
  // setFilteredRestaurant(restaurantList);
  
 
    return (
       <div className="body">
          <div className="search-element">


            <button className="filter-btn" onClick={() => {
              const filteredList = restaurantList.filter((Restaurant) => (
                  Restaurant.data.avgRating >= 4
               ))
               setFilteredRestaurant(filteredList);
            }}>Top Rated Restaurant</button>


            <input type="text" id="search-input" value={searchText} onChange={(e) => {setSearchText(e.target.value)}}></input>
            <button className="search-btn" onClick={() => {
               const searchedRestaurant = restaurantList.filter((res)=> {
                 return res.data.name.toLowerCase().includes(searchText.toLowerCase())
               }) 
               setFilteredRestaurant(searchedRestaurant) 
               }}>Search</button>
          </div>
          
          <div className="restruant-container">
           {
             
             filteredRestaurant?.map((Restaurant) => (
               <RestruantCard key = {Restaurant.data.id} resdata = {Restaurant} />
            ))

           }
           
          </div>
       </div>
    )
 }

 export default Body