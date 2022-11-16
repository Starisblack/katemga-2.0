import { useState } from "react";
import { Link } from "react-router-dom";
import PhoneIcon from "@mui/icons-material/Phone";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import "./singlePage.css";

const CardSinglePage = (props) => {
  const [showPhone, SetShowPhone] = useState(false);

  const onClickHandler = () => {
    SetShowPhone(true);
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-lg-7 ">
          <img className="item-img" src="" alt="" />
          <h2> {props.title}</h2>

          <div>
            <p>{props.location}</p>
          </div>
        </div>

        <div className="col-lg-3 shadow-sm car-details-box">
          <div>
            <p class="mt-2-5">List Price</p>
            <div class="heading-2 mt-1">
              ${parseInt(props.price).toLocaleString()}
            </div>

            <p class="mb-2">Posted by</p>

            <div class="user-profile">
              <img className="circle-img" src="" alt="" />
              <div className="text-center">
                <Link to="">Samuel Ogunniyi</Link>
              </div>
            </div>

            <button onClick={onClickHandler} className="btn">
              {" "}
              {showPhone ? (
                <>{props.phone}</>
              ) : (
                <>
                  <PhoneIcon className="mx-2" /> Show Contact
                </>
              )}
            </button>

            <div class="safety-tips-container">
              <div class="safety-tips-title">
                <HealthAndSafetyIcon /> Safety tips
              </div>
              <div class="safety-tips">
                1. Do not pay in advance even for the delivery
              </div>
              <div class="safety-tips">
                2. Try to meet at a safe, public location
              </div>
              <div class="safety-tips">3. Check the item BEFORE you buy it</div>
              <div class="safety-tips">
                4. Pay only after collecting the item
              </div>
            </div>
          </div>
        </div>
      </div>
      <span>Description</span> <p>{props.description}</p>
      <div class="listing-section">
        <h2>Car Details</h2>
        <div class="listing-details-table">
          <span>Year</span> <p>{props.year}</p>
          <span>Location</span> <p>{props.location}</p>
          <span>Address</span> <p>37 Chestnut St, Needham, MA 02492</p>
          <span>Engine</span> <p>8 Cylinder</p>
          <span>Drive</span> <p>Lhd</p>
          <span>Drive train</span> <p>Rwd</p>
          <span>Fuel type</span> <p>Petrol</p>
          <span>Condition</span> <p>Used</p>
          <span>VIN</span> <p>11102712002977</p>
          <span>Color</span> <p>{props.color}</p>
          <span>Interior color</span> <p>Beige</p>
        </div>
      </div>
      <div>
        <h2>You Might Also Like</h2>
        listing related items
      </div>
    </div>
  );
};

export default CardSinglePage;
