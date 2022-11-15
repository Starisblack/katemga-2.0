import { useState, useEffect } from "react";
import { auth, db } from "../firebase-config";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

//mongoDb setup
const CreateRealEstatePost = () => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const addRealEstateListing = () => {
    //console.log(title)
    Axios.post("http://localhost:3001/real-estate/create", {
      title: title,
      location: location,
      price: price,
      phone: phone,
      description: description,
    });
    navigate("/");
  };

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

        <button class="btn" type="submit" onClick={addRealEstateListing}>
          Publish
        </button>
      </div>
    </div>
  );
};

export default CreateRealEstatePost;
