import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homelayout from './Homelayout/Homelayout.jsx'
import Errorpage from './Error/Errorpage.jsx'
import ContextApi from './Context/ContextApi.jsx'
import Home from './Pages/Home.jsx'
import StartLearning from './Pages/StartLearning.jsx'
import Toutorails from './Pages/Toutorails.jsx'
import AuthLayout from './LogAndreg/AuthLayout.jsx'
import Login from './LogAndreg/Login.jsx'
import Registration from './LogAndreg/Registration.jsx'



const route =createBrowserRouter([
  {
    path : '/',
    element : <Homelayout/>,
    children : [
      {
        path : '/',
        element : <Home/>
      },
      {
        path : '/startLearning',
        element :<StartLearning/>
      },
      {
        path : '/tutorials',
        element : <Toutorails/>
      }
    ]


  },
 
  // auth part 
  {
    path : 'auth',
    element : <AuthLayout/>,
    children:[
      {
        path : '/auth/login',
        element :<Login/>
      },
      {
        path : '/auth/registration',
        element : <Registration/>
      }
    ]
    
  },
  {
    path : '*',
    element :<Errorpage/>
  },
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextApi>
      
    <RouterProvider router={route}/>
    </ContextApi>


  </StrictMode>,
)
