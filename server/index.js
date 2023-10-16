const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");

const app = express();
require("dotenv").config();

//middlewares
app.use(cors());
app.use(express.json());

app.use("/api/auth", userRoutes);

//connecting to mongodb database using mongoose
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB connected sucessfully"))
  .catch((err) => console.log(err));

//creating server
const server = app.listen(process.env.PORT, () => {
  console.log(`server running on port ${process.env.PORT}`);
});