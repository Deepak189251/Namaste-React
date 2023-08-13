import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import MenuSection from "./MenuSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faClock, faIndianRupee } from "@fortawesome/free-solid-svg-icons";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import FilterSwitch from "./FilterSwitch";
const RestaurantMenu = () => {
   

  const [vegFilter, setVegFilter] = useState(false);
  /*  const [resInfo, setResInfo] = useState(null)
    const [menu, setMenu] = useState([]) */
    
    
    const {resId} = useParams();
   // console.log(resId)

   const [show, setShow] = useState(true);
   const [showIndex, setShowIndex] = useState(null)

   const changeShow = (index, shown)=> {
    setShowIndex(index)
    setShow(!shown)
  }

 /*   useEffect(() => {
       fetchInfo();
    }, []);
   */ 
    
   /*  const fetchInfo = async () => {
        // It is swiggy's original Api used in this app
        const data = await fetch(menuApi + resId);
      
        const resdata = await data.json()
      console.log(resdata)
        

       setResInfo(resdata?.data?.cards[0]?.card?.card?.info) ;
       setMenu(resdata?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
       
    }
    */

    // This useRestaurantMenu is a custom Hook, it takes resId as argument and by using that with api it gets the data; 
  
   
   



    const {resInfo} = useRestaurantMenu(resId)
   // let filteredSection = []
   // console.log(typeof menu)


  //  console.log(resInfo)
  //  console.log(menu)
    if(resInfo === null){
        return <Shimmer />
    }



    const {name, cuisines, areaName, avgRatingString, totalRatingsString, costForTwoMessage} = resInfo.data?.cards[0]?.card?.card?.info

    const {lastMileTravelString, slaString} = resInfo.data?.cards[0]?.card?.card?.info?.sla

    const filteredSection = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(res=> {

      return res?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    })

    console.log(filteredSection)


    const vegFilterRestaurants = () => {
      
    }

   // console.log(vegFilter)

    return(
        <div className="res-menu w-[720px] text-left mx-auto mt-[55px]">
          <div className="menu-header flex justify-between pb-4"> 
            <div className="header-details"> 
              <h4 className="font-bold mb-2 text-lg">{name}</h4>
              <p className=" text-xs">{cuisines.join(", ")}</p>
              <p className=" text-xs"><span>{areaName}</span>, <span>{lastMileTravelString}</span></p>
            </div>
            <div className="rating-info shadow-md rounded-md pt-[10px]">
                <div className="avg-rating text-center pb-1">
                <span className="rating-icon"><FontAwesomeIcon icon={faStar} style={{color: "green"}}/></span>
                <span className="rating p-1 text-green-500">{avgRatingString}</span>
                </div>
                <hr className="rating-hr w-[80%] m-auto"></hr>
                <p className="total-rating font text-xs pt-1">{totalRatingsString}</p>
                
            </div>
          </div>
          <hr></hr>
          <div className="additional-info mt-4 mb-4">
            <span className="delivery-time text-sm">{<FontAwesomeIcon icon={faClock}/>}{"  " + slaString}</span>
            <span className="offer ml-5">{<FontAwesomeIcon icon={faIndianRupee}/>}{"  " + costForTwoMessage}</span>
          </div>
          <div className=" mb-4 mt-3">
            <span className="mr-3 text-sm font-semibold">Veg Only</span>
            <FilterSwitch isToggled={vegFilter} onToggle={() => {setVegFilter(!vegFilter)}}></FilterSwitch>
          </div>
          
          <hr></hr>
         { /* {menu = menu.filter((res) => {
            return res.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
          })}
        {console.log(typeof filteredSection)} */ }
          {filteredSection.map((res, index) => {
                return <MenuSection 
                key={index}
                no={index}
                response = {res?.card?.card} 
                show = {index === showIndex ? show : false}
                filter = {vegFilter}
                showItems= {changeShow}/>
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