import React from "react";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

export default function LoginButton({ style }) {
  return (
    <div className={`w-60 flex flex-row justify-around  ${style}`}>
      <Link to="/employerSignup">
        <Button style="bg-C0DFED border-blue-300 text-cyan-700">
          Post a Job
        </Button>
      </Link>
      <Link to="/candidateSignup">
        <Button style="bg-0086C">Get Hired</Button>
      </Link>
    </div>
  );
}
