import React, { useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase-config";
import Card from "./Card";
import {Link} from "react-router-dom";

function Homepage() {
  const [realEstatePostsLists, setRealEstatePostsLists] = useState([]);
  const realEstatePostsCollectionRef = collection(db, "realEstatePosts");

  //display all posts in the homepage
  useEffect(() => {
    const getRealEstatePosts = async () => {
      const data = await getDocs(realEstatePostsCollectionRef);
      setRealEstatePostsLists(
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };
    getRealEstatePosts();
  });

  return (
    <div className="homepage">
      
      <Card data={realEstatePostsLists} />
    </div>
  );
}

export default Homepage;
