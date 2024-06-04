import { useEffect } from "react";
import JobsCard from "../../components/JobsCard";
// import JobList from "../../assets/JobList";

export default function JobListing({ JobList, applied, user={user}}) {
  return (
    <>
      <div className="job-listing flex flex-col w-3/4 items-center m-auto mt-7 gap-4">
        {JobList.map((Job) => (
          <JobsCard key={Job._id} job={Job} applied={applied} user={user}/>
        ))}
      </div>
    </>
  );
}
