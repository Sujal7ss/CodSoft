import express from "express";
import bodyParser from "body-parser";
import { config } from "dotenv";
import JobList from "./assets/JobList.js";
import cors from "cors";
import mongoose from "mongoose";
import candidate from "./Routes/Candidate.js"
import employer from "./Routes/Employer.js"

//Express app
const app = express();

//env variables
config({
  path: "config.env",
});

//mongoDB connection
try{

  const conn = await mongoose.connect(process.env.CONNECTION_STRING);
  console.log("Connected to MongoDB established")
}
catch(err)
{
  console.log("Connection not established with mongoDB")
}

//Middlewares
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // to handle JSON payloads

//CORS
app.use(
  cors({
    origin: "http://localhost:3000", 
  })
);

//Routes
app.use("/api/candidate/", candidate)
app.use("/api/employer/", employer)



app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
