import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./route/bookRoute.js"
import cors from "cors";
import userRoute from "./route/userRoute.js";

const app = express();

app.use(cors());
app.use(express.json())
dotenv.config();

const port = process.env.PORT || 4000;
const URI = process.env.MONGO_URI;

// connect to mongodb

try {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to database");
} catch (error) {
  console.log("Error : ", error);
}

// defining router

app.use("/book",bookRoute);
app.use("/",userRoute);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
