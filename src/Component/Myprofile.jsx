import React, { useContext } from "react";
import { MyContext } from "../Context/ContextApi";
import { useNavigate } from "react-router-dom";

function Myprofile() {
  const { user } = useContext(MyContext);

  const navToUpdateProfile = useNavigate();
  const gotToHome = useNavigate();

  // loading

  return (
    <div className="bg-[url(/cool4.png)] bg-cover bg-center min-h-screen">
      <h1 className="text-center p-10 text-white text-2xl bg-black">
        {" "}
       <span className="text-green-400">Welcome</span> : {user.displayName}
      </h1>
      <div className="flex justify-center flex-col items-center mt-10 ">
        <p className="text-white mb-3"> your info : </p>

        <div className="border  rounded-md shadow-lg backdrop-blur-md p-4">
          <div className="flex justify-center flex-col items-center mt-4">
            <img src={user.photoURL} className="w-1/2 rounded-full " />
            <p className="text-xl text-white font-semibold">
              Name : {user.displayName}
            </p>
            <hr></hr>
            <p className="text-white text-xl font-semibold">
              Email : {user.email}
            </p>
          </div>

          <button
            onClick={() => navToUpdateProfile("/updateprofile")}
            className="text-xl text-center ml-12 mt-10 px-6 py-2 border bg-black text-white rounded-md mb-4 "
          >
            Update Profile
          </button>
        </div>
      </div>

      <div className="flex justify-center mt-20">
        <button
          className="px-6 py-2 border rounded-md text-xl bg-white shadow-lg "
          onClick={() => gotToHome("/")}
        >
          Back to home
        </button>
      </div>

    </div>
  );
}

export default Myprofile;
