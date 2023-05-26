import { restaurantLogoUrl } from "../utils/constant"

const RestruantCard = (props) => {
    console.log(props)
    const {name, cuisines, avgRating, deliveryTime, cloudinaryImageId} = props.resdata.data
 
    return (
       <div className="restruant-card">
          <img alt="restruant_logo" src={restaurantLogoUrl + cloudinaryImageId}/>
          <h4>{name}</h4>
          <h5>{cuisines.join(", ")}</h5>
          <h5>{avgRating + " Stars"}</h5>
          <h5>{deliveryTime + " Mins"}</h5>
       </div>
    )
 }
 
 export default RestruantCard