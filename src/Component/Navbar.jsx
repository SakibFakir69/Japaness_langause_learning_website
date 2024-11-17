

import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { MyContext } from '../Context/ContextApi'

function Navbar() {


  const {user} = useContext(MyContext);



  console.log("nav ",{user})






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

                <li>about-us</li>
                <li> my-profile</li>
            
            </div>
            <div className='p-2'>
                <button className='px-9 py-2 border-2 rounded-md bg-orange-300 text-xl p-2'>Log in</button>
            </div>
        </section>
        


    </div>
  )
}

export default Navbar