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
            <p className="mt-2-5">List Price</p>
            <div className="heading-2 mt-1">
              ${parseInt(props.price).toLocaleString()}
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

            <div className="safety-tips-container">
              <div className="safety-tips-title">
                <HealthAndSafetyIcon /> Safety tips
              </div>
              <div className="safety-tips">
                1. Do not pay in advance even for the delivery
              </div>
              <div className="safety-tips">
                2. Try to meet at a safe, public location
              </div>
              <div className="safety-tips">
                3. Check the item BEFORE you buy it
              </div>
              <div className="safety-tips">
                4. Pay only after collecting the item
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSinglePage;
