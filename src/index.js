import React from "react";
import ReactDOM from "react-dom/client";
import Homepage from "./components/Homepage";
import Singlepage from "./components/Singlepage";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Categories from "./components/Categories";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="viewport">
        <Navigation />
        <Routes>
          <Route path="/real-estate/:postName" element={<Singlepage />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/" exact element={<Homepage />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
