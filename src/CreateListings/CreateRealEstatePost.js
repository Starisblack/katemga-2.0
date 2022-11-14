import { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../firebase-config";
import { useNavigate } from "react-router-dom";

function CreateRealEstatePost({ isAuth }) {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");

  //create a listing function
  const realEstatePostsCollectionRef = collection(db, "realEstatePosts");
  let navigate = useNavigate();
  const createRealEstatePost = async () => {
    await addDoc(realEstatePostsCollectionRef, {
      title,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
      location,
      price,
      phone,
      description,
    });
    navigate("/homepage"); //redirect to the hp after listing is created
  };

  //check if user isn't authenticated then redirect to login page
  // useEffect(() => {
  //   console.log("login effect called");
  //   if (!isAuth) {
  //     navigate("/login");
  //   }
  // }, [isAuth, navigate]);

  return (
    <div className="createPostPage">
      <div className="cpContainer">
        <h1 class="post-header">List a House | Land</h1>

        <div className="inputGp">
          <label>Title</label>
          <input
            autoFocus
            type="text"
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>

        <div className="inputGp">
          <label>Location</label>
          <input
            type="text"
            onChange={(event) => {
              setLocation(event.target.value);
            }}
          />
        </div>

        <div className="inputGp">
          <label>Price</label>
          <input
            type="number"
            onChange={(event) => {
              setPrice(event.target.value);
            }}
          />
        </div>

        <div className="inputGp">
          <label>Phone Number</label>
          <input
            type="number"
            onChange={(event) => {
              setPhone(event.target.value);
            }}
          />
        </div>

        <div className="inputGp">
          <label>Description </label>
          <textarea
            type="text"
            rows="10"
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          ></textarea>
        </div>

        <button class="btn" type="submit" onClick={createRealEstatePost}>
          Publish
        </button>
      </div>
    </div>
  );
}

export default CreateRealEstatePost;
