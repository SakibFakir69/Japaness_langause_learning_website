



import React, { createContext, useEffect, useState } from 'react'
import auth from '../Firebaseconfig/config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';

export const MyContext =  createContext();


function ContextApi({children}) {

  const [ error , seterror ] = useState(null);
  const [ loading , setloading ] = useState(true);
  const [ user , setuser ] = useState(null);
  const [name, setname] = useState('');

  const [photoUrl, setphotoUrl] = useState('');




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





    const authInfo ={
      handelReg,seterror,setloading,setuser,
      handelGoogleReg,user, HandelLogin,error,loading
    


    }

    
    




    useEffect(()=>{

      const unscribe = onAuthStateChanged(auth , (currentUser=>{

       if(currentUser)
       {
        setuser(currentUser)
        // setname(currentUser.displayName)
        // setphotoUrl(currentUser.photoURL)
       }
       


      }))

      setloading(false);

      return ()=>{
        unscribe();
      }

    },[])


  return (
    <div>
        <MyContext.Provider value={authInfo}>
            {children}
        </MyContext.Provider>


    </div>
  )
}

export default ContextApi