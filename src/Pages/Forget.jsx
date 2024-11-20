import { sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../Firebaseconfig/config";
import { NavLink, useNavigate } from "react-router-dom";

function Forget() {


    const [ email , setemail ] = useState();

    const gotToHome  = useNavigate();


    const hadenlResTPassword = (e)=>{
        e.preventDefault();
        
        if(!email)
        {
            toast.error("Enter your email");
            return ;
        }


        sendPasswordResetEmail(auth,email)
        .then((result)=>{
            toast.success("Password reset email sent successfully!");
            console.log("forget");
            window.location.href="https://mail.google.com";
        })
        .catch((error)=>{
            toast.success(`Error ${error.message}`)
        })


    }



  return (
    <div className="px-4 mt-10 rounded-md">
      <div className="border bg-black rounded-md">
        <form className="flex flex-col space-y-4 justify-center items-center mt-20 px-4" onClick={hadenlResTPassword}>
            <ToastContainer/>
          <div>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              onChange={(e)=> setemail(e.target.value)}
              className="border-2 text-center px-2 py-2 rounded-md"
            />
          </div>

          <div className="">
            <button className="border p-2 rounded-md bg-green-400 mb-6"   >
              Reset password

            </button>

          </div>

        </form>
      </div>
      <div className="mt-10 flex justify-center ">

        <div className="border px-4 py-2 rounded-md shadow-lg">
        <button onClick={()=> gotToHome("/")}> Back to home</button>
        </div>
      </div>

    </div>
  );
}

export default Forget;
