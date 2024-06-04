import React, {useEffect} from "react";
import ReactDOM from "react-dom/client";
import Navbar from "../../components/Navbar";
import LoginButton from "../../components/LoginButton";

export default function LandingPage() {
  function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  function checkCookie() {
    let user = getCookie("username");
    if (user != "") {
      alert("Welcome again " + user);
    } else {
      user = prompt("Please enter your name:", "");
      if (user != "" && user != null) {
        setCookie("username", user, 30);
      }
    }
  }
  // useEffect(() => {
  //   checkCookie();
  // }, []);
  return (
    <>
      
      <div  className="h-screen bg-C0DFED flex flex-row">
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
        <LoginButton style="justify-evenly items-center absolute relative right-64 top-12" />
      </div>
    </>
  );
}