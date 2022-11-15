require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const RealEstateModel = require("./models/RealEstateDB");

app.use(express.json());
app.use(cors());
mongoose.connect(process.env.MONGO_URI);

const connection = mongoose.connection;

const realEstateRouter = require("./routes/realEstate");

app.use("/real-estate", realEstateRouter);

connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

app.post("/createrealestatepost", async (req, res) => {
  const title = req.body.title;
  const location = req.body.location;
  const price = req.body.price;
  const phone = req.body.phone;
  const description = req.body.description;

  const realEstateData = new RealEstateModel({
    title: title,
    location: location,
    price: price,
    phone: phone,
    description: description,
  });

  try {
    await realEstateData.save();
    res.send("Data have been added successfully!");
  } catch (error) {
    console.log(error);
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});
