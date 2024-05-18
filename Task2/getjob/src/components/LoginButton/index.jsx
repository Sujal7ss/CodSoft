import React from "react";
import Button from "../../components/Button";


export default function LoginButton({style}) {

    return(
        <div className= {`w-60 flex flex-row justify-around  ${style}`}>
          <Button style="bg-C0DFED border-blue-300 text-cyan-700">
            Post a Job
          </Button>
          <Button style="bg-0086C">Get Hired</Button>
        </div>
    );
}