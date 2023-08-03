import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
//import About from "./components/About";
import ContactUs from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurnatMenu";
import Shimmer from "./components/Shimmer";
const Applayout = () => {
   return (
      <div className="app">
        <Header/>
        <Outlet/>
      </div>
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
            element: <Body/>
         },

         {
            path: "/about",
            element:<Suspense fallback={<Shimmer/>}> <About/> </Suspense>
         },
         {
            path: "/contactus",
            element: <ContactUs/>
         },
         {
            path: "/restaurants/:resId",
            element: <RestaurantMenu/>
         }
      ]              
   }
  
])

const root = ReactDOM.createRoot(document.getElementById(`root`));

root.render(<RouterProvider router={AppRouter}/>); 
