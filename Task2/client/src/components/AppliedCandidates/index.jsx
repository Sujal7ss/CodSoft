import toast from "react-hot-toast";
import axios from "axios";
import { useEffect, useState } from "react";

function AppliedCandidates({ candidates }) {
  const [appliedCandidates, setAppliedCandidates] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      console.log("Fetching data");
      try {
        const { data } = await axios.post(
          `http://localhost:8000/api/candidate/appliedCandidates`,
          { emails: candidates }
        );

        if (data.success) {
          setAppliedCandidates(data.candidates);
        } else {
          return toast.error("No one applied so far");
        }
      } catch (err) {
        console.log("err");
      }
    };
    if (candidates && candidates.length > 0) {
      fetchData();
    }
  }, [candidates]);
  console.log(appliedCandidates[0]);
  return (
    <>
      {appliedCandidates.length > 0 &&
        appliedCandidates.map(
          (candidate, index) =>
            candidate &&
            typeof candidate === "object" && (
              <>
                <section className="bg-gray-100 py-12">
                  <div className="max-w-4xl mx-auto px-4 flex sm:px-6 lg:px-8">
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col gap-10">
                      <div className="flex items-center p-6 gap-10">
                        <img
                          className="h-24 w-24 rounded-full object-cover border-2 border-gray-300"
                          src="https://via.placeholder.com/150"
                          alt="Profile"
                        />
                        <div className="ml-6">
                          
                          {candidate.name && <h2 className="text-2xl font-bold text-gray-900">
                              {candidate.name}
                            </h2>}
                            
                          

                          
                          {candidate.role && (
                            <p className="text-lg text-gray-700">{candidate.role}</p>
                          )}

                          
                          {candidate.city && candidate.state && candidate.country && (
                            <p className="text-gray-600">
                              {" "}
                              {candidate.city} {candidate.state}, {candidate.country}
                            </p>
                          )}
                          {candidate.email && <p className="text-gray-600">Email: {candidate.email}</p>}
                          

                          
                          {candidate.phone && (
                            <p className="text-gray-600">Phone: {candidate.phone}</p>
                          )}

                          <div className="flex mt-4 space-x-4">
                            <a
                              href="https://www.linkedin.com/in/johndoe"
                              className="text-blue-500 hover:text-blue-700"
                            >
                              {/* <FaLinkedin size={24} /> */}
                            </a>
                            <a
                              href="https://github.com/johndoe"
                              className="text-gray-900 hover:text-gray-700"
                            >
                              {/* <FaGithub size={24} /> */}
                            </a>
                            <a
                              href="https://twitter.com/johndoe"
                              className="text-blue-400 hover:text-blue-600"
                            >
                              {/* <FaTwitter size={24} /> */}
                            </a>
                          </div>
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
                      
                    </div>
                  </div>
                </section>
              </>
            )
        )}
    </>
  );
}

export default AppliedCandidates;
