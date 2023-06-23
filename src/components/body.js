import RestruantCard from "./RestaurantCard"
import Shimmer from "./Shimmer"
import { useState, useEffect } from "react"


const Body = () => {
   const [restaurantList, setRestaurantList] = useState([])

   const [filteredRestaurant, setFilteredRestaurant] = useState([])

   const [searchText, setSearchText] = useState("")
  
   useEffect(() => {
      fetchData()
      
   },[]);



       
   const fetchData = async () => {
       const data = await fetch("https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.462521&lng=85.8829895&page_type=DESKTOP_WEB_LISTING");
       const jsondata = await data.json()
       
       setRestaurantList(jsondata?.data?.cards[2]?.data?.data?.cards)
       setFilteredRestaurant(jsondata?.data?.cards[2]?.data?.data?.cards)

   }  
 
   
//   Conditional Rendering. 
    
   if(restaurantList.length === 0){
      return <Shimmer/>
   } 
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