import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "../../components/Navbar/index";
export default function Homepage() {
  return <div>
    <Navbar />
    <div className="h-96 bg-C0DFED ">
        <span className="text-7xl relative top-40 font-bold bg-013C5E">Connect.</span><br/>
        <span className="text-7xl relative top-40 font-bold bg-013C5E">Merge.</span>
        <span>Work</span>
    </div>
  </div>;
}
