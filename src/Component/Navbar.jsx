import React, { useContext, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { MyContext } from "../Context/ContextApi";
import { signOut } from "firebase/auth";
import auth from "../Firebaseconfig/config";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Navbar() {
  const { user, setuser, setloading ,loading} = useContext(MyContext);

  console.log("nav ", { user });

  const ToggleMenu = () => {
    const menu = document.getElementById("menu");
    menu.classList.toggle("hidden");
  };

  const handelSignOut = () => {
    setloading(true);
    signOut(auth)
      .then((result) => {
        
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
  <li className="">   <NavLink to={'/'}>Home</NavLink></li>
  <li>   <NavLink to={'/startLearning'}> Start Learning</NavLink></li>

   <li><NavLink to={'/tutorials'}>Toutorails</NavLink></li>
   <li><NavLink to={'/aboutus'}> About Us</NavLink></li>
   <li><NavLink to={`/myprofile`}>Profile</NavLink></li>
  
  </>




  return (
    <div className="px-2 rounded  ">

      <div class="navbar border bg-lime-200 rounded">
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
          <i onClick={()=> home('/')}  class="ri-presentation-line text-2xl md:text-4xl cursor-pointer px-2"></i>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal px-1">
            {links}

          </ul>
        </div>
        
        <div class="navbar-end mt-4">
          {/* <a class="btn">Button</a> */}

          {user ? (
            <div className="">
              <button
                onClick={handelSignOut}
                className="md:px-8 px-4 py-1 border -mt-10 rounded-md btn"
              >
                Log out
              </button>
            </div>
          ) : (
            <div>
              <NavLink to="auth/login" className={`btn bg-green-300`}>
                Log in
              </NavLink>
            </div>
          )}

          
        </div>


      </div>
    </div>
  );
}

export default Navbar;
