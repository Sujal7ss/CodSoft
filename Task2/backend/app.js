import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { config } from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import candidate from "./Routes/Candidate.js";
import employer from "./Routes/Employer.js";
import path from "path";
import { fileURLToPath } from "url";

// Get the current directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const uploadDirectory = "/uploads";

//Express app
const app = express();

//env variables
config();
config({
  path: ".env",
});
const PORT = process.env.PORT || 8000;
console.log(PORT)
const DB=process.env.CONNECTION_STRING
//mongoDB connection
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(DB);
    console.log("Connected to MongoDB established");

  } catch (err) {
    console.log("Connection not established with mongoDB");
  }
};
connectDB();

//Middlewares
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // to handle JSON payloads
app.use(express.static("public"));
app.use("/uploads", express.static(path.join(__dirname, uploadDirectory)));

//CORS
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

//Routes
app.use("/api/candidate/", candidate);
app.use("/api/employer/", employer);

if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/build"));
}

app.get("/", (req, res) => {
  res.json({ message: "Welcome to StaffMerge" });
});
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
