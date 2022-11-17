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
        location={state.location}
        price={state.price}
        phone={state.phone}
        year={state.year}
        brand={state.brand}
        model={state.model}
      />
    </>
  );
};

export default CarPage;
