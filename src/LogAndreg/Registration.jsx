import React, { useContext, useState } from "react";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { MyContext } from "../Context/ContextApi";
import { Container } from "postcss";
import { GoogleAuthProvider, updateProfile } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";

import auth from "../Firebaseconfig/config";
import { toast, ToastContainer  } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Registration() {
  const { handelReg, handelGoogleReg, setuser , seterror,error,setloading } = useContext(MyContext);

  const Provider = new GoogleAuthProvider();


  const passValadition = (password)=>{

    const uppercase = /[A-Z]/.test(password);
    const lowercase = /[a-z]/.test(password);

    const passlen = password.length>=6;
 

    if (!uppercase) {
      return "Password must have at least one uppercase letter.";
    }
    if (!lowercase) {
      return "Password must have at least one lowercase letter.";
    }
    if(!passlen)
    {
      return 'Enter your 6 digits Character';
    }
   
  
    // return "";

  


  }


  const [ passwordvisible , setpaswordvisible ] = useState(false);

  const showpass = ()=>{
    setpaswordvisible(prev =>!prev);

  }


 

  



  const navtoHome = useNavigate();

  const hadnelGoogle = () => {

    setloading(true)

    
    handelGoogleReg()
      .then((result) => {

        navtoHome("/");
        const users = result.user;
        setloading(false)
        setuser(users);
        toast.success("Succesfully gogle Regsitation");



      })
      .catch((error) => {

        toast.error("Succesfully gogle Regsitation")
      });
  };

  const handelRegistration = (event) => {

    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;

    const PhotoUrl = event.target.Photo_URL.value;
    const password = event.target.password.value;

    const passworderror = passValadition(password);

    if(passworderror)
    {
     
      seterror(passworderror);
      return ;
    }


    setloading(true);


    
    

    


  



    handelReg(email, password)
      .then((result) => {
        const users = result.user;
        toast.success("Succesfully  Regsitation")
        if (users) {
          updateProfile(users, { displayName: name, photoURL: PhotoUrl })
            .then(() => {

     
              setuser(users);
              navtoHome("/");
              setloading(false)
  
              
       

            })
            .catch((error) => {
              toast.error("Succesfully Profileupdated failed")
            });
        }
      })
      .catch((error) => {

        toast.error("Regisataion failed")
      });

  };

  return (
    // ( Name, Email, Photo-URL, Password & Register Button )
    <div className="flex  justify-center ">
      <ToastContainer/>
    
      <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mt-10 border border-black p-4">
        <h2 className="text-2xl font-semibold text-center ">
          Registration Now
        </h2>
        

        <form class="card-body  rounded " onSubmit={handelRegistration}>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Name</span>
            </label>

            <input
              type=""
              name="name"
              className="px-6 py-2 border"
              placeholder="Enter your name"
              required
            />

            <label class="label">
              <span class="label-text">Photo-URL</span>
            </label>

            <input
              type=""
              name="Photo_URL"
              className="px-6 py-2 border"
              placeholder="Enter your photo-URL"
            />

            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              class="input input-bordered"
              required
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Password</span>
            </label>

            <div className="border flex justify-between py-2  ">

            <input
              type={passwordvisible ? "text" : "password"}
              placeholder="password"
              name="password"
             
              required
             

            />
            <i class="ri-eye-line" onClick={showpass}></i>

            </div>




            <p className="text-red-500 text-xl">{error && error}</p>

            <label class="label">
              <a href="#" class="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div class="form-control mt-6">
            <button class="btn btn-primary">Register</button>
          </div>
        </form>
        <div className="flex justify-center flex-col">
          <p className="text-xl text-center">or</p>
          <button
            className="px-4 py-2 bg-black rounded-md text-xl text-white"
            onClick={hadnelGoogle}
          >
            Registration With Google
          </button>
        </div>

        <div className="flex text-center text-xl mt-4">
          <p className="text-center ml-4">
            You have already account{" "}
            <NavLink
              to="/auth/login"
              className={`text-green-600  text-center mt-2 `}
            >
              Login
            </NavLink>
          </p>
        </div>

        {/* <Container/> */}
      </div>
    </div>
  );
}

export default Registration;
