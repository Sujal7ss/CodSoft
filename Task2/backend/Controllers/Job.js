import { Jobs } from "../Models/Job.js";
import { Employers } from "../Models/Employer.js";
import { Candidates } from "../Models/Candidate.js";

const jobDetails = async (req, res) => {
  const {
    title,
    jobType,
    experiece,
    salary,
    jobDescription,
    city,
    state,
    country,
  } = req.body;
  const email = req.query.email;
  // console.log(req.body);
  // console.log(email);
  try {
    const user = await Employers.findOne({ email: email });
    console.log(user);
    const job = new Jobs({
      title,
      jobType,
      experiece: Number(experiece),
      salary: Number(salary),
      jobDescription,
      authorId: email,
      companyName: user.companyName,
      city,
      state,
      country,
    });
    await job.save();
  } catch (err) {
    console.log(err);
  }
  res.status(200).json({ success: true, message: "Job Created" });
};

const postedJobs = async (req, res) => {
  const email = req.query.email;

  const joblist = await Jobs.find({ authorId: email });
  //   console.log(joblist);

  res.status(200).json({ success: true, jobs: joblist });
};

const editJob = async (req, res) => {
  const jobId = req.params.id;

  try {
    // Ensure req.body contains data to update
    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({
        success: false,
        message: "No data to update",
      });
    }

    // Find the job by id and update it
    const job = await Jobs.findOneAndUpdate(
      { _id: jobId },
      req.body,
      { new: true, runValidators: true } // Ensure validators run and return the updated document
    );

    // If job is not found, return a 404 error
    if (!job) {
      return res.status(202).json({
        success: false,
        message: "No Job Found",
      });
    }

    // console.log(job);

    // Send the updated job back to the client
    return res.status(200).json({
      success: true,
      job: job,
      message: "Updated",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

const applyJob = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded",
      });
    }

    // Process the uploaded file here
    const job = await Jobs.findOne({ _id: req.body.jobId });
    job.appliedCandidates.push(req.body.email);
    await job.save();

    const candidate = await Candidates.findOne({ email: req.body.email });
    candidate.appliedJobs.push(job);
    await candidate.save();
    
    res.status(200).json({
      success: true,
      message: "File uploaded successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

export { jobDetails, postedJobs, editJob, applyJob };
