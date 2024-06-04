import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import JobListing from "../JobListing";
import axios from "axios";
import toast from "react-hot-toast";



function PostedJobs() {

    const [jobList, setJobList] = useState([])
    function getCookie(cname) {
        let name = cname + "=";
        let ca = document.cookie.split(";");
        for (let i = 0; i < ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) == " ") {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
      }

    const email = getCookie("username")
    
    useEffect( ()=> {
        const getData = async() => {
            try{

                const {data} = await axios.get(`http://localhost:8000/api/employer/postedJobs?email=${email}`,)
                // console.log(data)
                if(data.success) {
                    setJobList(data.jobs)
                }
                else
                {
                    return toast.error("something went wrong")
                }
            }
            catch(err){
                console.log(err)
            }
        }

        getData()
    } , [])
   
  return (
    <>
      <>
        <Navbar pages="Employer" />
        {jobList.length > 0 && <JobListing JobList={jobList} />}
        {jobList.length == 0 }
      </>
    </>
  );
}

export default PostedJobs;
