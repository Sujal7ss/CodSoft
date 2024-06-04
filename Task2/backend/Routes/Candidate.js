import express from "express";
import { signup, login, aboutme , update, jobList, jobDetail, appliedJobs, appliedCandidates} from "../Controllers/Candidate.js";
import {applyJob} from "../Controllers/Job.js"
// import { auth } from "../Middleware/auth.js";
import multer from "multer";
import * as fs from 'fs';


const uploadDirectory = 'uploads';

// Create the uploads directory if it doesn't exist
if (!fs.existsSync(uploadDirectory)) {
    fs.mkdirSync(uploadDirectory);
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
      cb(null, `${req.body.email}.pdf`);
  }
});
const upload = multer({ storage });

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/aboutme",  aboutme);
router.post("/update",  update);
router.get("/joblist", jobList);
router.get("/jobDetails/:id", jobDetail)
router.post("/apply",  upload.single('resume'), applyJob)
router.get("/appliedJobs", appliedJobs)
router.post("/appliedCandidates", appliedCandidates)


export default router;
