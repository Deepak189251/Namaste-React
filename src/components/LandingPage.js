import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot, faAngleDown, faAngleUp, faLocationArrow  } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import Body from "./body"
import { data } from "../utils/List"
import { options } from "../utils/constant"
import { useDispatch } from "react-redux"
import { addUserLocation } from "../utils/userSlice"
const LandingPage = () => {

    const [show, setShow] = useState(false)
    const [refresh, setRefresh] = useState(false)
    const [search, setSearch] = useState("")
    const [result, setResult] = useState("")
    const dispatch = useDispatch()

    const userLoc = JSON.parse(localStorage.getItem("userLocation"))
    dispatch(addUserLocation(userLoc))

    function locationSuccess (position) {
       // console.log(position?.coords?.longitude)
        const location = {"long": position?.coords?.longitude, "lat": position?.coords?.latitude}
        localStorage.setItem("userLocation", JSON.stringify(location))
        dispatch(addUserLocation(location))
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
    //const location = localStorage.getItem("userLocation")
    useEffect(() => {

    }, [refresh])

    if(!localStorage?.getItem("userCart")) {
        localStorage?.setItem("userCart", "[]")
       
      }
      
 

    

    const getCitydata = async (city) => {
        try{
            const data = await fetch("https://api.api-ninjas.com/v1/geocoding?city="+ city +"&country=India", options)
            const json = await data.json()
            const location = {"long": json[0]?.longitude, "lat": json[0]?.latitude}
            localStorage.setItem("userLocation", JSON.stringify(location))
            setRefresh(!refresh)
            console.log(json)
        }
        catch (err){
            console.log(err)
        }
    }

    let filteredCities

    if(search.length >= 2){
         filteredCities = data.filter((city) => {
            return search.toLowerCase() === ""
            ? city
            : city.toLowerCase().includes(search.toLowerCase())
        })
        console.log(filteredCities.slice(0, 8))
    }
   /* const filteredCities = data.filter((city) => {
        return search.toLowerCase() === ""
        ? city
        : city.toLowerCase().includes(search)
    })
    console.log(filteredCities.slice(0, 8))*/

   /*const filterCity = () => {
       const filteredCities = data.filter((city) => {
            return search.toLowerCase() === ""
            ? city
            : city.toLowerCase().includes(search)
        })
        console.log(filteredCities.slice(0, 8))

        console.log(search)
       
    }*/

     const selectCity = (city) => {
        console.log(city)
        setSearch(city)
        setShow(false)
        getCitydata(city)
     }
    

    
    return( userLoc?.long ? <Body /> : 
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
                        
                        <input type="text" value={search} onChange={(e) => {setSearch(e.target.value), e.target.value.length >=2 ? setShow(true) : setShow(false)}} className=" border-none outline-none w-[195px] h-[35px] mt-[5px] mr-[10px]" placeholder="Enter your delivery location" />
                        
                        <div onClick={() => {setShow(!show)}}>
                           {show ? <FontAwesomeIcon className=" w-[25px] h-[20px] mt-[13px]" icon={faAngleUp}  /> : <FontAwesomeIcon className=" w-[25px] h-[20px] mt-[13px]" icon={faAngleDown}  />} 
                        </div>

                        {show && 
                            <div className=" absolute top-[340px] bg-white max-h-[300px] overflow-y-auto rounded-md" >
                                <div className=" flex  w-[260px] h-[40px] rounded-lg cursor-pointer" onClick={getUserLocation}>

                                    <FontAwesomeIcon className=" w-[25px] h-[20px] m-[10px]" icon={faLocationArrow} color="orange" />

                                    <p className=" h-[25px] mt-[6px] font-bold text-orange-600">Use my current location</p>
                                </div>

                                <hr/>
                                <div className="mt-[5px]">
                                    

                                    {filteredCities?.slice(0, 8)?.map((city) => 
                                    <div className=" flex" onClick={() => selectCity(city)}>
                                        <FontAwesomeIcon className=" w-[25px] h-[20px] m-[10px]" icon={faLocationArrow} color="black" />
                                        <p className=" cursor-pointer m-[8px]">{city}</p>

                                    </div>)}
                                </div>

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