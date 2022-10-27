import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase-config";
import { useNavigate } from "react-router-dom";

function CreateRealEstatePost() {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");

  const realEstatePostsCollectionRef = collection(db, "realEstatePosts");
  let navigate = useNavigate();
  const createRealEstatePost = async () => {
    await addDoc(realEstatePostsCollectionRef, {
      title,
      location,
      price,
      phone,
      description,
    });
    navigate("/homepage");
  };

  return (
    <div className="createPostPage">
      <div className="cpContainer">
        <h1 class="post-header">Post a listing</h1>

        <div className="inputGp">
          <label>Title</label>
          <input
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
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          ></textarea>
        </div>

        <button class="" type="submit" onClick={createRealEstatePost}>
          Post listing
        </button>
      </div>
    </div>
  );
}

export default CreateRealEstatePost;
