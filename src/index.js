import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Singlepage from "./components/Singlepage";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/real-estate/:postName" element={<Singlepage />} />
        
        <Route path="/" exact element={<App />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
