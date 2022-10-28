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
      {realEstatePostsLists.map((post) => {
        return (
          <div className="post">
            <div className="postHeader">
              <div className="title">
                <h1
                  style={{
                    textAlign: "left",
                    paddingLeft: "20px",
                    color: "blue",
                  }}
                >
                  <span>${post.price}</span> <a href="#">{post.title}</a>
                </h1>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default RealEstate;
