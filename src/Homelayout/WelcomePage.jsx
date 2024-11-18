
import React from 'react'
import { useContext } from 'react';
import { MyContext } from '../Context/ContextApi';
MyContext
function WelcomePage() {

  const {user} = useContext(MyContext);

  console.log(user, "welcome")


  return (
    <div>
        {/* make condition if use login */}
        <h1 className='text-2xl font-semibold text-center'>
          Welcome : {user?.displayName || user.name || "guest"}

        </h1>


    </div>
  )
}

export default WelcomePage