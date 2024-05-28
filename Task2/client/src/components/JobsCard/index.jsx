import img from "../../assets/intel.png";
import Skills from "../Skills"

export default function JobsCard({job}) {
  return (
    <div className="card relative flex border  border-zinc-300 border-r-4 border-b-4  w-11/12 h-60 p-3">
      <div
        className="primary flex flex-col w-full justify-center items-center
        "
      >
        <div className="job-data w-full flex flex-row">
          <img src={img} alt="companies logo" className="w-14 ml-20 mr-9" />
          <div className="title flex flex-col ">
            <h3 className="title text-4xl font-bold">{job.Company_Name}</h3>
            <p className="text-slate-400">{job.Role}</p>
          </div>
        </div>

        <Skills gap={"gap-3"} skills={job.Skills}/>
      </div>

      <div className="secondary flex flex-col w-full ">
        <div className="mt-12 flex flex-col gap-1">
          <h2 className="text-lg font-semibold">{job.Type}</h2>

          <h3 className="text-md font-semibold">{job.Stipend}</h3>
          <h3>{job.YOE}</h3>
        </div>
        <div className="text-lg font-semibold mt-5 flex flex-row justify-center items-center">
          <a href="jobs/2"><button className="bg-sky-600  w-36 h-10">Apply Now</button></a>
        </div>
      </div>
    </div>
  );
}
