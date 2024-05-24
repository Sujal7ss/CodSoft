import CompanyHeader from "../../components/CompanyHeader";
import ApplicantsNavbar from "../../components/ApplicantsNavbar";
import EssentialDetails from "../../components/EssentialDetails";
import JobDescription from "../../components/JobDescription";
import Skills from "../../components/Skills";

export default function JobDetails() {
  return (
    <>
      <ApplicantsNavbar />
      <div className="company w-11/12 m-auto ">
        
        <CompanyHeader />
        <EssentialDetails />

        <JobDescription></JobDescription>
        
      </div>
    </>
  );
}
