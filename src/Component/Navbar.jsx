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

  return (
    <div className=" ">

      <section className="flex  justify-between mx-auto m  border-2  rounded-md bg-gradient-to-r from-gray-600 to-gray-600 text-white px-2">
        <div className="mt-2 cursor-pointer " onClick={()=> home('/')}>

          <img src='./b.png' className="md:w-20 w-12  h-10 md:h-20"/>



        </div>

        <div className="list-none  space-x-2 p-2 md:visible invisible mt-4">
          <NavLink
            to="/"
            className={`${
              homeloc === "/" && "bg-black text-white p-2 rounded-md"
            }`}
          >
            Home
          </NavLink>
          <NavLink
            to="/startLearning"
            className={`${
              homeloc === "/startLearning" &&
              "bg-black p-2 text-white rounded-md"
            }`}
          >
            start-learning
          </NavLink>
          <NavLink
            to="/tutorials"
            className={`${
              homeloc === "/tutorials" && "bg-black p-2 text-white rounded-md"
            }`}
          >
            Tutorials
          </NavLink>

          <NavLink
            to="aboutus"
            className={`${
              homeloc === "/aboutus" && "bg-black p-2 text-white rounded-md"
            }`}
          >
            about-us
          </NavLink>

          <NavLink
            to="myprofile"
            className={`${
              homeloc === "/myprofile" && "bg-black p-2 text-white rounded-md"
            }`}
          >
            {" "}
            my-profile
          </NavLink>
        </div>

        <div className="p-4  gap-4  ">
          <div className="text-black visible md:invisible text-xl md:mr-0  ">
            <div className="dropdown " id="menu2">
              <div
                tabIndex={0}
                onClick={ToggleMenu}
                role="button"
                className="btn btn-ghost  btn-circle"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </div>

              <ul
                id="menu"
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-4 shadow md: m-0  "
              >
                <li>
                  <NavLink
                    to="/"
                    className={`${
                      homeloc === "/" && "bg-black text-white p-2 rounded-md"
                    }`}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/startlearning"
                    className={`${
                      homeloc === "/startlearning" &&
                      "bg-black p-2 text-white rounded-md"
                    }`}
                  >
                    start learning
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/tutorials"
                    className={`${
                      homeloc === "/tutorials" &&
                      "bg-black p-2 text-white rounded-md"
                    }`}
                  >
                    Tutorials
                  </NavLink>
                </li>
                <li>
                  <a>About</a>
                </li>
                <li>
                  <NavLink
                    to="aboutus"
                    className={`${
                      homeloc === "/aboutus" &&
                      "bg-black p-2 text-white rounded-md"
                    }`}
                  >
                    about-us
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="myprofile"
                    className={`${
                      homeloc === "/myprofile" &&
                      "bg-black p-2 text-white rounded-md"
                    }`}
                  >
                    {" "}
                    my-profile
                  </NavLink>
                </li>
                <li
                  onClick={ToggleMenu}
                  className="cursor-pointer px-3 border "
                >
                  Close
                </li>
                <div>
                  {user ? (
                    <div>
                      <button
                        onClick={handelSignOut}
                        className=" rounded px-4 border"
                      >
                        Log out
                      </button>
                    </div>
                  ) : (
                    <div className="border">
                      <NavLink to="auth/login" className={`border `}>
                        {" "}
                        Log in
                      </NavLink>
                    </div>
                  )}
                </div>
              </ul>
            </div>
          </div>
          {/* logic */}

          {user ? (
            <div className="md:visible invisible -mt-8">
              <button
                onClick={handelSignOut}
                className="px-8 py-1 border -mt-10 rounded-md"
              >
                Log out
              </button>
            </div>
          ) : (
            <div>
              <NavLink to="auth/login" className={`md:visible invisible`}>
                Log in
              </NavLink>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Navbar;
