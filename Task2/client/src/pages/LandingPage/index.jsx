import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "../../components/Navbar";
import LoginButton from "../../components/LoginButton";

export default function LandingPage() {
  return (
    <>
      <Navbar pages="Homepage"/>
      <div className="h-screen bg-C0DFED flex flex-row">
        <div className="relative left-36">
          <span className="text-7xl relative top-40 font-bold bg-013C5E">
            Connect.
          </span>
          <br />
          <span className="text-7xl relative top-40 font-bold bg-013C5E">
            Merge.
          </span>
          <span className="text-7xl relative top-40 font-bold bg-013C5E">
            Work
          </span>
        </div>
        <LoginButton
          style="justify-evenly items-center absolute relative right-64 top-12"
        />
      </div>
    </>
  );
}
