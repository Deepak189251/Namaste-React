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
            localStorage.setItem("userLocation", JSON.stringify(location))
            //setRefresh(!refresh)
            dispatch(addUserLocation(location))
            console.log(json)
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
      <div className="bg-white fixed w-[500px] h-screen z-[20] left-0 pl-[150px] pt-[30px]">
          <div>
              <FontAwesomeIcon icon={faX} onClick={() => close(!show)} className=' cursor-pointer' />
          </div>
          <div className=' w-[290px] h-[50px] border-gray-500 border-1 mt-[30px]'>
              <input value={search} onChange={(e) => setSearch(e.target.value)} className=' border-none outline-none mt-[10px] ml-[30px]' type='text' placeholder='Search for city' />
          </div>
          <div className=' mt-[30px] border-gray-500 border-1 w-[290px] h-[80px] pt-[12px] pl-[10px] pb-[10px] hover:text-orange-500 cursor-pointer flex' onClick={getUserLocation}>
              <div className='ml-[10px] mr-[13px]'>
                  <FontAwesomeIcon className=' w-[20px] h-[18px]' icon={faLocationCrosshairs} />
              </div>
              <div>
                  <p className=' mb-[3px] text-base font-semibold'>{"Get current location"}</p>
                  <p className=' text-[13px] font-normal'>{"Using GPS"}</p>
              </div>
          </div>
          <div className=' w-[290px] h-[350px] mt-[30px] border-gray-500 border-1 overflow-scroll'>
              {filteredCities?.slice(0, 10).map((city) => 
                  <div onClick={() => selectCity(city)}>
                      <div className=' p-[10px] flex'>
                          <FontAwesomeIcon className=' ml-[20px] mt-[4px] mr-[15px]' icon={faLocationDot} />
                          <p className='hover:text-orange-500 cursor-pointer font-semibold'>{city}</p>
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