import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { restaurantLogoUrl, foodImgPlaceholder } from "../utils/constant";
import { faCircle, faMinus, faPlus, faSquareCaretUp, faTrash } from "@fortawesome/free-solid-svg-icons";
//import { useContext, useState } from "react";
//import { CartData } from "../utils/Context";
import { CartState } from "../utils/Context";
import { useDispatch, useSelector } from "react-redux";
import { addInCart, increaseQty, decreaseQty } from "../utils/userSlice";
//import Cart from "./Cart";
import { useEffect, useState } from "react";
import DiffRestaurant from "./DiffRestaurant";

const MenuItems = (props) => {
   const {name, imageId, price, description, defaultPrice, isVeg, id} = props.response
   const dispatchnow = useDispatch()
   const [refresh, setRefresh] = useState()
   const [show, setShow] = useState(false)
   const resid = props.id
   const resName = props.resname
   console.log(description)
   let cleanedDescription
   description ? description?.search(/\xa0/) !== -1 ? cleanedDescription = description.replace(/\xa0/g, ' ') : cleanedDescription = description : cleanedDescription = " "
   
   //console.log(cleanedDescription)
   
   //const eligible = useSelector(store => store.user.cartItem)
   //const [eligible, setEligible] = useState()
   //const [quantity, setQuantity] = useState()
   //const cart = JSON.parse(localStorage.getItem("userCart"))

   const cart = useSelector(store => store.user.userCart)
  //let [quantity, setquantity] = useState(1)
   //let quantity = 1
   //const {state : {cart}, dispatch} = CartState();
 // const cart = useSelector(store => store.user.userCart)

   /*if(cart[0]?.restaurant === resid) {
      setEligible(true)
   }
   else{
      setEligible(false)
   }*/

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
   const differentRestaurant = () => {
      //console.log("different restaurant used.")
      setShow(true)
   }
   const addToCart = () => {
   
      dispatchnow(addInCart({id: id, data: props.response, qty: 1, restaurant: resid, resName: resName}))
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
      if(cart?.length > 0 && cart[0]?.restaurant !== resid){
         console.log(resid)
         differentRestaurant()
      }
      else{
         addToCart()
      }
      
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

   //console.log(typeof cart)
  
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
  <div className="product-info flex justify-between h-auto mb-3 mt-3  ">
    <div className="product-header text-left ">
      <p>{productIcon}</p>
      <h6 className="product-name md:text-base text-sm mb-[3px] md:font-bold font-semibold">{name}</h6>
      <p className="product-price pb-[10px] text-sm font-normal"> &#8377;{price?  price/100 :  defaultPrice/100}</p>
      <h6 className="product-desc pr-2 text-xs font-medium">{cleanedDescription}</h6>
    </div>
  <div className=" h-[100%]  ">
      
      {show && <DiffRestaurant close={setShow} show={show} data={[{id: id, data: props.response, qty: 1, restaurant: resid, resName: resName}]} />}
      <div className="product-imgdiv md:w-[125px] w-[108px] md:h-[110px] h-[96px] mt-[12px] ml-[35px] relative">
        <img className={`product-img w-[100%] h-[100%] rounded-md ${props?.status?.opened ? 'filter-none' : 'filter grayscale'}`} src={imageId ? restaurantLogoUrl + imageId : foodImgPlaceholder}/>
        
        {props?.status?.opened
         
         &&
        <div >
         
         
         {cart?.some(p => p?.id === id) ? 
        (<div className=" bg-white rounded-md text-center shadow-md absolute bottom-[-6px] md:right-[16px] right-[10px] w-[88px] text-green-600 font-medium  flex justify-between text-sm " onClick={handleQuantity}>
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

       ( <div className="  bg-white rounded-md  text-center shadow-md absolute bottom-[-6px] md:right-[16px] right-[10px]  w-[88px] text-green-600 font-medium text-xs cursor-pointer " onClick={handleCart}>
            <div className="hover:bg-gray-300 rounded-md">
               <p className=" py-[7px]">ADD</p>
            </div>
       </div>)
      
       }
      
        </div>
      }
       
        {/*console.log(cart)*/}
      </div>
      <div >
        
      </div>
    </div>
   </div>
   <hr className=" "></hr>
   </>
   )
}


export default MenuItems