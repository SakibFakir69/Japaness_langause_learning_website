



import React, { createContext, useEffect, useState } from 'react'
import auth from '../Firebaseconfig/config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';

export const MyContext =  createContext();


function ContextApi({children}) {

  const [ error , seterror ] = useState(null);

  const [ loading , setloading ] = useState(false);
  const [ user , setuser ] = useState(null);





  const handelReg = (email , password)=>
  {
    // create user

    return createUserWithEmailAndPassword(auth,email,password)
  }
  const Provider = new GoogleAuthProvider();

  const handelGoogleReg = ()=>{
    return signInWithPopup(auth,Provider);
  }
  // log in

  const HandelLogin = ()=>{
    return signInWithPopup(auth,Provider);
  }








    
    




    useEffect(()=>{

      const unscribe = onAuthStateChanged(auth , (currentUser)=>{

       setuser(currentUser)
       setloading(false)
     
       


      })


     

   

      return ()=>{
        unscribe();
      }

    },[])

    console.log(loading,"from context")

    const authInfo ={
      handelReg,seterror,setloading,setuser,
      handelGoogleReg,user, HandelLogin,error,loading
    


    }


  return (
    <div>
        <MyContext.Provider value={authInfo}>
            {children}
        </MyContext.Provider>


    </div>
  )
}

export default ContextApi