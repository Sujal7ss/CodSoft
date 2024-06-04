import { useState, useEffect } from "react";
import JobListing from "../JobListing";
import toast from "react-hot-toast";
import getCookie from "../../components/cookie";
import axios from "axios";

export default function AppliedJobs() {
  const [jobList, setJobList] = useState([]);

  useEffect(() => {
    const getList = async () => {
      let user = getCookie("username");
      if (user != "") {
        try {
          const { data } = await axios.get(
            `${process.env.BASE_URL}/api/candidate/appliedJobs?email=${user}`
          );

          if (data.success) {
            const list = data.jobs;
            // console.log(list[0]);
            list.reverse();
            return setJobList(list);
          }
        } catch (error) {
          console.log(error);
        }
      }
      else {
        toast.error("Login first");
        setTimeout(()=> {

          window.location.href = "/candidateLogin";
        },2000)
      }
    };

    getList();
  }, []);

  return (
    <>
      <JobListing JobList={jobList} applied={true} />
    </>
  );
}
