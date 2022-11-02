
import { useParams,  useLocation } from "react-router-dom";



function Singlepage(){

    let location = useLocation();

    const { state } = location;

    

const {postName} = useParams();

 console.log(postName);

  return (

    <div  className="row g-4 ">
    <div className="col mx-auto">
    <div className="card shadow-sm">
            <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

            <div className="card-body">
              <p className="card-text">{state.description}</p>
              <p className="card-text">{state.title}</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">{state.price}</button>
                </div>
                <small className="text-muted">9 mins</small>
              </div>
            </div>
          </div>

          </div>
          </div>
  )

}


export default Singlepage;