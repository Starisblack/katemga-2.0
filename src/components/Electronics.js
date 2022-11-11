import React from "react";
import { Link } from "react-router-dom";
import CreateElectronicListing from "../CreateListings/CreateElectronicListing";

function Electronics() {
  return (
    <div>
      <Link
        to="/createelectroniclisting"
        className="c-listing"
        onClick={CreateElectronicListing}
      >
        Create Listing
      </Link>
    </div>
  );
}

export default Electronics;
