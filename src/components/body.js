import RestruantCard from "./RestaurantCard"
import Data from "../utils/mockData"

const Body = () => {
    return (
       <div className="body">
          <div className="search">Search</div>
          <div className="restruant-container">
           {
              Data.cards.map((Restaurant) => (
                <RestruantCard key = {Restaurant.data.id} resdata = {Restaurant} />
             ))
           }
           
          </div>
       </div>
    )
 }

 export default Body