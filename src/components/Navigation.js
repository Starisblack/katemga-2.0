import React from "react";
import "../navigation.css";
import { Routes, Route, Link } from "react-router-dom";
import Homepage from "./Homepage";
import RealEstate from "./RealEstate";
import CarsTrucks from "./CarsTrucks";
import Electronics from "./Electronics";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";


function Navigation() {
  return (
    <div>
      <nav className="nav-bar">
        <div className="logo-wrap">
          <Link to="/homepage" className="logo">
            <h2 className="logo">KATEMGA</h2>
            <p className="slogan">Buy | Sell | Rent</p>
          </Link>
        </div>
        <div className="navbar-container">
          <Link to="/real-estate" className="nav-link">
            REAL ESTATE
          </Link>
          <Link to="/cars-trucks" className="nav-link">
            CARS/TRUCKS
          </Link>
          <Link to="/electronics" className="nav-link">
            ELECTRONICS
          </Link>
          <Link to="/about-us" className="nav-link">
            ABOUT US
          </Link>
          <Link to="/contact-us" className="nav-link">
            CONTACT US
          </Link>
        </div>
      </nav>

      <Routes>
        <Route path="/homepage" element={<Homepage />}></Route>
        <Route path="/real-estate" element={<RealEstate />}></Route>
        <Route path="/cars-trucks" element={<CarsTrucks />}></Route>
        <Route path="/electronics" element={<Electronics />}></Route>
        <Route path="/about-us" element={<AboutUs />}></Route>
        <Route path="/contact-us" element={<ContactUs />}></Route>
      </Routes>
    </div>
  );
}

export default Navigation;