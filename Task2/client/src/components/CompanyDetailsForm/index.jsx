// import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CompanyDetailsForm() {
  const navigate = useNavigate();
  // const [details, setDetails] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [about, setAbout] = useState("");

  // useEffect(() => {
    // if (details) {
    //   navigate("/employer");
    // }
  // }, [details, navigate]);

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

  
  const setCompanyDetails = async (e) => {
    e.preventDefault();
    if (
      !companyName ||
      !phone ||
      !city ||
      !state ||
      !country ||
      !about
    ) {
      return toast.error("All fields are required");
    }
    try {
      const email = getCookie("username")
      const { data } = await axios.post(
        `http://localhost:8000/api/employer/companyDetails?email=${email}`,

        {
          companyName: companyName,
          phone: phone,
          city: city,
          state: state,
          country: country,
          about: about,
        }
      );

      if (data.success) {
        toast.success(data.message);
        // setDetails(true);
        return navigate("/employer");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      className="mt-6"
      onSubmit={(e) => {
        setCompanyDetails(e);
      }}
    >
      <div className="relative mb-5">
        <div className="absolute left-0 inset-y-0 flex items-center"></div>
      </div>
      <div className="relative">
        <input
          className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
          id="companyName"
          type="text"
          placeholder="Your Company Name"
          name="companyName"
          onChange={(e) => setCompanyName(e.target.value)}
        />
      </div>
      
      <div className="relative mt-3">
        <input
          className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
          id="phone"
          type="text"
          placeholder="Phone"
          name="name"
          onChange={(e) => {
            setPhone(e.target.value);
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
      <div className="relative mt-3">
        <textarea
          className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
          id="about"
          type="text"
          placeholder="About Company"
          name="about"
          onChange={(e) => {
            setAbout(e.target.value);
          }}
        />
      </div>

      <div className="flex items-center justify-center mt-8">
        <button
          className="text-white py-2 px-4 uppercase rounded bg-indigo-500 hover:bg-indigo-600 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
          type="submit"
        >
          NEXT
        </button>
      </div>
      {/* <hr className="m-4" />
      <div className="flex items-center justify-center mt-5">
        <span className=" text-gray-500">DO NOT HAVE A ACCOUNT ?!</span>{" "}
        <Link
          to="/candidateSignup"
          className="text-white py-2 px-4 ml-3 uppercase rounded bg-green-400 hover:bg-green-500 shadow hover:shadow-lg font-medium transition transform  "
        >
          REGISTER
        </Link>
      </div> */}
    </form>
  );
}

export default CompanyDetailsForm;
