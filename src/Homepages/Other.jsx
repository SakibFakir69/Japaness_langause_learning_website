import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function Other() {
  const [counter, setcounter] = useState(59);

  useEffect(() => {
    const interval = setInterval(() => {
      setcounter((prev) => (prev > 0 ? prev - 1 : 59));
    }, 1000);

    return () => clearInterval(interval);
  });

  const book = ()=>{
    toast.success("booking Done!")
    
  }

  return (

    <div className="flex justify-center md:grid-cols-2 space-y-3  mt-10 border p-4 gap-4 bg-[url(/cool3.png)] rounded-md ">
      <ToastContainer/>

      <div className="border p-2 rounded-md flex  flex-col  text-center justify-center items-center">
      <div>
        <h2 className="text-4xl font-semibold">45% Offer Going on Book now a live session</h2>
      </div>
      <span className="countdown font-mono mt-4 text-2xl text-center flex justify-center">
        <span style={{ "--value": 10 }}></span>h
        <span style={{ "--value": 24 }}></span>m
        <span style={{ "--value": counter }}></span>s
      </span>

      <br></br>
      <div>
      <button className="px-6 mt-4  py-2 border rounded-md shadow-lg hover:bg-green-400" onClick={book}>Book</button>
      </div>
      </div>


    </div>
  );
}

export default Other;
