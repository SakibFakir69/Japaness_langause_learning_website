


import React from 'react'
import WelcomePage from './WelcomePage'
import Navbar from '../Component/Navbar'
import Home from '../Pages/Home'
import { Outlet } from 'react-router-dom'

function Homelayout() {
  return (
    <div>
        <div>
            <WelcomePage/>
        </div>
        <header>
            <Navbar/>
            
        </header>

        <main>
          <Outlet/>
        </main>



    </div>
  )
}

export default Homelayout