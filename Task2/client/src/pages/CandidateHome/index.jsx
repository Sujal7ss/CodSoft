import Navbar from "../../components/Navbar";
import JobListing from "../JobListing";
export default function CandidateHome() {
  return (
    <>
      <Navbar pages="Candidate" />
      <JobListing />
    </>
  );
}
