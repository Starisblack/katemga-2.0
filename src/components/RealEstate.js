import React, { useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase-config";
import Card from "./Card"
import { HalfMalf } from "react-spinner-animated";
import 'react-spinner-animated/dist/index.css'

function RealEstate() {
  const [realEstatePostsLists, setRealEstatePostsLists] = useState([]);
  const realEstatePostsCollectionRef = collection(db, "realEstatePosts");
  const [loadingData, setLoading]= useState(true);

  //display all posts in the homepage
  useEffect(() => {
    
    const getRealEstatePosts = async () => {
      const data = await getDocs(realEstatePostsCollectionRef);
      console.log(data)
      setRealEstatePostsLists(
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
      setLoading(false);
    };
    getRealEstatePosts();
   
  }, []);



  return (
    <div className="realEstate ">
      <h1>All listing displays here</h1>

     { loadingData ? <HalfMalf  text={"Loading..."} center={false} /> : <Card   details={realEstatePostsLists}/>}
     

      
    </div>
  );
}

export default RealEstate;