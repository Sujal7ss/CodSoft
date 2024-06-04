import { useState } from "react";
import img from "../../assets/company.svg";
import Skills from "../Skills"
import { Link } from "react-router-dom";
export default function JobsCard({job, applied, user}) {
  
  
  
  
  return (
    <div className="card relative flex border  border-zinc-300 border-r-4 border-b-4  w-11/12 h-60 p-3">
      <div
        className="primary flex flex-col w-full justify-center items-center
        "
      >
        <div className="job-data w-full flex flex-row">
          <img src={img} alt="companies logo" className="w-14 ml-20 mr-9" />
          <div className="title flex flex-col ">
            <h3 className="title text-2xl font-bold">{job.title}</h3>
            <p className="text-slate-400">{job.companyName}</p>
          </div>
        </div>

        
      </div>

      <div className="secondary flex flex-col items-center w-full ">
        <div className="mt-12 flex flex-col gap-1">
          <h2 className="text-lg font-semibold">{job.jobType}</h2>

          <h3 className="text-md font-semibold">Rs {job.salary}</h3>
          <h3>{job.YOE}</h3>
        </div>
        {!applied && <div className="text-lg font-semibold mt-5 flex flex-row justify-center items-center">
          <Link to={`/${user}/jobsDetails?id=${job._id}`}><button className="bg-sky-600  w-36 h-10">Apply Now</button></Link>
        </div>}
      </div>
    </div>
  );
}
