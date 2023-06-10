import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import About from "./components/About";
import ContactUs from "./components/Contact";
import Error from "./components/Error";
const Applayout = () => {
   return (
      <div className="app">
        <Header/>
        <Outlet/>
      </div>
   )
}

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
            element: <About/>
         },
         {
            path: "/contactus",
            element: <ContactUs/>
         }
      ]
   }
  
])

const root = ReactDOM.createRoot(document.getElementById(`root`));

root.render(<RouterProvider router={AppRouter}/>); 
