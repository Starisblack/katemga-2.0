import React, { useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase-config";
import Card from "./Card";
import { Link } from "react-router-dom";
import CreateRealEstatePost from "../CreateListings/CreateRealEstatePost";

function RealEstate(isAuth) {
  const [realEstatePostsLists, setRealEstatePostsLists] = useState([]);
  const realEstatePostsCollectionRef = collection(db, "realEstatePosts");

  //display all posts in the homepage
  useEffect(() => {
    console.log("useEffect activated");
    const getRealEstatePosts = async () => {
      const data = await getDocs(realEstatePostsCollectionRef);
      setRealEstatePostsLists(
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };
    getRealEstatePosts();
  }, []);

  console.log(realEstatePostsLists);

  return (
    <div className="realEstate-page ">
      <Link
        to="/createrealestatepost"
        className="c-listing"
        onClick={CreateRealEstatePost}
      >
        Create Listing
      </Link>
      <button type="" onClick={CreateRealEstatePost}></button>

      <Card data={realEstatePostsLists} />
    </div>
  );
}

export default RealEstate;
