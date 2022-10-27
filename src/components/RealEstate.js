import React, { useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase-config";

function RealEstate() {
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
    <div className="realEstate">
      <h1>All listing displays here</h1>
      <p>
        {realEstatePostsLists.map((post) => {
          return <div className="post">{post.title}</div>;
        })}
      </p>
    </div>
  );
}

export default RealEstate;
