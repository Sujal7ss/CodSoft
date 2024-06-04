import { useState, useEffect } from "react";
import JobListing from "../JobListing";

import axios from "axios";

export default function CandidateHome() {
  const [jobList, setJobList] = useState([]);

  useEffect(() => {
    const getList = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:8000/api/candidate/joblist`
        );

        if (data.success) {
          const list = data.jobs;
          // console.log(list[0]);
          list.reverse();
          setJobList(list);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getList();
  }, []);
  return (
    <>
      <JobListing JobList={jobList} />
    </>
  );
}
