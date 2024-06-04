import { useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function EmployerSignup() {
  const navigate = useNavigate()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [passwd, setPasswd] = useState("");
  // const [authenticated, setAuthenticated] = useState(false);

  const signup = async (e) => {
    e.preventDefault();
    if (!name) {
      return toast.error("Please enter a name");
    }
    if (!email) {
      return toast.error("Please enter an email");
    }
    if (!passwd) {
      return toast.error("Please enter a password");
    }

    try {
      const { data } = await axios.post(
        "http://localhost:8000/api/employer/signup",
        {
          name: name,
          email: email,
          password: passwd,
        }
      );

      if (data.success) {
        // setAuthenticated(true);
        toast.success(data.message);
        navigate("/employerLogin")
      }
      //  return toast.error(data.message);
    } catch (err) {
      return toast.error(err.message);
    }
  };

  // if (authenticated) {
    
  // }

  return (
    <>
      <div className="">
        <div className="p-8 lg:w-1/2 mx-auto">
          <div className="bg-gray-100 rounded-b-lg py-12 px-4 lg:px-24">
            <h1 className="text-center text-sm text-gray-500 font-semibold">
              REGISTER HERE AS EMPLOYER!!!
            </h1>

            <form
              className="mt-6"
              method="post"
              onSubmit={(e) => {
                signup(e);
              }}
            >
              <div className="relative mb-3">
                <input
                  className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Name"
                  name="name"
                  required
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
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
              <div className="relative">
                <input
                  className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                  id="email"
                  type="text"
                  placeholder="Email"
                  name="email"
                  required
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
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
                  id="password"
                  type="text"
                  placeholder="Password"
                  name="password"
                  onChange={(e) => {
                    setPasswd(e.target.value);
                  }}
                  required
                />
                <div className="absolute left-0 inset-y-0 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 ml-3 text-gray-400 p-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
                  </svg>
                </div>
              </div>

              <div className="mt-4 flex items-center text-gray-500">
                <input
                  type="checkbox"
                  id="remember"
                  name="remember"
                  className="mr-3"
                />
                <label htmlFor="remember">Remember me</label>
              </div>
              <div className="flex items-center justify-center mt-8">
                <button
                  className="text-white py-2 px-4 uppercase rounded bg-indigo-500 hover:bg-indigo-600 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
                  type="submit"
                >
                  Sign Up
                </button>
              </div>
              <hr className="m-4" />
              <div className="flex items-center justify-center mt-5">
                <p className=" text-gray-500 ">HAVE A ACCOUNT ?!</p>
                <Link
                  to="/employerLogin"
                  className="text-white py-2 px-4 ml-3 uppercase rounded bg-green-400 hover:bg-green-500 shadow hover:shadow-lg font-medium transition transform  "
                >
                  Login
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default EmployerSignup;
