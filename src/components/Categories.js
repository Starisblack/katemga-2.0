import HomeIcon from "@mui/icons-material/Home";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import LaptopIcon from "@mui/icons-material/Laptop";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="text-center category">
      <h1>SELECT A CATEGORY</h1>
      <div className="row">
        <div class="col-lg-4">
          <Link to="/createrealestatepost">
            <HomeIcon sx={{ fontSize: 80, color: "green" }} />
            <h2>Real Estate</h2>
          </Link>
        </div>

        <div class="col-lg-4">
          <Link to="/createcar">
            <DirectionsCarIcon sx={{ fontSize: 80, color: "green" }} />
            <h2>Car</h2>
          </Link>
        </div>

        <div class="col-lg-4">
          <Link to="/create-electronic">
            <LaptopIcon sx={{ fontSize: 80, color: "green" }} />
            <h2>Electronics</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;
