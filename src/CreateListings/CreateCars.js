import { useState, useEffect } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateCars = () => {
  const [carListingData, setCarListingData] = useState({
    title: "",
    brand: "",
    model: "",
    mileage: 0,
    year: 0,
    color: "",
    location: "",
    price: 0,
    phone: 0,
    description: "",
  });
  const navigate = useNavigate();

  const onchangeHandler = (e) => {
    const { name, value } = e.target;

    setCarListingData((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const addCarListing = (e) => {
    e.preventDefault();
    const template = {
      title: carListingData.title,
      brand: carListingData.brand,
      model: carListingData.model,
      mileage: carListingData.mileage,
      year: carListingData.year,
      color: carListingData.color,
      location: carListingData.location,
      price: carListingData.price,
      phone: carListingData.phone,
      description: carListingData.description,
    };
    Axios.post("http://localhost:3001/cars/create", template);

    console.log(template);
    navigate("/cars-trucks");
  };
  return (
    <div className="cpContainer">
      <h1 className="post-header">List a Car or Truck</h1>

      <div id="form-group">
        <label for="title">Posting Title</label>
        <input
          className="form-control"
          type="text"
          name="title"
          required
          autoFocus
          value={carListingData.title}
          onChange={onchangeHandler}
        />
        <label for="brand">Brand</label>
        <input
          className="form-control"
          type="text"
          name="brand"
          value={carListingData.brand}
          onChange={onchangeHandler}
        />
        <label for="model"> Model</label>
        <input
          className="form-control"
          type="text"
          name="model"
          value={carListingData.model}
          onChange={onchangeHandler}
        />
        <label for="mileage">Mileage</label>
        <input
          className="form-control"
          type="number"
          name="mileage"
          value={carListingData.mileage}
          onChange={onchangeHandler}
        />
        <label for="year">Year</label>
        <input
          className="form-control"
          type="number"
          name="year"
          value={carListingData.year}
          onChange={onchangeHandler}
        />
        <label for="color">Color</label>
        <input
          className="form-control"
          type="text"
          name="color"
          value={carListingData.color}
          onChange={onchangeHandler}
        />
        <label for="location">Location</label>
        <input
          className="form-control"
          type="text"
          name="location"
          value={carListingData.location}
          onChange={onchangeHandler}
        />
        <label for="price">Price $</label>
        <input
          className="form-control"
          type="text"
          name="price"
          value={carListingData.price}
          onChange={onchangeHandler}
        />
        <label for="phone">Phone Number</label>
        <input
          className="form-control"
          type="number"
          name="phone"
          value={carListingData.phone}
          onChange={onchangeHandler}
        />
        {/* <!-- <label for="image">Add Images</label>
    <input type="file" name="pic1" multiple /> --> */}

        <label for="">Description</label>
        <textarea
          name="description"
          type="text"
          rows="10"
          onChange={onchangeHandler}
        ></textarea>
      </div>
      <button
        className="btn btn-primary post-btn"
        type="submit"
        onClick={addCarListing}
      >
        Publish
      </button>
    </div>
  );
};

export default CreateCars;
