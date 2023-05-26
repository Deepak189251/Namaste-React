import RestruantCard from "./RestaurantCard"

const Body = () => {
    console.log(data)
    return (
       <div className="body">
          <div className="search">Search</div>
          <div className="restruant-container">
           {
              data.cards.map((Restaurant) => (
                <RestruantCard key = {Restaurant.data.id} resdata = {Restaurant} />
             ))
           }
           
          </div>
       </div>
    )
 }

 export default Body