// import CompanyHeader from "../../components/CompanyHeader";
import img from "../../assets/company.svg";
import Navbar from "../../components/Navbar";
import toast from "react-hot-toast";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "../../components/Button";
import axios from "axios";
import getCookie from "../../components/cookie.js";
import Skills from "../../components/Skills";
import ReactModal from "react-modal";
import AppliedCandidates from "../../components/AppliedCandidates/index.jsx";

export default function JobDetails() {
  const [searchParams] = useSearchParams();

  //To edit the details , Employer access
  const [edit, setEdit] = useState(false);

  //Job Details
  const [companyName, setCompanyName] = useState("");
  const [role, setRole] = useState("");
  const [user, setUser] = useState(false);
  const [salary, setSalary] = useState(0);
  const [location, setLocation] = useState();
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const id = searchParams.get("id");

  //Job application
  const [apply, setApply] = useState(false);
  const [email, setEmail] = useState();
  const [resume, setResume] = useState();
  const [candidate, setCandidate] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:8000/api/candidate/jobDetails/${id}`
        );
        const job = data.job;

        setCompanyName(job.companyName);
        setRole(job.title);
        setSalary(job.salary);
        setLocation(job.city);
        setDescription(job.jobDescription);
        setLink(job.jobLink);
        setCandidate(job.appliedCandidates);

        if (data.job.authorId === getCookie("username")) {
          setUser(true);
        }
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, []);

  const handleSave = async () => {
    setEdit((e) => !e);

    if (edit) {
      try {
        const { data } = await axios.post(
          `http://localhost:8000/api/employer/editJob/${id}`,
          {
            companyName: companyName,
            title: role,
            salary: salary,
            jobDescription: description,
            city: location,
            jobLink: link,
          }
        );

        if (data.success) {
          toast.success(data.message);
        } else {
          toast.error(data.message);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  const applyHandler = () => {
    setApply((e) => !e);
  };

  const handleApply = async () => {
    if (!email) {
      return toast.error("Please provide email");
    }
    if (!resume) {
      return toast.error("Please provide resume");
    }
    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("resume", resume);
      formData.append("jobId", id);

      const { data } = await axios.post(
        "http://localhost:8000/api/candidate/apply",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );

      if (data.success) {
        toast.success(data.message);
        // Clear email and resume after successful submission
        setEmail("");
        setResume(null);
        // Close the modal
        setApply(false);
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to submit application");
    }
  };
  return (
    <>
      <ReactModal isOpen={apply}>
        <button onClick={applyHandler}>Close</button>
        <div className="">
          <div className="p-8 lg:w-1/2 mx-auto">
            <div className="bg-gray-100 rounded-b-lg py-12 px-4 lg:px-24">
              <p className="text-center text-sm text-gray-500 font-semibold">
                APPLY TO THIS JOB?
              </p>

              <div className="mt-6">
                <div className="relative mb-5">
                  <div className="absolute left-0 inset-y-0 flex items-center"></div>
                </div>
                <div className="relative">
                  <input
                    className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                    id="email"
                    type="text"
                    placeholder="Email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div className="absolute left-0 inset-y-0 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7 ml-3 text-gray-400 p-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                </div>
                <div className="relative mt-3">
                  <input
                    className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Password"
                    name="password"
                    // onChange={}
                  />
                </div>
                <div className="relative mt-3">
                  <p>Upload resume</p>
                  <input
                    className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                    id="username"
                    type="file"
                    name="resume"
                    onChange={(e) => setResume(e.target.files[0])}
                  />
                </div>

                <div className="flex items-center justify-center mt-8">
                  <button
                    className="text-white py-2 px-4 uppercase rounded bg-indigo-500 hover:bg-indigo-600 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
                    // type="submit"
                    method="post"
                    onClick={handleApply}
                  >
                    Submit Application
                  </button>
                </div>
                <hr className="m-4" />
              </div>
            </div>
          </div>
        </div>
      </ReactModal>
      <div className="company w-11/12 m-auto mb-10">
        {/* Header */}
        <div className="flex flex-row justify-evenly border h-44 mt-4 bg-slate-50 items-center">
          {/* <img src={img} alt="companies logo" className="w-14 ml-20 mr-9" /> */}
          <img src={img} alt="companies logo" className="w-14 ml-20 mr-9" />
          <div className="title flex flex-col h-52 gap-2 justify-around ">
            {!edit && (
              <h3 className="title text-4xl font-bold">{companyName}</h3>
            )}
            {edit && (
              <input
                className=" px-2 py-1.5 rounded-md ring-1  drop-shadow-2xl m-10 text-slate-700 block "
                type="text"
                placeholder="Company Name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            )}

            {!edit && <p className="text-slate-400">{role}</p>}
            {edit && (
              <input
                className=" px-2 py-1.5 rounded-md ring-1  drop-shadow-2xl m-10 text-slate-700 block "
                type="text"
                placeholder="Role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              />
            )}
          </div>

          {!edit && !user && (
            <Button
              className={"mr-20"}
              style={"bg-C0DFED"}
              onSelect={applyHandler}
            >
              Apply Now
            </Button>
          )}
          {/* {edit && (
            <input
              className=" px-2 py-1.5 rounded-md ring-1  drop-shadow-2xl m-10 text-slate-700 block "
              type="text"
              placeholder="Link"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          )} */}

          {user && (
            <button
              onClick={handleSave}
              className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition duration-300"
            >
              {edit ? "Save" : "Edit"}
            </button>
          )}
        </div>
        <div className="flex flex-row justify-evenly border h-44 mt-4 bg-slate-50 items-center">
          <div>
            <h2 className="text-gray-400 text-md m-auto">Salary</h2>
            {!edit && <p className="font-bold text-xl m-auto">Rs {salary}</p>}
            {edit && (
              <input
                className=" px-2 py-1.5 rounded-md ring-1  drop-shadow-2xl m-10 text-slate-700 block "
                type="number"
                placeholder="Salary"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
              />
            )}
          </div>
          <div>
            <h2 className="text-gray-400 text-md m-auto">Location</h2>
            {!edit && <p className="font-bold text-xl m-auto">{location}</p>}
            {edit && (
              <input
                className=" px-2 py-1.5 rounded-md ring-1  drop-shadow-2xl m-10 text-slate-700 block "
                type="text"
                placeholder="Location"
                value={salary}
                onChange={(e) => setLocation(e.target.value)}
              />
            )}
          </div>
        </div>

        <div className="flex flex-row justify-between items-start ">
          <div className=" border w-8/12 mt-4 bg-slate-50 p-5">
            <h1 className="text-2xl font-semibold my-5">About Internship</h1>

            {!edit && <p>{description}</p>}
            {edit && (
              <textarea
                className=" px-2 py-1.5 w-full h-96 rounded-md ring-1  drop-shadow-2xl m-10 text-slate-700 block "
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            )}
          </div>
        </div>
        {user && (
          <>
            <div className="flex flex-col justify-evenly border h-fit mt-4 bg-slate-50 items-center">
              <h3 className="font-semibold text-2xl my-20">
                Applied Candidate
              </h3>
              <AppliedCandidates candidates={candidate} />
            </div>
          </>
        )}
      </div>
    </>
  );
}
