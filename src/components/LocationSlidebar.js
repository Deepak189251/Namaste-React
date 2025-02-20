import React from 'react'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationCrosshairs, faX, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { data } from '../utils/List'
import { useDispatch } from 'react-redux'
import { addUserLocation } from '../utils/userSlice'
import { options } from '../utils/constant'
import { useNavigate } from 'react-router-dom'
const LocationSlidebar = ({close, show}) => {
    const [search, setSearch] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()
    function locationSuccess (position) {
       // console.log(position?.coords?.longitude)
        const location = {"long": position?.coords?.longitude, "lat": position?.coords?.latitude}
        localStorage.setItem("userLocation", JSON.stringify(location))
        dispatch(addUserLocation(location))
        //setRefresh(!refresh)
        navigate("/")
        //window.location.reload(false)
        close(!show)
    }
    function locationError (){
        console.log("There is some issue.")
    }
    const getUserLocation = async () => {
      navigator.geolocation.getCurrentPosition( locationSuccess, locationError)
    }

    const getCitydata = async (city) => {
        try{
            const data = await fetch("https://api.api-ninjas.com/v1/geocoding?city="+ city +"&country=India", options)
            const json = await data.json()
            const location = {"long": json[0]?.longitude, "lat": json[0]?.latitude}
            console.log(location)
            localStorage.setItem("userLocation", JSON.stringify(location))
            //setRefresh(!refresh)
            dispatch(addUserLocation(location))
            //console.log(json)
            navigate("/")
            close(!show)
            //window.location.reload(false)
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


    const selectCity = (city) => {
      //console.log(city)
      setSearch(city)
      //setShow(false)
      getCitydata(city)
      
    }


  useEffect(() => {
    document.body.style.overflowY = "hidden"
    return () => {
        document.body.style.overflowY = "scroll"
    }
   }, [])
  return (
    <>
      <div className="  z-[10] fixed top-0 bottom-0 left-0 right-0 bg-[rgba(189,189,189,0.9)]" onClick={() => close(!show)}></div>
      <div className="bg-white fixed md:w-[500px] sm:w-[320px] w-[235px] h-screen z-[20] left-0 md:pl-[150px] sm:pl-[60px] pl-[35px] md:pt-[30px] sm:pt-[25px] pt-[20px]">
          <div>
              <FontAwesomeIcon icon={faX} onClick={() => close(!show)} className=' cursor-pointer' />
          </div>
          <div className=' md:w-[290px] sm:w-[211px] w-[171px] md:h-[50px] sm:h-[45px] h-[39px] border-gray-500 border-1 sm:mt-[30px] mt-[25px]'>
              <input value={search} onChange={(e) => setSearch(e.target.value)} className=' border-none md:w-[200px] md:text-lg sm:text-base text-sm sm:w-[170px] w-[140px] sm:placeholder:text-base placeholder:text-sm outline-none md:mt-[10px] mt-[8px] md:ml-[30px] sm:ml-[22px] ml-[15px]' type='text' placeholder='Search for city' />
          </div>
          <div className=' mt-[30px] border-gray-500 border-1 md:w-[290px] sm:w-[211px] w-[171px] md:h-[80px] sm:h-[70px] h-[57px] sm:pt-[12px] pt-[9px] sm:pl-[10px] pl-[6px] sm:pb-[10px] pb-[7px] hover:text-orange-500 cursor-pointer flex' onClick={getUserLocation}>
              <div className='md:ml-[10px] sm:ml-[2px] ml-0 md:mr-[13px] sm:mr-[8px] mr-[5px]'>
                  <FontAwesomeIcon className=' sm:w-[20px] sm:h-[18px] w-[16px] h-[14px]' icon={faLocationCrosshairs} />
              </div>
              <div>
                  <p className=' mb-[3px] md:text-base sm:text-sm text-xs font-semibold'>{"Get current location"}</p>
                  <p className=' sm:text-[13px] text-[11px] font-normal'>{"Using GPS"}</p>
              </div>
          </div>
          <div className=' md:w-[290px] sm:w-[210px] w-[171px] sm:h-[350px] h-[260px] sm:mt-[30px] mt-[25px] border-gray-500 border-1 overflow-scroll'>
              {filteredCities?.slice(0, 10).map((city) => 
                  <div onClick={() => selectCity(city)}>
                      <div className=' sm:p-[10px] p-[7px] flex'>
                          <FontAwesomeIcon className=' md:ml-[20px] ml-[10px] mt-[4px] md:mr-[15px] mr-[8px]' icon={faLocationDot} />
                          <p className='hover:text-orange-500 sm:text-base text-sm cursor-pointer font-semibold'>{city}</p>
                      </div>
                      
                      <hr/>
                  </div>
              )}
          </div>
      </div>
    </> 
    
  )
}

export default LocationSlidebar