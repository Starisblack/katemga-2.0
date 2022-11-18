
import { useEffect } from "react";
import Axios from "axios"
import {  useParams, useLocation } from "react-router-dom";
import CardSinglePage from "./CardSinglePage";
import { useState } from "react";





const RealEstatePage = () => {

  
    const { postName } = useParams();

    const [ itemData, setItemData ] = useState([])
 

    
    useEffect(() => {

        Axios.get("http://localhost:3001/real-estate/" + postName)
          .then((res) => {
            setItemData (res.data);

           
          })
          .catch((err) => {
            console.log(err);
          });
    
        console.log("Effect Called ");
      }, [postName]);


   
    


    
     return (
        <>
         <CardSinglePage
            title={itemData.title}
            location={itemData.location}
            price={itemData.price}
            phone={itemData.phone}
        />

        <div className="listing-section">
            <h2>House Details</h2>

            <div className="listing-details-table">
            <span>Year</span> <p>2022</p>
            <span>Location</span> <p>{itemData.location}</p>
            <span>Description</span> <p>{itemData.description}</p>
    
         </div>


            <div className="my-5">

                <h2>You Might Also Like</h2>

                listing related items


            </div>
    
        </div>



    </>

     )
}


export default RealEstatePage;