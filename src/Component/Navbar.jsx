

import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { MyContext } from '../Context/ContextApi'
import { signOut } from 'firebase/auth';
import auth from '../Firebaseconfig/config';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Navbar() {


  const {user,setuser,setloading} = useContext(MyContext);



  console.log("nav ",{user})

  const handelSignOut =  ()=>{
    signOut(auth)
    .then((result)=>{
      setloading(true);
      toast.success("Log out succesfully");
      setuser(null);
      // here i face problem on setuers
    
      
    })
    .catch((error)=>{
      toast.error("we found error " + error.message)
    })

    console.log( 'log out from navbar navbar'
    )
  }






  return (
    <div>

        <section className='flex justify-between mx-auto px-4 border-2  bg-green-300 '>
            <div>
            <i class="ri-speak-line text-4xl" ></i>

            </div>
            <div className='list-none flex space-x-2 p-2'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/startLearning'>start-learning</NavLink>
                <NavLink to='/tutorials'>Tutorials</NavLink>

                <NavLink to='aboutus'>about-us</NavLink>
                <NavLink to='myprofile'> my-profile</NavLink>
            
            </div>
            <div className='p-2'>
              {
                user ? (<div>

                  <button onClick={handelSignOut}>Log out</button>

                </div>)
                :
                (<div>
                  
                  <NavLink to='auth/login'>Log in</NavLink>

                </div>)
              }

                

            </div>
        </section>
        


    </div>
  )
}

export default Navbar