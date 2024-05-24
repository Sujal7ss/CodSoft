import React from "react";
import ReactDOM from "react-dom/client";
import Button from "../Button"
import Logo from "../Logo"
import profile from "../../assets/profile.png"


// import "./index.css";
export default function ApplicantsNavbar() {
  return (
    <header className="navbar h-4 sm:h-20 bg-C0DFED  top-0 ">
      <nav className="container w-11/12 flex-col sm:flex sm:flex-row justify-evenly items-center p-7 ">
        <Logo />
        <div className=" sm:w-96">
          <ul
            className="flex flex-row items-center justify-between  text-xs 
                font-bold
                cursor-pointer 
                text-gray-500"
          >
            <li className=" hover:text-gray-900">ACTIVE JOBS</li>
            <li className=" hover:text-gray-900">APPLIED JOBS</li>
            <li className=" hover:text-gray-900">SAVED JOBS</li>
            <li className=" hover:text-gray-900">SEARCH</li>
          </ul>
        </div>
        <Button img={profile}></Button>
      </nav>
    </header>
  );
}
