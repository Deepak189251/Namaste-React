
import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById(`root`));

const HeaderComponent = () => (
   <header className="navbar bg-body-tertiary">
     <div className="container-fluid">
        <a className="navbar-brand" href="https://www.apple.com"> XYZ<i className="fa-brands fa-apple fa-lg"></i></a>
        <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
        <img src= "Dev/Namaste_react/image/user.png" alt="logo" />
     </div>
   </header>
);



root.render(<HeaderComponent />); 
