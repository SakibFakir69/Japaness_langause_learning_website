import React, { useContext } from "react";
import { MyContext } from "../Context/ContextApi";
import { Navigate } from "react-router-dom";

function PrivateRouter({ children }) {
  const { user, loading } = useContext(MyContext);

  /// private jai user theka jodi true hoye toi acces korta parab oi child
  // n a hola paraba na

  // if (!loading) {

  //   return (
  //     <div className="flex justify-center items-center ">
  //       <span class="loading loading-ring loading-xs"></span>
  //       <span class="loading loading-ring loading-sm"></span>
  //       <span class="loading loading-ring loading-md"></span>
  //       <span class="loading loading-ring loading-lg"></span>
  //     </div>
  //   );
  // }

  if (user) {
    return children;
  }

  // jodi user true hoye tokon children a jaba
  // na pass korea auth/login jaba

  return <Navigate to="/auth/login"></Navigate>;
}

export default PrivateRouter;
