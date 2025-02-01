
export const headerLogoUrl = "https://images-workbench.99static.com/uNN5i13HsdTZqMFxxZ96TF1vPXY=/99designs-contests-attachments/118/118612/attachment_118612943"

export const restaurantLogoUrl = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"

//export const menuApi = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.385044&lng=78.486671&restaurantId=`

export const menuApi = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=20.319436&lng=85.829222&restaurantId=`


export const foodImgPlaceholder = "https://thumbs.dreamstime.com/b/healthy-food-background-salad-ingredients-various-dressing-blank-plate-top-view-diet-eating-vegetarian-vegan-84723079.jpg"

/*
Api for Home location Restaurant Menu 

https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=20.462521&lng=85.8829895&restaurantId=


 Api for Hydrabad location Restaurant Menu

https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.385044&lng=78.486671&restaurantId=




`https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=20.462521&lng=85.8829895&restaurantId=${resId}&submitAction=ENTER`
   

 Api for Hydrabad location Restaurantlist

  https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING


  Api for my home address Restaurantlist

  https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.46641779418709&lng=85.87408971885445&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING
*/


//export const api = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"

export const search = "https://www.swiggy.com/dapi/restaurants/search/v3?lat=20.462521&lng=85.8829895&str=DFC&trackingId=null&submitAction=ENTER&queryUniqueId=d7a0c9b2-11f7-7318-5981-c71d9ee3e0c3"

export const options = {
  method: "get",
  headers: {
    'X-Api-Key': process.env.REACT_APP_GEOCODING_KEY
  }
}