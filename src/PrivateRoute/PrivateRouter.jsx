import React, { useContext } from "react";
import { MyContext } from "../Context/ContextApi";
import { Navigate } from "react-router-dom";

function PrivateRouter({ children }) {
  const { user, loading } = useContext(MyContext);

  /// private jai user theka jodi true hoye toi acces korta parab oi child
  // n a hola paraba na


  // solve loading 
  // solve bar 
  // slider probelm 
  // then review ready to upload

  

  if (loading) {

    return  <span class="loading loading-ring loading-xs"></span>
  }

  

  if (user) {
    return children;
  }

  // jodi user true hoye tokon children a jaba
  // na pass korea auth/login jaba

  return <Navigate to="/auth/login"></Navigate>;
}

export default PrivateRouter;
