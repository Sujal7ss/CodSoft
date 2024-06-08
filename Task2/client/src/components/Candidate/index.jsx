import { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import ReactModal from "react-modal";
import { ScrollRestoration } from "react-router-dom";

function Candidate({ candidate, job }) {
  const [resumeUrl, setResumeUrl] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/candidate/resume/${candidate._id}`,
          { responseType: "blob" }
        );
        if (response.status === 200) {
          const url = URL.createObjectURL(response.data);
          setResumeUrl(url);
        } else {
          toast.error("No resume found");
        }
      } catch (err) {
        console.log("err");
      }
    };
    if (candidate) {
      fetchData();
    }
  }, []);
  const popupModal = () => {
    setIsOpen((e) => !e);
  };

  const handleYes = async() => {
    try{
      const {data} = await axios.get(`http://localhost:8000/api/employer/selectCandidate`,
        {
          params: {
            job: job,
            candidate: candidate
          }
        }
      )
    }catch(err){
      console.log(err);
    }
    toast.success("Candidate selected")
    setIsOpen((e) => !e);
  };

  const handleNo = async () => {
    
    toast.error("Candidate not selected")
    setIsOpen((e) => !e);
  };

  return (
    <section className="bg-gray-100 py-12">
      <ReactModal
        isOpen={isOpen}
        // className={"flex align-middle justify-center items-center w-52 h-52 bg-sky-300"}
        style={{
          overlay: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
          content: {
            width: "500px",
            height: "500px",
            margin: "auto",
            backgroundColor: "#", // Set your desired background color here
          },
        }}
      >
        <div className="modal flex flex-col align-center  items-center  w-full h-full">
          <h3 className="modal-title text-2xl mt-28 mb-20 font-sans font-semibold">
            Do u want to select this candidate?
          </h3>
          <div className="flex justify-center space-x-4 mt-4">
            <button
              onClick={handleYes}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              YES!
            </button>
            <button
              onClick={handleNo}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              NO!
            </button>
          </div>
        </div>
      </ReactModal>
      <div className="max-w-4xl mx-auto px-4 flex sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col gap-10">
          <div className="flex items-center p-6 gap-10">
            <img
              className="h-24 w-24 rounded-full object-cover border-2 border-gray-300"
              src="https://via.placeholder.com/150"
              alt="Profile"
            />
            <div className="ml-6">
              {candidate.name && (
                <h2 className="text-2xl font-bold text-gray-900">
                  {candidate.name}
                </h2>
              )}

              {candidate.role && (
                <p className="text-lg text-gray-700">{candidate.role}</p>
              )}

              {candidate.city && candidate.state && candidate.country && (
                <p className="text-gray-600">
                  {" "}
                  {candidate.city} {candidate.state}, {candidate.country}
                </p>
              )}
              {candidate.email && (
                <p className="text-gray-600">Email: {candidate.email}</p>
              )}

              {candidate.phone && (
                <p className="text-gray-600">Phone: {candidate.phone}</p>
              )}
            </div>
          </div>
          <div className="px-6 py-4 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              About Me
            </h3>

            {candidate.description && (
              <p className="text-gray-700">{candidate.description}</p>
            )}
          </div>
          <div>
            {resumeUrl && (
              <div className="px-6 py-4 border-t border-gray-200 bg-sky-300 text-center hover:bg-sky-700">
                <a
                  href={resumeUrl}
                  download={`${candidate.name}-resume.pdf`}
                  className="font-mono text-md underline"
                >
                  Download Resume
                </a>
              </div>
            )}
            {resumeUrl && (
              <div className="px-6 py-4 border-t border-gray-200 bg-green-500 text-center hover:bg-green-600">
                <button
                  className="font-mono text-md underline"
                  onClick={popupModal}
                >
                  Select Candidate
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Candidate;
