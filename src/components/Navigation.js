import React, { useState } from "react";
import "../navigation.css";
import { Routes, Route, Link } from "react-router-dom";
import Homepage from "./Homepage";
import RealEstate from "./RealEstate";
import CarsTrucks from "./CarsTrucks";
import Electronics from "./Electronics";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import CreateRealEstatePost from "../CreatePosts/CreateRealEstatePost";
import Login from "./Login";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase-config";

function Navigation() {
  const [isAuth, setIsAuth] = useState(false);
  let navigate = useNavigate();

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/homepage");
    });
  };
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
          {!isAuth ? (
            <Link to="/login" className="nav-link">
              LOGIN
            </Link>
          ) : (
            <>
              <Link to="/createrealestatepost" className="nav-link">
                Create Post
              </Link>
              <button onClick={signUserOut}>Log Out</button>
            </>
          )}
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
        <Route
          path="/real-estate"
          element={<RealEstate isAuth={isAuth} />}
        ></Route>
        <Route path="/cars-trucks" element={<CarsTrucks />}></Route>
        <Route path="/electronics" element={<Electronics />}></Route>
        <Route path="/about-us" element={<AboutUs />}></Route>
        <Route path="/contact-us" element={<ContactUs />}></Route>
        <Route
          path="/createrealestatepost"
          element={<CreateRealEstatePost isAuth={isAuth} />}
        ></Route>
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />}></Route>
      </Routes>
    </div>
  );
}

export default Navigation;
