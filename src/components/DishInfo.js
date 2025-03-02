import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom';
import RestruantCard from './RestaurantCard';

const DishInfo = () => {
    const {dishId} = useParams();
    const [restaurantList, setRestaurantList] = useState([])
    //console.log(dishId)
    const location = JSON.parse(localStorage.getItem("userLocation"))
    const getDishInfo = async () => {
        const data = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=${location?.lat}&lng=${location?.long}&collection=${dishId}&sortBy=&filters=&type=rcv2&offset=0&page_type=null`);
        const jsondata = await data.json()
        setRestaurantList(jsondata?.data?.cards)
        console.log(jsondata)
        

    }
    console.log(restaurantList)
    useEffect(() => {
        getDishInfo()
    }, [])
  return (
    <div className=' xl:w-[1280px] lg:w-[1010px] md:w-[790px] sm:w-[510px] w-[320px] mx-auto'>
      <div className=' sm:mx-[40px] mx-[25px] mt-[50px]'>
        <h1 className=' md:text-4xl font-bold sm:text-3xl text-2xl mb-[15px]'>{restaurantList[0]?.card?.card?.title}</h1>
        <p className=' md:text-lg sm:text-base text-sm mb-[30px]'>{restaurantList[0]?.card?.card?.description}</p>
        <h2 className=' md:text-xl sm:text-base text-sm font-bold'>{"Restaurants to explore"}</h2>
      </div>
     
      <div className=' restruant-container flex flex-wrap justify-center'>
        {restaurantList.filter((res) => res?.card?.card?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant")
          .map((res) => <RestruantCard key={res?.card?.card?.info?.id} resdata={res?.card?.card}/>)}
      </div>
    </div>
  )
}

export default DishInfo