import { deleteDoc, doc } from "firebase/firestore";
import { useParams, useLocation } from "react-router-dom";
import { db } from "../firebase-config";

function Singlepage() {
  let location = useLocation();

  const { state } = location;

  const { postName } = useParams();

  //console.log(postName);

  // //func to delete a post
  // const deletePost = async (id) => {
  //   const realEstatePostDoc = doc(db, "realEstatePosts", id);
  //   await deleteDoc();
  // };

  return (
    <div className="col-6 mx-auto">
      <div className="card shadow-sm">
        <svg
          className="bd-placeholder-img card-img-top"
          width="100%"
          height="225"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Placeholder: Thumbnail"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <title>katemga</title>
          <rect width="100%" height="100%" fill="#55595c"></rect>
          <text x="50%" y="50%" fill="#eceeef" dy=".3em">
            Listing photo
          </text>
        </svg>

        <div className="card-body">
          <p className="card-text" style={{ textAlign: "center" }}>
            {" "}
            {/* {state.description} */}
          </p>

          <p className="card-text">
            {/* <b>Listing Title:</b> {state.title} */}
          </p>
          <p className="card-text">{/* <b>Phone:</b> {state.phone} */}</p>
          <p className="card-text">{/* <b>Location:</b> {state.location} */}</p>

          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              {/* <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                View
              </button> */}
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                {/* Price ${state.price} */}
              </button>
            </div>
            {/* <small className="text-muted">9 mins</small> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Singlepage;
