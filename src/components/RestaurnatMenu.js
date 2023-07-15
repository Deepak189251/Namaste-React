import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import MenuSection from "./MenuSection";
import { menuApi } from "../utils/constant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faClock, faIndianRupee } from "@fortawesome/free-solid-svg-icons";

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
          <div className="menu-header"> 
            <div className="header-details"> 
              <h4>{resInfo.name}</h4>
              <p>{resInfo.cuisines.join(", ")}</p>
              <p><span>{resInfo.areaName}</span>, <span>{resInfo.sla.lastMileTravelString}</span></p>
            </div>
            <div className="rating-info">
                <div className="avg-rating">
                <span className="rating-icon"><FontAwesomeIcon icon={faStar} style={{color: "green"}}/></span>
                <span className="rating">{resInfo.avgRatingString}</span>
                </div>
                <hr className="rating-hr"></hr>
                <p className="total-rating">{resInfo.totalRatingsString}</p>
                
            </div>
          </div>
          <hr></hr>
          <div className="additional-info">
            <span className="delivery-time">{<FontAwesomeIcon icon={faClock}/>}{"  " + resInfo.sla.slaString}</span>
            <span className="offer">{<FontAwesomeIcon icon={faIndianRupee}/>}{"  " + resInfo.costForTwoMessage}</span>
          </div>
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