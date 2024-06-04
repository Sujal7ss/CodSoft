import { Candidates } from "../Models/Candidate.js";
import { Jobs } from "../Models/Job.js";

import bcrypt from "bcryptjs";


const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const results = await Candidates.findOne({ email: email });console.log(results);
    if (results === null) {
      return res.status(200).json({
        success: false,
        message: "Invalid Credentials",
      });
    }

    const isMatch = bcrypt.compare(password, results.password);

    // console.log(token);
    if (isMatch) {
      return res.status(200).json({
        success: true,
        message: "user verified",
      });
    } else {
      return res.status(200).json({
        success: false,
        message: "Invalid Credentials.",
      });
    }
  } catch (err) {
    console.log(err);
  }
};

const signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const isUserExist = await Candidates.findOne({ email: email });
    if (isUserExist) {
      return res.status(200).json({
        success: false,
        message: "User already exist",
      });
    }
    const hash = await bcrypt.hash(password, 10);
    const candidate = new Candidates({
      name: name,
      email: email,
      password: hash,
    });
    candidate.save();

    return res.status(200).json({
      success: true,
      message: "User created",
    });
  } catch (err) {
    return res.status(404).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

const aboutme = async (req, res) => {
  // console.log(req.query)
  const email = req.query.email
  console.log(email)
  const candidate = await Candidates.findOne({email})
  console.log(candidate)
  res.json(candidate);
}

const update = async (req, res) => {
  console.log(req.body)
  const candidate = await Candidates.findOneAndUpdate({email: req.body.email}, req.body, {new: true})
  console.log(candidate)

  res.json("update")
}

const jobList = async (req, res) => {
  try {
    const list = await Jobs.find({})
    console.log(list)
    res.status(200).json({ 
      success:true,
      jobs : list
    })
  } catch (err) {
    console.log(err)
  }
  
}
const appliedJobs = async (req, res) => {
  try {
    const email = req.query.email
    const candidate = await Candidates.findOne({email})
    console.log(candidate.appliedJobs)
    const list = candidate.appliedJobs
    // console.log(list)
    res.status(200).json({ 
      success:true,
      jobs : list
    })
  } catch (err) {
    console.log(err)
  }
}

const jobDetail = async (req, res) => {
  const jobId = req.params.id

  const job = await Jobs.findOne({_id : jobId})
  
  console.log(job)

  res.status(200).json({
    success:true,
    job: job
  })
}

export { login, signup, aboutme , update, jobList, jobDetail, appliedJobs};
