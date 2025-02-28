import RestruantCard from "./RestaurantCard"
import Shimmer from "./Shimmer"
import { useState, useEffect } from "react"
import { restaurantLogoUrl } from "../utils/constant"
//import { api } from "../utils/constant"

import useOnlineStatus from "../utils/useOnlineStatus"
import { useSelector } from "react-redux"
import { useNavigate} from "react-router-dom"
//import useRestaurantList from "../utils/useRestaurantList"


const Body = () => {

   const [error, setError] = useState(null)
   const [filteredRestaurant, setFilteredRestaurant] = useState([])
   const [restaurantList, setRestaurantList] = useState([])
   const [widgetList, setWidgetList] = useState([])
   const userLoc = useSelector(store => store?.user?.userLocation)
   const onlineStatus = useOnlineStatus();
   const navigate = useNavigate()

 const check = toString.call()
   //  const restaurantList = useRestaurantList();  
   
  /*et {restaurantList, filteredRestaurant} = useRestaurantList()
   console.log(restaurantList, filteredRestaurant) */



  // const promotedRestaurant = promotedRestaurant(RestruantCard)
   
  
   useEffect(() => {
      fetchData()
      
   },[userLoc]);
   // const location = JSON.parse(localStorage.getItem("foodCourt"))
    //console.log(location)
    

   const fetchData = async () => {
       const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat="+ userLoc?.lat +"&lng="+ userLoc?.long +"&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
       const jsondata = await data.json()
       console.log(jsondata)
       if(jsondata?.data?.cards[0]?.card?.card?.type === "type.googleapis.com/swiggy.seo.widgets.v1.SwiggyNotPresent"){
         setError(jsondata?.data?.cards[0]?.card?.card)
       }
       else{
         const list = jsondata?.data?.cards.filter((card) => card?.card?.card?.gridElements?.infoWithStyle?.["@type"]=== "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle")
         console.log(list)
         setRestaurantList(list[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
         setFilteredRestaurant(list[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
         setWidgetList(jsondata?.data?.cards[0]?.card?.card)
       }
   }   
     
   
   const handleDishes = (id) => {
      navigate("/dishes/" + id)
   }
   

   

   
   

//   Conditional Rendering. 
   if(onlineStatus === false){
     return(<h1>please Check your internet connection!</h1>)
   }  
   

   
    
   if(restaurantList?.length === 0){
      return <Shimmer/>
   } 

   
   
   console.log(restaurantList)
   console.log(filteredRestaurant)
 

   
  // setFilteredRestaurant(restaurantList);
  
 
   return (
      <div className="body  xl:w-[1320px] lg:w-[990px] md:w-[780px] sm:w-[500px] w-[310px] mx-auto">
         <div className="search-element md:mx-[30px] sm:my-[30px] sm:mx-[24px] mx-[15px] my-[25px]">

           {/**  <button className="filter-btn px-4 py-2 bg-gray-200 m-4 rounded-lg" onClick={() => {
              const filteredList = restaurantList.filter((Restaurant) => (
                   Restaurant.info.avgRating >= 4
               ))
               setFilteredRestaurant(filteredList);
            }}>Top Rated Restaurant</button> 


            <input type="text" className="border border-solid border-black rounded-md" id="search-input" value={searchText} onChange={(e) => {setSearchText(e.target.value)}}></input>
            <button className="search-btn px-4 py-2  bg-green-200 m-4 rounded-lg" onClick={() => {
               const searchedRestaurant = restaurantList.filter((res)=> {
                 return res.info.name.toLowerCase().includes(searchText.toLowerCase())
               }) 
               setFilteredRestaurant(searchedRestaurant) 
              
               }}>Search</button>
               */}

               <h2 className=" md:text-2xl sm:text-xl text-lg sm:font-extrabold font-bold   mb-[15px]">{widgetList?.header?.title}</h2>
               <div className=" flex w-[100%] overflow-x-scroll ">
                  {widgetList?.gridElements?.infoWithStyle?.info?.map( res =>  <img className=" sm:m-[5px] m-[3px] md:w-[125px] md:h-[160px] sm:w-[100px] sm:h-[130px] w-[80px] h-[100px] cursor-pointer" onClick={(() => handleDishes(res?.action?.link?.slice(35, 40)))} key={res?.id}  alt="dish" src={restaurantLogoUrl + res?.imageId} />)}
               </div>
         </div>
          
         <div className="restruant-container flex flex-wrap justify-center">
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