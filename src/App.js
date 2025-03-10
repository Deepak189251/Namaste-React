import React, {lazy, Suspense, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
//import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurnatMenu";
import Shimmer from "./components/Shimmer";
import Cart from "./components/Cart";
import CartContext from "./utils/Context";
//import TotalPriceContext from "./utils/PriceContext";
import LandingPage from "./components/LandingPage";
import { Provider } from "react-redux";
import store from "./utils/Store";
import Search from "./components/Search";
import DishInfo from "./components/DishInfo";
const Applayout = () => {
  // const [cart, setCart] = useState([])
  
   return (
      <Provider store={store} >
         <CartContext>
            <div className="app">
               <Header/>
               <Outlet/>
            </div>
         </CartContext> 
     </Provider> 
   )
}

const About = lazy(() => import("./components/About"))

const AppRouter = createBrowserRouter([
   {
      path: "/",
      element: <Applayout/>,
      errorElement: <Error/>,
      children: [
         {
            path: "/",
            element: <LandingPage />
         },
         {
            path: "/about",
            element:<Suspense fallback={<Shimmer/>}> <About/> </Suspense>
         },
         {
            path: "/contactus",
            element: <Contact/>
         },
         {
            path: "/cart",
            element: <Cart/>
         },
         {
            path: "/restaurants/:resId",
            element: <RestaurantMenu/>
         },
         {
            path: "/dishes/:dishId",
            element: <DishInfo />
         },
         {
            path: "/search",
            element: <Search />
         }
         
      ]              
   }
  
])

const root = ReactDOM.createRoot(document.getElementById(`root`));

root.render(<RouterProvider router={AppRouter}/>); 
