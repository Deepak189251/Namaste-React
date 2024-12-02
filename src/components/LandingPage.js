import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot, faAngleDown, faAngleUp, faLocationArrow  } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import Body from "./body"
const LandingPage = () => {

    const [show, setShow] = useState(false)
    const [refresh, setRefresh] = useState(false)

    function locationSuccess (position) {
       // console.log(position?.coords?.longitude)
        const location = {"long": position?.coords?.longitude, "lat": position?.coords?.latitude}
        localStorage.setItem("foodCourt", JSON.stringify(location))
        setRefresh(!refresh)
      }
  
      function locationError (){
        console.log("There is some issue.")
      }
  
    const getUserLocation = async () => {
      navigator.geolocation.getCurrentPosition( locationSuccess, locationError)
    }

   /* if(!localStorage.getItem(foodCourt)) {
        localStorage.setItem(foodCourt, "[]")

    }*/
    const location = localStorage.getItem("foodCourt")
    useEffect(() => {

    }, [refresh])

    
    return( location ? <Body /> : 
        <div className=" bg-orange-600 h-[100%]">
            <div className=" flex justify-between text-center">
                    
                
                <img className=" h-[500px] mt-[30px] mb-[65px]" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png" alt="foodimage"/>
                <div>
                    <h1 className=" text-white text-[40px] font-bold mt-[40px] mb-[40px]" >
                        Order food & groceries. Discover<br/> best restaurants.

                    </h1>
                    <div className=" flex m-auto w-[295px] bg-white rounded-lg">
                        <div>
                            <FontAwesomeIcon icon={faLocationDot} className=" w-[35px] h-[25px] m-[10px]" color="orange" />
                        </div>
                        
                        <input type="text" className=" border-none outline-none w-[195px] h-[35px] mt-[5px] mr-[10px]" placeholder="Enter your delivery location" />
                        
                        <div onClick={() => {setShow(!show)}}>
                           {show ? <FontAwesomeIcon className=" w-[25px] h-[20px] mt-[13px]" icon={faAngleUp}  /> : <FontAwesomeIcon className=" w-[25px] h-[20px] mt-[13px]" icon={faAngleDown}  />} 
                        </div>

                        {show && 
                            <div className=" flex bg-white absolute top-[340px] w-[250px] h-[40px] rounded-lg cursor-pointer" onClick={getUserLocation}>
                                <FontAwesomeIcon className=" w-[25px] h-[20px] m-[10px]" icon={faLocationArrow} color="orange" />

                                <p className=" h-[25px] mt-[6px] font-bold text-orange-600">Use my current location</p>
                            </div>
                        }
                    </div>
                </div>
                
                <img className=" h-[500px] mt-[30px] mb-[65px]" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png" alt="foodimage" />
            </div>
        </div>
    )
}

export default LandingPage