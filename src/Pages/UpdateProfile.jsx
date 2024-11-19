import React, { useContext, useState } from "react";
import auth from "../Firebaseconfig/config";
import { updateProfile } from "firebase/auth";
import { Navigate, useNavigate } from "react-router-dom";
import { MyContext } from "../Context/ContextApi";
function UpdateProfile() {

    const {user } = useContext(MyContext);

  const navtoprofile =  useNavigate();

  const [name, setname] = useState('');

  const [photoUrl, setphotoUrl] = useState('');

  console.log(name,photoUrl);



  const handelUpdateProfile = (event)=>{
    event.preventDefault();

    updateProfile(user,{
        displayName:name || user.displayName,
        photoURL : photoUrl || user.photoURL,
    })
    .then((result)=>{
        navtoprofile("/myprofile");
        alert("update done")
    })
    .catch((error)=>{
        console.log("updated failded")
    })

  }






  return (
    <div className="flex justify-center flex-col ">

      <h1>Update Profile</h1>

      <form className="border  flex flex-col justify-center items-center mt-10 space-y-3 m" onSubmit={handelUpdateProfile} >

        <div className="flex mt-4">
          <label>Name : </label>
          <input
            type="text"
            name="name"
            className="border"
            value={name}
            onChange={(e)=> setname(e.target.value)}
   

          />
        </div>
        <div>
        <label>PhotoUrl : </label>
          
          <input
            type="photUrl"
            className="border"
            value={photoUrl}
            onChange={(e)=> setphotoUrl(e.target.value)}
     
      
          />
        </div>

        <button type="submit">update info</button>
      </form>
    </div>
  );
}

export default UpdateProfile;
