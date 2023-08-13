import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { restaurantLogoUrl } from "../utils/constant";
import { faCircle, faSquareCaretUp, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { CartData } from "../utils/Context";
//import { CartState } from "../utils/Context";

const MenuItems = (props) => {
   const {name, imageId, price, ratings, description, defaultPrice, itemAttribute, id} = props.response

   // const {state : {cart}, dispatch} = CartState();

  // console.log(cart)
   const {cart, setCart} = useContext(CartData);
  // const [click, setClick] = useState(false)

   const addToCart = () => {
    /*  dispatch({
         type: "Add",
         payload: props.response
      })*/

      setCart([...cart, props.response])
     // console.log(cart)
   }

   const removeFromCart = () =>{
    /*  dispatch({
         type:"Remove",
         payload: props.response
      })*/

      setCart(cart.filter((res) => {
         return Number(res.id) !== Number(id)
      }))

   }
 
 
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
        <div className="absolute bottom-[-6px] right-[11px] py-[7px] px-[32px] bg-white shadow-md  rounded-sm text-center cursor-pointer">
         {/*click === false ?  <button className=" w-[100%] text-green-600 font-medium text-xs" onClick={addToCart}>ADD</button> : <button className=" w-[100%] text-red-600 font-medium text-lg " onClick={removeFromCart}><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button>*/}
       {cart.some(p => p.id === id) ? 
       (<button className=" w-[100%] text-red-600 font-medium text-lg " onClick={removeFromCart}><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button>) 
         :
       ( <button className=" w-[100%] text-green-600 font-medium text-xs" onClick={addToCart}>ADD</button>)
      }
        </div>
       
        {console.log(cart)}
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