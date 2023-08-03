import { restaurantLogoUrl } from "../utils/constant"
import { Link } from "react-router-dom"

const RestruantCard = (props) => {
   console.log(props)
    const {name, cuisines, avgRating, sla, cloudinaryImageId, id, costForTwo} = props.resdata.info
   
    return (
       <div className="restruant-card m-3 p-3 w-[230px] bg-gray-100 rounded-lg hover:bg-gray-300" ><Link className="res-details" to={`/restaurants/${id}`}>
          <img alt="restruant_logo" className=" rounded-md" src={restaurantLogoUrl + cloudinaryImageId}/>
          <h4 className="font-bold py-3 text-lg">{name}</h4>
          <h5>{cuisines.join(", ")}</h5>
          <h5>{avgRating + " Stars"}</h5>
          <h5>{costForTwo}</h5>
          <h5>{sla.deliveryTime + " Mins"}</h5>
          </Link>
       </div>
    )  
 }
    
 export default RestruantCard

 