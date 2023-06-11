import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
const RestaurantMenu = () => {
   
    const [resInfo, setResInfo] = useState(null)
    const {resId} = useParams();
   // console.log(resId)

    useEffect(() => {
       fetchInfo();
    }, []);
    
    
    const fetchInfo = async () => {
        const data = await fetch(`https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=20.462521&lng=85.8829895&restaurantId=${resId}&submitAction=ENTER`);
      console.log(data)
        const resdata = await data.json()

       setResInfo(resdata?.data?.cards[0]?.card?.card?.info) ;
       
    }
    if(resInfo === null){
        return <Shimmer />
    }
    return(
        <div className="res-menu">
            <h1>{resInfo.name}</h1>
            <h2>{resInfo.cuisines.join(", ")}</h2>
        </div> 
    )
}

export default RestaurantMenu