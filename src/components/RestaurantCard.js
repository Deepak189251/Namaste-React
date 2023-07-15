import { restaurantLogoUrl } from "../utils/constant"
import { Link } from "react-router-dom"

const RestruantCard = (props) => {
    const {name, cuisines, avgRating, deliveryTime, cloudinaryImageId, id} = props.resdata.data
   
    return (
       <div className="restruant-card" ><Link className="res-details" to={`/restaurants/${id}`}>
          <img alt="restruant_logo" src={restaurantLogoUrl + cloudinaryImageId}/>
          <h4>{name}</h4>
          <h5>{cuisines.join(", ")}</h5>
          <h5>{avgRating + " Stars"}</h5>
          <h5>{deliveryTime + " Mins"}</h5>
          </Link>
       </div>
    )  
 }
    
 export default RestruantCard

 