import React, { useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase-config";
import Card from "./Card";
import {Link} from "react-router-dom";
import Axios from "axios"

function Homepage() {
  const [realEstatePostsLists, setRealEstatePostsLists] = useState([]);

  //display all posts in the homepage
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
    <div className="homepage">
      
      <Card data={realEstatePostsLists} />
    </div>
  );
}

export default Homepage;
