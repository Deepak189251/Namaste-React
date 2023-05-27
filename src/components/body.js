import RestruantCard from "./RestaurantCard"
import Data from "../utils/mockData"
import { useState } from "react"


const Body = () => {
   let filteredRestaurant = [
          { 
         "id": "356967",
         "name": "Green Park Restaurant",
         
         "area": "Ranihat Colony",
         
         "cloudinaryImageId": "xwxj2kp7gk2ldyho0mwg",
         "cuisines": [
         "Street Food",
         "Indian",
         "Biryani"
         ],
         "costForTwo": 20000,
         "deliveryTime": 27,
         "city": "cuttack",
         "deliveryTime": 27,
         "avgRating": "3.9",
         },
         { 
            "id": "356968",
            "name": "Biriyani Box",
            
            "area": "Buxi Bazar",
            
            "cloudinaryImageId": "pfh6vbbujb4jnowbi6vx",
            "cuisines": [
               "Biryani",
               "Kebabs",
               "Desserts",
               "Indian"
               ],
            "costForTwo": 20000,
            "deliveryTime": 27,
            "city": "cuttack",
            "deliveryTime": 27,
            "avgRating": "4.0",
         },
         { 
            "id": "356969",
            "name": "KFC",
            
            "area": "Badambadi",
            
            "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
            "cuisines": [
               "Burgers",
               "Biryani",
               "American",
               "Snacks",
               "Fast Food"
               ],
            "costForTwo": 20000,
            "deliveryTime": 27,
            "city": "cuttack",
            "deliveryTime": 27,
            "avgRating": "4.2",
         }
]
console.log(filteredRestaurant)
    return (
       <div className="body">
          <div className="search-element">
            <input type="text" id="search-input"></input>
            <button className="search-btn">Search</button>
          </div>
          <div className="filtered-restaurant">
            <button className="filter-btn" onClick={() => {
               filteredRestaurant = filteredRestaurant.filter((Restaurant) => (
                  Restaurant.avgRating >= 4
               ))
               console.log(filteredRestaurant)
            }}>Top Rated Restaurant</button>
          </div>
          <div className="restruant-container">
           {
             /* Data.cards.map((Restaurant) => (
                <RestruantCard key = {Restaurant.data.id} resdata = {Restaurant} />
             )) */

             filteredRestaurant?.map((Restaurant) => (
               <RestruantCard key = {Restaurant.id} resdata = {Restaurant} />
            ))

           }
           
          </div>
       </div>
    )
 }

 export default Body