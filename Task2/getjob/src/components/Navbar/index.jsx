import React from "react";
import ReactDOM from "react-dom/client";
import logo from "../../assets/logo.svg";
import Logo from "../Logo"

import LoginButton from "../LoginButton";

// import "./index.css";
export default function Navbar() {
  return (
    <header className="navbar h-20 bg-C0DFED sticky top-0">
      <nav className="container flex flex-row justify-evenly items-center p-7 ">
        <Logo />
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
        <LoginButton />
      </nav>
    </header>
  );
}
