require("dotenv").config();
const express = require ("express");
const cors = require ("cors");
const mongoose = require ("mongoose");




const app = express();
const port = process.env.PORT || 8080;


app.use(express.json())
app.use(cors());



mongoose.connect(process.env.ATLAS_URI)

const connection = mongoose.connection;

connection.once("open", ()=> {
    console.log("MongoDB database connection established successfully");
})


const  realEstateRouter = require("./routes/exercises");


app.use("/real-estate", realEstateRouter);


app.listen(port,  () => {
    console.log("server is running at port:" + port );
})

