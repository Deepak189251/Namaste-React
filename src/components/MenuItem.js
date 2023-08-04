import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { restaurantLogoUrl } from "../utils/constant";
import { faCircle, faSquareCaretUp } from "@fortawesome/free-solid-svg-icons";
const MenuItem = (props) => {
 
 const {name, imageId, price, ratings, description, defaultPrice, itemAttribute} = props.response
 //console.log(itemAttribute)
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
  <div className="product-info flex justify-between">
    <div className="product-header text-left">
      <p>{productIcon}</p>
     <h6 className="product-name mb-0">{name}</h6>
     <p className="product-price pb-[10px]"> &#8377;{price?  price/100 :  defaultPrice/100} + bucks</p>
     <p className="product-desc">{description}</p>
    </div>
    <div className="product-imgdiv">
    <img className="product-img w-[120px] h-[100px] border-r-8 ml-[25px]" alt="product_image" src={restaurantLogoUrl + imageId}/>
    </div>
   </div>
   <hr></hr>
   </>
   )
}


export default MenuItem