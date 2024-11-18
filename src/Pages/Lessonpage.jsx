


import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'


function Lessonpage() {

    const gotToLearning = useNavigate();



  return (
    <div>
        <h1>This is lesson page</h1>



        <button onClick={()=>gotToLearning('/startLearning')}> Start Learning</button>


    </div>
  )
}

export default Lessonpage