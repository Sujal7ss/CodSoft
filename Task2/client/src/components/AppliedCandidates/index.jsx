import toast from "react-hot-toast";
import axios from "axios";
import { useEffect, useState } from "react";

function AppliedCandidates({ candidates }) {
  const [appliedCandidates, setAppliedCandidates] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      console.log("Fetching data");
      try {
        const { data } = await axios.post(
          `http://localhost:8000/api/candidate/appliedCandidates`,
          { emails: candidates }
        );

        if (data.success) {
          setAppliedCandidates(data.candidates);
        } else {
          return toast.error("No one applied so far");
        }
      } catch (err) {
        console.log("err");
      }
    };
    if (candidates && candidates.length > 0) {
      fetchData();
    }
  }, [candidates]);
//   console.log(appliedCandidates[0].name);
  return (
    <>
      Applied Candidate
      <ul>
        {appliedCandidates.length > 0 && appliedCandidates.map((candidate, index) => (
            candidate && typeof candidate === 'object' && 'name' in candidate && <li>{candidate.name}</li>
        ))}
      </ul>
    </>
  );
}

export default AppliedCandidates;
