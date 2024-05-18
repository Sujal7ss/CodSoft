import React from "react";
import ReactDOM from "react-dom/client";
import logo from "../../assets/logo.svg";
import Button from "../../components/Button";

// import "./index.css";
export default function Navbar() {
  return (
    <header className="navbar h-20 bg-C0DFED ">
      <nav className="flex flex-row justify-evenly items-center p-7">
        <img src={logo} alt="Logo" />
        <div className="w-96">
          <ul
            className="flex flex-row items-center justify-between  text-xs 
                font-bold
                cursor-pointer 
                text-gray-500"
          >
            <li className=" hover:text-gray-900">HOW WE WORK</li>
            <li className=" hover:text-gray-900">PRICING</li>
            <li className=" hover:text-gray-900">DOWNLOAD</li>
            <li className=" hover:text-gray-900">ABOUT US</li>
          </ul>
        </div>
        <div className="w-60 flex flex-row justify-around ">
          <Button style="bg-C0DFED border-blue-300 text-cyan-700">
            Post a Job
          </Button>
          <Button style="bg-0086C">Get Hired</Button>
        </div>
      </nav>
    </header>
  );
}
