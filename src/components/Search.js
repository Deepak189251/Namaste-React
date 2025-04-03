
import {useState, useEffect, useRef} from 'react'
import SearchCard from './SearchCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faL, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux'
import { addSearchedDish, addSearchedRestaurant, addSearchedKeyword, removeSearchedDish} from '../utils/searchSlice'
import { Spinner } from './Spinner'
const Search = () => {
    const [refinedText, setRefinedText] = useState()
    const [loading, setLoading] = useState(false)
    const [refresh, setRefresh] = useState(false)
    const [hasSearched, setHasSearched] = useState(false)
    const [resultType, setResultType]  = useState()
    const text = useRef(null)
    const location = JSON.parse(localStorage.getItem("userLocation"))
    const dispatch = useDispatch()
    const searchData = async (type) => { 
        dispatch(removeSearchedDish())
        const refinedText =   /[a-zA-Z]/.test(text.current.value)
        if(!refinedText) {
          setHasSearched(false)
          return
        }
        setLoading(true)
        setHasSearched(true)
        try{
          const data = await fetch(`https://www.swiggy.com/dapi/restaurants/search/v3?lat=${location?.lat}&lng=${location?.long}&str=${text.current.value}&trackingId=null&submitAction=ENTER&queryUniqueId=6d62ef22-3c39-2e69-e3f5-a0c948eece24&selectedPLTab=${type ? 'DISH' : 'RESTAURANT'}`)
          const json = await data.json()
          //setResData(type ? json?.data?.cards[0]?.groupedCard?.cardGroupMap?.DISH : json?.data?.cards[0]?.groupedCard?.cardGroupMap?.RESTAURANT)
          type ? dispatch(addSearchedDish(json?.data?.cards[0]?.groupedCard?.cardGroupMap?.DISH) ) : dispatch(addSearchedRestaurant(json?.data?.cards[0]?.groupedCard?.cardGroupMap?.RESTAURANT))
          dispatch(addSearchedKeyword(text.current.value))
          setRefresh(!refresh)
          setResultType(type)
          console.log(refinedText) 
        }
        catch(err){

        }
        finally{
          setLoading(false)
        }
       
    }
    const searchedDish = useSelector(store => store.search.searchedDish)
    const searchedRestaurant = useSelector(store => store.search.searchedRestaurant)
    const searchedKeyword = useSelector(store => store.search.searchedKeyword)
    console.log(searchedDish, searchedRestaurant)
    const searchRestaurant = () => {
    if(!searchedRestaurant || searchedKeyword !== text.current.value){
      if(resultType){
        searchData(false)
      }
    }
    else{
      setResultType(false)
    }
  }
  
    const searchDish = () => {
      if(!searchedDish || searchedKeyword !== text.current.value){
      if(!resultType){
        searchData(true)
      }
    }
    else{
      setResultType(true)
    }
  }
    //const filteredData = resData?.cards ? resData?.cards.filter((res) => res?.card?.card?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.Dish" || res?.card?.card?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"  ) : false
    const filteredData = resultType ? searchedDish?.cards ? searchedDish?.cards.filter((res) => res?.card?.card?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.Dish") : false : searchedRestaurant?.cards ? searchedRestaurant?.cards.filter((res) => res?.card?.card?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant") : false
    useEffect(() => {
      console.log(refresh)
    }, [refresh])
    
  return (
    <div className=' pt-[30px]'>
      <div className=' lg:w-[850px] w-[720px] mr-auto ml-auto '>
      <div className=' mb-[5px]'>
        <form onSubmit={(e) => e.preventDefault()} className=' flex justify-between border-gray-400 border-1 h-[45px] rounded-md px-[15px] mb-[15px]'> 
          <input type='text' ref={text} placeholder='Search for restaurants and food' className=' border-none outline-none placeholder:text-gray-500 placeholder:font-semibold font-semibold lg:w-[600px] w-[550px]'/>
          <button type='submit' onClick={(() => searchData(false))} >
            <FontAwesomeIcon icon={faMagnifyingGlass} color='grey' className=' w-[24px] h-[20px] mt-[6px]' />
          </button>
        </form>
        <div>
          <div className=' flex '>
            <div onClick={searchRestaurant} className={`px-[10px] py-[4px] rounded-2xl border-1 mr-[10px] cursor-pointer font-semibold border-gray-400 ${!resultType && 'bg-black text-white'} `}>
              <p>{"Restaurants"}</p>
            </div>

            <div onClick={searchDish} className={` px-[10px] py-[4px] rounded-2xl border-1 mr-[10px] font-semibold cursor-pointer border-gray-400 ${resultType && 'bg-black text-white'}`}>
              <p>{"Dishes"}</p>
            </div>
          </div>
        </div>
      </div> 
       {loading ? 
         <Spinner />
        : 
        <div> 
        {hasSearched &&
         
          <div>
            {
               filteredData ? 
               <div className={` px-[15px] flex flex-wrap justify-between overflow-y-auto pt-[10px] h-[450px] ${filteredData ? "bg-gray-300 " : ' bg-inherit'} `}>
               { filteredData?.map(res => <SearchCard key={res?.id} type={resultType} data={res?.card?.card?.info} resData={resultType && res?.card?.card?.restaurant} />)}
               </div>
                
                :
                <p className=' w-[200px] mx-auto mt-[130px] font-semibold'>{`No match Found for "${text.current.value}"`}</p>  
            }
          </div>

        }
        </div>
      } 
      </div>
      
    </div>
  )
}

export default Search