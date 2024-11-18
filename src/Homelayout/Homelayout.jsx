


import React, { useContext } from 'react'
import WelcomePage from './WelcomePage'
import Navbar from '../Component/Navbar'
import Home from '../Pages/Home'
import { Outlet } from 'react-router-dom'
import { MyContext } from '../Context/ContextApi'
import { ToastContainer } from 'react-toastify'
import Footer from '../Component/Footer'
function Homelayout() {
  const {user} = useContext(MyContext);




  return (
    <div>

      <div>
     
      </div>
        <div>
            {
              user ? <WelcomePage/> : <div></div>
            }
        </div>
        <header>
            <Navbar/>
            
        </header>

        <main>
          <Outlet/>
        </main>



        <footer>
          <Footer/>
        </footer>



    </div>
  )
}

export default Homelayout