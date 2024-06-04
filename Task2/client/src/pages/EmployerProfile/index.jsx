import { useState } from "react";
import axios from "axios";
import img from "../../assets/intel.png";
import getCookie from "../../components/cookie.js"

export default function EmployerProfile() {
  const [title, setTitle] = useState("Title");
  const [about, setAbout] = useState("About");

  
    
  const call = async () => {
    let user = getCookie("username");
      console.log(user);
    
    try {

      const { data } = await axios.get(
        `http://localhost:8000/api/employer/companyDetails?email=${user}`,
        
      );

      if (data.data) {
        console.log(data);
        setTitle(data.data.companyName);
        setAbout(data.data.about);
      }
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <>
      <div
        onLoad={call}
        className="company w-11/12 h-96 m-auto mb-10 flex-row flex gap-10 "
      >
        <div className="flex flex-col w-3/4 mt-4 items-center h-96 gap-10">
          <div className="flex flex-row justify-between w-full border p-10 h-44 mt-4 bg-slate-50 items-center">
            <div className="job-data flex flex-row w-fit  items-center">
              <img
                src={img}
                alt="companies logo"
                className="w-14 h-14 ml-20 mr-9"
              />
              <div className="title flex flex-col ">
                <h3 className="title text-4xl font-bold">{title}</h3>
                <p className="text-slate-400">Company headline</p>
                <p className="text-slate-400">Company type</p>
              </div>
              
<button id="dropdownDividerButton" data-dropdown-toggle="dropdownDivider" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown divider <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
</svg>
</button>

{/* <!-- Dropdown menu --> */}
<div id="dropdownDivider" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDividerButton">
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
      </li>
    </ul>
    <div class="py-2">
      <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Separated link</a>
    </div>
</div>

            </div>
          </div>

          <div className="flex flex-col  border w-full  p-10 mt-4 bg-slate-50  justify-evenly items-start ">
            <div className="title flex flex-col items-start ">
              <h3 className="title text-xl ">About the Company</h3>
              <p className="text-slate-400">{about}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col  border w-1/3 h-fit p-10 mt-4 bg-slate-50  justify-evenly">
          <div className="title flex flex-col items-start m-auto">
            <h3 className="title text-2xl font-bold">About the Company</h3>
            <p className="text-slate-400">website</p>
          </div>
          <div className="title flex-col items-center gap-5 mt-12">
            <div className="mb-3">
              <p className="text-slate-400 mb-2">Company's size</p>
              <h1 className="text-lg font-semibold">11-50 Employees</h1>
            </div>
            <div className="mb-3">
              <p className="text-slate-400 mb-2">Industry Type</p>
              <h1 className="text-lg font-semibold">Software As A Service</h1>
            </div>
            <div className="mb-3">
              <p className="text-slate-400 mb-2">Company Type</p>
              <h1 className="text-lg font-semibold">Private Limited Company</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

