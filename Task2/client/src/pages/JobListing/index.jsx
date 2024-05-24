import ApplicantsNavbar from "../../components/ApplicantsNavbar";
import JobsCard from "../../components/JobsCard";
import JobDetails from "../../pages/JobDetails";

export default function JobListing() {
  return (
    <>
      <ApplicantsNavbar />
      <div className="job-listing flex flex-col w-3/4 items-center m-auto mt-7 gap-4">
        <JobsCard />
        <JobsCard />
        <JobsCard />
        <JobsCard />
        <JobsCard />
        <JobsCard />
        <JobsCard />

      </div>
      {/* <JobDetails /> */}
    </>
  );
}
