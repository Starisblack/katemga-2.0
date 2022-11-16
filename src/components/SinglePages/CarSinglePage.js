import { useParams, useLocation } from "react-router-dom";
import CardSinglePage from "./CardSinglePage";

const CarPage = () => {
  let location = useLocation();

  const { state } = location;

  const { postName } = useParams();

  console.log(postName);

  console.log(state);

  return (
    <>
      <CardSinglePage
        title={state.title}
        brand={state.brand}
        model={state.model}
        mileage={state.mileage}
        year={state.year}
        color={state.color}
        location={state.location}
        price={state.price}
        phone={state.phone}
        description={state.description}
      />
    </>
  );
};

export default CarPage;
