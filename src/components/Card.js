import { Link } from "react-router-dom";

// import { isAuth } from "./RealEstate";

function Card({ data, pageName }, { isAuth }) {
  return (
    <div className="container">
      <div className="row g-4 ">
        {data?.map((post) => {
          return (
            <div key={post._id} className="col-12 col-md-4 col-lg-3">
              <div className="card h-100 shadow-sm">
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
                    listing photo
                  </text>
                </svg>

                <div className="card-body">
                  {/* <p className="card-text">{post.description}</p> */}
                  <h4 className="card-text">{post.title}</h4>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <Link
                        className="btn btn-sm btn-outline-secondary"
                        to={ `/${pageName}/${post._id}`}  >
                        View Listing
                      </Link>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Price ${parseInt(post.price).toLocaleString()}
                      </button>
                    </div>

                    {/* <small className="text-muted">9 mins</small> */}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Card;
