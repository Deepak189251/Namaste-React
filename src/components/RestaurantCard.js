import { restaurantLogoUrl } from "../utils/constant"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"

const RestruantCard = (props) => {
   console.log(props)
   console.log(restaurantLogoUrl)
    const {name, cuisines, avgRating, sla, cloudinaryImageId, id, costForTwo} = props.resdata.info
   
    return (
       <div className="restruant-card m-3 p-3 w-[230px]  h-auto bg-gray-100 rounded-lg hover:bg-gray-300" ><Link className="res-details" to={`/restaurants/${id}`}>
          <img alt="restruant_logo " className=" rounded-md w-[206px] h-[180px]" src={restaurantLogoUrl + cloudinaryImageId}/>
          <h4 className="font-bold py-1 text-lg">{name}</h4>
          <h5> <FontAwesomeIcon icon={faStar} style={{color: "green"}}/>{" " + avgRating}</h5>
          <h5>{cuisines.join(", ")}</h5>
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

 