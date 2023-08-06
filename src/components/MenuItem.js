import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { restaurantLogoUrl } from "../utils/constant";
import { faCircle, faSquareCaretUp } from "@fortawesome/free-solid-svg-icons";
const MenuItems = (props) => {
 
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
  <div className="product-info flex justify-between mb-5 mt-3">
    <div className="product-header text-left w-[700px]">
      <p>{productIcon}</p>
     <h6 className="product-name mb-0 font-semibold">{name}</h6>
     <p className="product-price pb-[10px] text-sm font-normal"> &#8377;{price?  price/100 :  defaultPrice/100}</p>
     <p className="product-desc pr-2 text-xs font-light">{description}</p>
    </div>
    <div>
      <div className="product-imgdiv w-[110px] ml-6 relative">
        <img className="product-img w-[100%] h-24 rounded-md" src={restaurantLogoUrl + imageId}/>
        <button className=" absolute bottom-[-6px] right-[11px] py-[7px] px-[32px]  bg-white shadow-sm text-xs rounded-sm text-center text-green-600 font-medium">ADD</button>
      </div>
      <div >
        
      </div>
    </div>
   </div>
   <hr></hr>
   </>
   )
}


export default MenuItems