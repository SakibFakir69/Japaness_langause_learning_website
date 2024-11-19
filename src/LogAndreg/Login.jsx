import React, { useContext } from "react";
import { Link, useNavigate, } from "react-router-dom";
import { MyContext } from "../Context/ContextApi";
import { Container, fromJSON } from "postcss";
import auth from "../Firebaseconfig/config";
import { signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth/web-extension";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function Login() {

  const { HandelLogin,setuser,setlaoding} = useContext(MyContext);


  const navtoHome = useNavigate();

 


  const handelSignIN = (event)=>{
    // log in 
    event.preventDefault();

    const form  = event.target;

    const password = form.password.value;
    const email = form.email.value;
    console.log(email, password);

    signInWithEmailAndPassword(auth,email,password)
    .then((result)=>{
      alert(" succesfully sign in")
      const users = result.user;
      if(users)
      {
        toast.success("Log in Succesfully")
        setuser(users)
        setlaoding(true)
       
        
        navtoHome('/')
      }
    })
    .catch((error)=>{
      toast.error("log in faild")
    })



  }

  const hadnelGoogleLogin = ()=>{
    // handel login 
    HandelLogin()
    .then((result)=>{
      console.log(result.user,"from")

      const users = result.user;
      if(users)
      {
        toast.success("Log in Succesfully")
        setuser(users)
        navtoHome('/')
        setlaoding(true);
    
      }
        
    })
    .catch((error)=>{
      toast.error("Login failed")
    })
  
    

   
    
  }


  return (
    <div className="flex mt-10 justify-center ">
      <ToastContainer/>


      <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl border border-black">

        <form class="card-body" onSubmit={handelSignIN}>
          <div class="form-control">
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
            <input
              type="password"
              placeholder="password"
              name="password"
              class="input input-bordered"
              required
            />
            <label class="label">
              <a href="#" class="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div class="form-control mt-6">

            <button class="btn btn-primary px-6 py-2 ">Login</button>
          </div>

        </form>
        <div className="text-center">
          <button className="px-6 py-2 border rounded-md text-xl bg-emerald-400 mb-4" 
          onClick={hadnelGoogleLogin}
          
          >Sign in with Google</button>
        </div>

        <div className="text-center mb-4">
          <p>You have no account go to 
            <Link className="text-green-600 ml-2" to='/auth/registration'>Registation</Link>
          </p>
        </div>

      </div>
    </div>
  );
}

export default Login;
