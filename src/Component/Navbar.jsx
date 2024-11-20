import React, { useContext, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { MyContext } from "../Context/ContextApi";
import { signOut } from "firebase/auth";
import auth from "../Firebaseconfig/config";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Navbar() {
  const { user, setuser, setloading } = useContext(MyContext);

  console.log("nav ", { user });

  const ToggleMenu = () => {
    const menu = document.getElementById("menu");
    menu.classList.toggle("hidden");
  };

  const handelSignOut = () => {
    signOut(auth)
      .then((result) => {
        setloading(true);
        toast.success("Log out succesfully");
        setuser(null);
        // here i face problem on setuers
      })
      .catch((error) => {
        toast.error("we found error " + error.message);
      });

    console.log("log out from navbar navbar");
  };

  const homeloc = useLocation().pathname;
  const home = useNavigate();


  const links = <>
  <li>   <NavLink to={'/'}>Home</NavLink></li>
  <li>   <NavLink to={'/startLearning'}> Start Learning</NavLink></li>

   <li><NavLink to={'/tutorials'}>Toutorails</NavLink></li>
   <li><NavLink to={'/aboutus'}> About Us</NavLink></li>
   <li><NavLink to={`/myprofile`}>Profile</NavLink></li>
  
  </>




  return (
    <div className="px-2 rounded ">

      <div class="navbar bg-base-100 border">
        <div class="navbar-start">
          <div class="dropdown">
            <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabindex="0"
              class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a class="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal px-1">
            {links}

          </ul>
        </div>
        <div class="navbar-end">
          <a class="btn">Button</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
