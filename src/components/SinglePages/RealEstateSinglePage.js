
import {  useParams, useLocation } from "react-router-dom";
import CardSinglePage from "./CardSinglePage";




const RealEstatePage = () => {


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
        />
        </>
     )
}


export default RealEstatePage;