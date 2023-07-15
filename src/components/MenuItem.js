import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { restaurantLogoUrl } from "../utils/constant";
import { faCircle, faSquareCaretUp } from "@fortawesome/free-solid-svg-icons";
const MenuItem = (props) => {
 
 const {name, imageId, price, ratings, description, defaultPrice, itemAttribute} = props.response
 console.log(itemAttribute)
 let productIcon 
   if(itemAttribute.vegClassifier === "VEG"){
      productIcon = <FontAwesomeIcon icon={faCircle} style={{color: "green"}}/>
   }
   else{
      productIcon = <FontAwesomeIcon icon={faSquareCaretUp} style={{color: "red"}}/>
   }
    return(
  /*  <div className="menu-container">
        <div className="recommended-section">
             <div className="heading">
                <h5>heading</h5>
             </div>
             <div>
                <span>+</span>
             </div>
             <div className="menu-products">
                <p>answers</p>
             </div>
        </div>
    </div> */

 <>
  <div className="product-info">
    <div className="product-header">
      <p>{productIcon}</p>
     <h6 className="product-name">{name}</h6>
     <p className="product-price"> &#8377;{price?  price/100 :  defaultPrice/100}</p>
     <p className="product-desc">{description}</p>
    </div>
    <div className="product-imgdiv">
    <img className="product-img" alt="product_image" src={restaurantLogoUrl + imageId}/>
    </div>
   </div>
   <hr></hr>
   </>
   )
}


export default MenuItem