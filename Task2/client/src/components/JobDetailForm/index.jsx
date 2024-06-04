// import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CurrencyInput from "react-currency-input-field";

function JobDetailForm() {
  const navigate = useNavigate();
  const [details, setDetails] = useState(false);

  const [title, setTitle] = useState("");
  const [jobType, setJobType] = useState(0);
  const [experience, setExperience] = useState("");
  const [salary, setSalary] = useState();
  const [jobDescription, setJobDescription] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [country, setCountry] = useState();

  useEffect(() => {
    if (details) {
      navigate("/employer/postedJobs");
    }
  }, [details, navigate]);

  function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  const setJobDetails = async (e) => {
    e.preventDefault();
    if (!title || !jobType || !experience || !salary || !jobDescription || !city || !state || !country) {
      return toast.error("All fields are required");
    }
    if (experience < 0) {
      return toast.error("Experience Cant be negative");
    }
    try {
      const email = getCookie("username");
      const { data } = await axios.post(
        `http://localhost:8000/api/employer/jobDetails?email=${email}`,
        {
          title: title,
          jobType: jobType,
          experiece: experience,
          salary: salary,
          jobDescription: jobDescription,
          city: city,
          state: state,
          country: country,
        }
      );
      

      if (data.success) {
        toast.success(data.message);
        setDetails(true);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="mt-6">
      <div className="relative mb-5">
        <div className="absolute left-0 inset-y-0 flex items-center"></div>
      </div>
      <div className="relative">
        <input
          className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
          id="title"
          type="text"
          placeholder="Job Title"
          name="jobTitle"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="relative mt-3">
        <select
          id="jobtype"
          name="jobtype"
          required
          value={jobType}

          onChange={(e) => {
            setJobType(e.target.value);
          }}
          className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
        >
          <option value="part-time">Part-Time</option>
          <option value="full-time">Full-Time</option>
          <option value="internship">Internship</option>
        </select>
      </div>
      <div className="relative mt-3">
        <input
          className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
          id="experience"
          type="number"
          placeholder="Experience"
          name="experience"
          onChange={(e) => {
            setExperience(e.target.value);
          }}
        />
      </div>
      <div className="relative mt-3">
        <CurrencyInput
          className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
          id="salary"
          name="salary"
          prefix="Rs"
          placeholder="Salary"
          allowDecimals={false}
          allowNegativeValue={false}
          onValueChange={(value, name, values) => setSalary(value)}
        />
      </div>

      <div className="relative mt-3">
        <textarea
          className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
          id="details"
          type="text"
          placeholder="Job Details"
          name="details"
          onChange={(e) => {
            setJobDescription(e.target.value);
          }}
        />
      </div>
      <div className="relative mt-3">
        <input
          className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
          id="city"
          type="text"
          placeholder="City"
          name="city"
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
      </div>
      <div className="relative mt-3">
        <input
          className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
          id="state"
          type="text"
          placeholder="State"
          name="state"
          onChange={(e) => {
            setState(e.target.value);
          }}
        />
      </div>
      <div className="relative mt-3">
        <input
          className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
          id="country"
          type="text"
          placeholder="Country"
          name="country"
          onChange={(e) => {
            setCountry(e.target.value);
          }}
        />
      </div>

      <div className="flex items-center justify-center mt-8">
        <button
          className="text-white py-2 px-4 uppercase rounded bg-indigo-500 hover:bg-indigo-600 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
          type="submit"
          onClick={(e) => {
            setJobDetails(e);
          }}
        >
          NEXT
        </button>
      </div>
    </form>
  );
}

export default JobDetailForm;
