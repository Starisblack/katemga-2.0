import React, { useState } from "react";
import "../navigation.css";
import { Routes, Route, Link } from "react-router-dom";
import RealEstate from "./RealEstate";
import CarsTrucks from "./CarsTrucks";
import Electronics from "./Electronics";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import CreateRealEstatePost from "../CreateListings/CreateRealEstatePost";
import Login from "./Login";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase-config";
import MyListings from "./MyListings";
import CreateElectronicListing from "../CreateListings/CreateElectronicListing";
function Navigation() {
  const [isAuth, setIsAuth] = useState(false);
  let navigate = useNavigate();

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/");
    });
  };
  return (
    <div>
      <nav className="nav-bar">
        <div className="logo-wrap">
          <Link to="/" className="logo">
            <h3 className="logo">katemga</h3>
            <p className="slogan">Buy | Sell | Rent</p>
          </Link>
        </div>
        <div className="navbar-container">
          {!isAuth ? (
            <Link to="/login" className="nav-link">
              Login
            </Link>
          ) : (
            <>
              <Link className="nav-link" onClick={signUserOut}>
                Log Out
              </Link>
              <Link to="/mylistings" className="nav-link">
                My Listings
              </Link>
            </>
          )}
          <Link to="/real-estate" className="nav-link">
            Real Estate
          </Link>
          <Link to="/cars-trucks" className="nav-link">
            Cars/Trucks
          </Link>
          <Link to="/electronics" className="nav-link">
            Electronics
          </Link>
          {/* <Link to="/about-us" className="nav-link">
            About
          </Link> */}
          <Link to="/contact-us" className="nav-link">
            Contact
          </Link>
        </div>
      </nav>

      <Routes>
        <Route path="/real-estate" element={<RealEstate />}></Route>
        <Route path="/cars-trucks" element={<CarsTrucks />}></Route>
        <Route path="/electronics" element={<Electronics />}></Route>
        <Route path="/about-us" element={<AboutUs />}></Route>
        <Route path="/contact-us" element={<ContactUs />}></Route>
        <Route
          path="/createrealestatepost"
          element={<CreateRealEstatePost />}
        ></Route>
        <Route
          path="/createelectroniclisting"
          element={<CreateElectronicListing />}
        ></Route>
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />}></Route>
        <Route path="/mylistings" element={<MyListings />}></Route>
      </Routes>
    </div>
  );
}

export default Navigation;
