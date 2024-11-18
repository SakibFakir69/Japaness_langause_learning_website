

import React, { useContext } from 'react'
import { MyContext } from '../Context/ContextApi'

function Myprofile() {

    const  {user } = useContext(MyContext);
  return (
    <div>
        <h1>hello from profile</h1>
        
    


    </div>
  )
}

export default Myprofile