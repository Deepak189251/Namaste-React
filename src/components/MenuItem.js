import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { restaurantLogoUrl, foodImgPlaceholder } from "../utils/constant";
import { faCircle, faMinus, faPlus, faSquareCaretUp, faTrash } from "@fortawesome/free-solid-svg-icons";
//import { useContext, useState } from "react";
//import { CartData } from "../utils/Context";
import { CartState } from "../utils/Context";
import { useDispatch, useSelector } from "react-redux";
import { addInCart, increaseQty, decreaseQty } from "../utils/userSlice";
import Cart from "./Cart";
import { useEffect, useState } from "react";

const MenuItems = (props) => {
   const {name, imageId, price, description, defaultPrice, isVeg, id} = props.response
   const dispatchnow = useDispatch()
   const [refresh, setRefresh] = useState()
   //const [quantity, setQuantity] = useState()
   //const cart = JSON.parse(localStorage.getItem("userCart"))

   const cart = useSelector(store => store.user.userCart)
  //let [quantity, setquantity] = useState(1)
   //let quantity = 1
   //const {state : {cart}, dispatch} = CartState();
 // const cart = useSelector(store => store.user.userCart)

   const index = cart?.filter((item) => item.id === id)
   
   // console.log(cart.length)
  /* if(cart) {
      setQuantity(cart.filter((item) => item.id === id))
   }
   console.log(props?.response)*/
  
   //console.log(props.response)
 //  const {cart, setCart} = useContext(CartData);
  // const [click, setClick] = useState(false)
  
   
 /* quantity = cart.map((res) => {
     res.id === id
     return quantity = quantity + 1
  }) */

 /* cart.forEach((res) => {
   if(res.id === id){
      quantity = quantity + 1
      console.log(quantity)
   }
  })*/

   const addToCart = () => {
      dispatchnow(addInCart({id: id, data: props.response, qty: 1}))
      setRefresh(!refresh)
    //  setCart([...cart, props.response])
     // quantity = quantity + 1
     // console.log(cart)
   }

   const increaseQuantity = () => {
      dispatchnow(increaseQty(id))
      setRefresh(!refresh)
   }

   const decreaseQuantity = () => {
      dispatchnow(decreaseQty(id))
      setRefresh(!refresh)
   }

   const removeFromCart = () =>{
      dispatch({
         type:"Remove",
         payload: props.response
      })

    /*  setCart(cart.filter((res) => {
         return Number(res.id) !== Number(id)
      }))*/
      //quantity = quantity - 1 
      
   }
   //const cart = useSelector(store => store?.cart)
   const handleCart =  () => {
     /* const cart = JSON.parse(localStorage.getItem("userCart"))
      if(cart.length === 0){
         cart?.push({id: id, data: props.response, qty: 1})
      }
      else{
         const res = cart.find((item) => item?.id === id)
         if(!res){
            cart?.push({id: id, data: props.response, qty: 1})
         }
         else{
            res.qty++
         }
         
      }
      localStorage.setItem("userCart", JSON.stringify(cart))
      dispatchnow(addInCart(cart))
      setRefresh(!refresh)*/

      
   }

   const handleQuantity = () => {
     /* const item = cart.filter((c) => c.id === id)
      item[0].qty++
      localStorage.setItem("userCart", [...JSON.stringify(cart), item])
      setRefresh(!refresh)
      const item = cart.findIndex((item) => item.id === id)
      console.log(item)
      setRefresh(!refresh)*/
     /* const cart = JSON.parse(localStorage.getItem("userCart"))
      const res = cart.find((item) => item?.id === id)
      if(res){
         res.qty++
      }
      localStorage.setItem("userCart", JSON.stringify(cart))
      dispatchnow(addInCart(cart))
      setRefresh(!refresh)*/
      
   }

   console.log(typeof cart)
  
 useEffect(() => {

 }, [refresh])

  
  //  let getQuantity = cart[0].qty
  //console.log(cart[0])
 // console.log(getQuantity)
 
  // console.log(product)

 //console.log(itemAttribute)
 let productIcon 
 /*  if(itemAttribute.vegClassifier === "VEG"){
      productIcon = <FontAwesomeIcon icon={faCircle} style={{color: "green"}}/>
   }
   else{
      productIcon = <FontAwesomeIcon icon={faSquareCaretUp} style={{color: "red"}}/>
   }*/
      //const check = cart.find((item) => item?.id === id)

   if(isVeg) {
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
      <p className="product-desc pr-2 text-xs font-normal">{description}</p>
    </div>
  <div>
   
      <div className="product-imgdiv w-[110px] ml-6 relative">
        <img className="product-img w-[100%] h-24 rounded-md" src={imageId ? restaurantLogoUrl + imageId : foodImgPlaceholder}/>
        <div className="   ">
         {/*click === false ?  <button className=" w-[100%] text-green-600 font-medium text-xs" onClick={addToCart}>ADD</button> : <button className=" w-[100%] text-red-600 font-medium text-lg " onClick={removeFromCart}><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button>*/}
       {/*{cart?.some(p => p.id === id) ? 
        (<div className=" w-[100%] text-red-600 font-medium text-lg " onClick={removeFromCart}><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></div>) */}
       {/* (<div className=" w-[100%] text-red-600 font-medium text-lg ">
          
           <span onClick={decreaseQuantity}>-</span>
           <span>{ }</span>
           <span onClick={increaseQuantity}>+</span>
           { }
         </div>) */}
         {cart?.some(p => p?.id === id) ? 
        (<div className=" bg-white rounded-md text-center shadow-md absolute bottom-[-6px] right-[9px] w-[88px] text-green-600 font-medium  flex justify-between text-sm " onClick={handleQuantity}>
            <div className="  cursor-pointer hover:bg-gray-300 rounded-s-md" onClick={decreaseQuantity}>
               <FontAwesomeIcon className="mx-[10px] my-[7px]" icon={faMinus} />
            </div>
            <div className=" mx-[5px] my-[4px] font-semibold">
               {index[0]?.qty}
            </div>
            <div className=" cursor-pointer hover:bg-gray-300 rounded-e-md" onClick={increaseQuantity}>
               <FontAwesomeIcon className="mx-[10px] my-[7px]" icon={faPlus} />
            </div>
        </div>)

         :

       ( <div className="  bg-white rounded-md  text-center shadow-md absolute bottom-[-6px] right-[9px]  w-[88px] text-green-600 font-medium text-xs cursor-pointer " onClick={addToCart}>
            <div className="hover:bg-gray-300 rounded-md">
               <p className=" py-[7px]">ADD</p>
            </div>
       </div>)
      
      }
       
        </div>
       
        {/*console.log(cart)*/}
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