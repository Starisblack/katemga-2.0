import React, { useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase-config";
import Card from "./Card";
import { HalfMalf } from "react-spinner-animated";
import "react-spinner-animated/dist/index.css";
import { Link } from "react-router-dom";
import CreateRealEstatePost from "../CreateListings/CreateRealEstatePost";
import Axios from "axios";

function RealEstate(isAuth) {
  const [realEstatePostsLists, setRealEstatePostsLists] = useState([]);
  const realEstatePostsCollectionRef = collection(db, "realEstatePosts");
  const [loadingData, setLoading] = useState(true);

  //display all posts in the homepage

  // const getRealEstatePosts = async () => {
  //   try {
  //     const data = await getDocs(realEstatePostsCollectionRef);
  //     console.log(data);
  //     setRealEstatePostsLists(
  //       data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
  //     );
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
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

  // setLoading(false);

  return (
    <div className="realEstate-page">
      <Card data={realEstatePostsLists} />
    </div>
  );
}

export default RealEstate;
