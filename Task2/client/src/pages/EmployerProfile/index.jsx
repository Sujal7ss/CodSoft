import { useState } from "react";
import axios from "axios";
import img from "../../assets/intel.png";

export default function EmployerProfile() {
  const [title, setTitle] = useState("Title");
  const [about, setAbout] = useState("About");

  const call = async () => {
    console.log("loaded");
    try {
      const { data } = await axios(
        "http://localhost:8000/api/employer/companyDetails?companyName=intel"
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
              <h className="text-lg font-semibold">11-50 Employees</h>
            </div>
            <div className="mb-3">
              <p className="text-slate-400 mb-2">Industry Type</p>
              <h className="text-lg font-semibold">Software As A Service</h>
            </div>
            <div className="mb-3">
              <p className="text-slate-400 mb-2">Company Type</p>
              <h className="text-lg font-semibold">Private Limited Company</h>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
