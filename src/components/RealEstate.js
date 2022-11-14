import React, { useState, useEffect } from "react";
import Card from "./Card";
import { HalfMalf } from "react-spinner-animated";
import "react-spinner-animated/dist/index.css";
import { Link } from "react-router-dom";
import Axios from "axios";

function RealEstate(isAuth) {
  const [realEstatePostsLists, setRealEstatePostsLists] = useState([]);
  const [loadingData, setLoading] = useState(true);

  useEffect(() => {
    Axios.get("http://localhost:3001/real-estate/")
      .then((res) => {
        setRealEstatePostsLists(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    console.log("Effect Called ");
  }, []);

  return (
    <div className="realEstate-page">
      <Card data={realEstatePostsLists} />
    </div>
  );
}

export default RealEstate;
