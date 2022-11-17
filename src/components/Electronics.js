import React, { useState, useEffect } from "react";
import Card from "./Card";
import { HalfMalf } from "react-spinner-animated";
import "react-spinner-animated/dist/index.css";
import { Link } from "react-router-dom";
import Axios from "axios";

function Electronics() {
  const [electronicPostLists, setElectronicPostLists] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/electronic/")
      .then((res) => {
        setElectronicPostLists(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    console.log("Effect Called ");
  }, []);

  return (
    <div className="electronic">
      <Card 
      data={electronicPostLists} 
      pageName="electronics"
      />
    </div>
  );
}

export default Electronics;
