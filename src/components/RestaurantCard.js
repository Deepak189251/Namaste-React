import { restaurantLogoUrl } from "../utils/constant"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar, faCircle } from "@fortawesome/free-solid-svg-icons"

const RestruantCard = (props) => {
   console.log(props)
   console.log(restaurantLogoUrl)
    const {name, cuisines, avgRating, sla, cloudinaryImageId, id, areaName} = props.resdata.info
    const cuisine = cuisines.join(", ")
   
    return (
       <div className="restruant-card xl:m-3 lg:m-[12px] md:m-[10px] sm:m-[7px] m-[5px] xl:p-3 lg:p-[14px] md:p-[10px] sm:p-[7px] p-[5px] xl:w-[230px] lg:w-[221px] md:w-[175px] sm:w-[152px] w-[145px]  h-auto hover:scale-90 hover:transition delay-[150] duration-200 ease-in-out" ><Link className="res-details" to={`/restaurants/${id}`}>
          <img alt="restruant_logo " className=" rounded-lg w-[206px] lg:h-[180px] md:h-[160px] sm:h-[140px] h-[130px] " src={restaurantLogoUrl + cloudinaryImageId}/>
          <h4 className="md:font-bold font-semibold py-1 lg:text-base text-sm">{name.length > 20 ? name.slice(0, 20) + "..." : name}</h4>
          <div className="flex">
            <h5 className=" md:text-sm text-xs font-medium mr-[5px]"> <FontAwesomeIcon icon={faStar} style={{color: "green"}}/>{" " + avgRating}</h5>
            <FontAwesomeIcon className=" w-[3px] h-[3px] md:mt-[9px] mt-[7px] mr-[5px]" icon={faCircle} color="black" />
            <p className=" md:text-sm text-xs font-medium" >{sla?.slaString}</p>
          </div>
          <h5 className=" text-gray-600 md:text-sm text-xs mt-[3px] font-medium">{cuisine.length > 23 ? cuisine.slice(0, 23) + "..." : cuisine}</h5>
          <h5 className=" text-gray-600 md:text-sm text-xs mt-[3px] font-medium">{areaName}</h5>
          </Link>
       </div> 
    )  
 } 

          
 export const promotedRestaurant = (RestruantCard) => {
   return (props) => {
      return(
         <>
         <label></label>
         <RestruantCard resdata={props}></RestruantCard>
         </>
      )
   }
 }
    
 export default RestruantCard

 