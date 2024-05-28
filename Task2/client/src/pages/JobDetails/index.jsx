import CompanyHeader from "../../components/CompanyHeader";
import Navbar from "../../components/Navbar";
import EssentialDetails from "../../components/EssentialDetails";
import JobDescription from "../../components/JobDescription";


export default function JobDetails() {
  return (
    <>
      <Navbar pages="Candidate" />
      <div className="company w-11/12 m-auto mb-10">
        
        <CompanyHeader />
        <EssentialDetails />

        <JobDescription />
        
      </div>
    </>
  );
}
