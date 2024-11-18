

import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { MyContext } from '../Context/ContextApi'
import { signOut } from 'firebase/auth';
import auth from '../Firebaseconfig/config';
function Navbar() {


  const {user} = useContext(MyContext);



  console.log("nav ",{user})

  const handelSignOut = async ()=>{
    try {
      const result = await signOut(auth);
      alert("Sign out succesfully");
    } catch (error) {
      alert("we found a error in sign out");
    }

    console.log( 'navbar'
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