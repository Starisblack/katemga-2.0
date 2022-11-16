import React from "react";
import ReactDOM from "react-dom/client";
import Homepage from "./components/Homepage";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Categories from "./components/Categories";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CarPage from "./components/SinglePages/CarSinglePage";
import ElectronicPage from "./components/SinglePages/ElectronicSinglePage";
import RealEstatePage from "./components/SinglePages/RealEstateSinglePage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="viewport">
        <Navigation />
        <Routes>
          <Route path="/real-estate/:postName" element={<RealEstatePage />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/" exact element={<Homepage />} />
          <Route path="/cars-trucks/:postName" element={<CarPage /> } />
          <Route path="/electronics/:postName" element={<ElectronicPage /> } />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
