import React from "react";
import Logo from "../Logo";
import LoginButton from "../LoginButton";
import NavbarDetails from "../../assets/NavbarDetails";
import Button from "../../components/Button";
import { Link, NavLink, useNavigate } from "react-router-dom";
// sconst navbar = NavbarDetails.Homepage.Navbar;

export default function Navbar({ pages }) {
  const navigate = useNavigate();
  const navbar = NavbarDetails[pages].Navbar;
  const button = NavbarDetails[pages].Button;

  function newJobHandler(){
    
    return navigate("/postJob")
  }
  return (
    <header className="navbar h-20 bg-C0DFED  top-0">
      <nav className="container flex flex-row justify-evenly items-center p-7 ">
        <Link to="/">
          <Logo />
        </Link>
        <div className="w-fit ">
          <ul
            className="flex flex-row w-full gap-10 flex-wrap items-center justify-between  text-xs 
                font-bold
                cursor-pointer 
                text-gray-500"
          >
            {navbar.map((item) => (
              <NavLink key={item} className=" hover:text-gray-900" to="/">
                {item}
              </NavLink>
            ))}
          </ul>
        </div>
        {button === "LoginButton" && <LoginButton />}
        {button.name === "Profile" && <Button onSelect={newJobHandler}>Post a Job</Button>}
      </nav>
    </header>
  );
}
