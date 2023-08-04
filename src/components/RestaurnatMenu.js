
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import MenuSection from "./MenuSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faClock, faIndianRupee } from "@fortawesome/free-solid-svg-icons";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {
   
  /*  const [resInfo, setResInfo] = useState(null)
    const [menu, setMenu] = useState([]) */
    
    
    const {resId} = useParams();
   // console.log(resId)

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
  
    const {resInfo, menu} = useRestaurantMenu(resId)



  //  console.log(resInfo)
  //  console.log(menu)
    if(resInfo === null){
        return <Shimmer />
    }

    const {name, cuisines, areaName, avgRatingString, totalRatingsString, costForTwoMessage} = resInfo

    const {lastMileTravelString, slaString} = resInfo.sla

    return(
        <div className="res-menu w-[700px] text-left mx-auto mt-[55px]">
          <div className="menu-header flex justify-between pb-4"> 
            <div className="header-details"> 
              <h4>{name}</h4>
              <p>{cuisines.join(", ")}</p>
              <p><span>{areaName}</span>, <span>{lastMileTravelString}</span></p>
            </div>
            <div className="rating-info border-black">
                <div className="avg-rating">
                <span className="rating-icon"><FontAwesomeIcon icon={faStar} style={{color: "green"}}/></span>
                <span className="rating p-1 text-green-500">{avgRatingString}</span>
                </div>
                <hr className="rating-hr m-0"></hr>
                <p className="total-rating font text-xs">{totalRatingsString}</p>
                
            </div>
          </div>
          <hr></hr>
          <div className="additional-info mt-4">
            <span className="delivery-time">{<FontAwesomeIcon icon={faClock}/>}{"  " + slaString}</span>
            <span className="offer ml-5">{<FontAwesomeIcon icon={faIndianRupee}/>}{"  " + costForTwoMessage}</span>
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