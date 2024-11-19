import React from "react";

import { Link, NavLink, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function StartLearning() {
  let card = 10;

  const gottoTouto = useNavigate();

  return (
    <div className="mt-10 bg-[url(/cool4.png)] rounded-md ">
      <ToastContainer/>
      <div className="text-center">
        <h1 className="text-2xl font-semibold text-white ">Start you Journy Now</h1>
        <p className="text-gray-300">Expand your vocabulary and master new skills!</p>
      </div>
      <hr className="mt-2"></hr>

      {/* statice 10 card */}

      <div className="grid md:grid-cols-3 gap-4 sm:grid-cols-2 justify-around px-4 mt-10">
        <div className="border p-4 text-xl font-semibold cursor-pointer rounded-md bg-black text-white">
        <NavLink to={`/lessonpage/${1}`}>Lesson - 1</NavLink>
        {/* gave driect id beacause get params from lesson and view data this lesson */}
          
          
          
        </div>
        <div className="border p-4 text-xl font-semibold cursor-pointer rounded-md bg-black text-white">
        <NavLink to={`/lessonpage/${2}`}>Lesson - 2</NavLink>
        </div>

        <div className="border p-4 text-xl font-semibold cursor-pointer rounded-md bg-black text-white">
        
          <NavLink to={`/lessonpage/${3}`}>Lesson - 3</NavLink>

        </div>

        <div className="border p-4 text-xl font-semibold cursor-pointer rounded-md bg-black text-white">
        <NavLink to={`/lessonpage/${4}`}>Lesson - 4</NavLink>
        </div>

        <div className="border p-4 text-xl font-semibold cursor-pointer rounded-md bg-black text-white">
        <NavLink to={`/lessonpage/${5}`}>Lesson - 5</NavLink>
        </div>
        <div className="border p-4 text-xl font-semibold cursor-pointer rounded-md bg-black text-white">
        <NavLink to={`/lessonpage/${6}`}>Lesson - 6</NavLink>
        </div>
        <div className="border p-4 text-xl font-semibold cursor-pointer rounded-md bg-black text-white">
        <NavLink to={`/lessonpage/${7}`}>Lesson - 7</NavLink>
        </div>
        <div className="border p-4 text-xl font-semibold cursor-pointer rounded-md bg-black text-white">
        <NavLink to={`/lessonpage/${8}`}>Lesson - 8</NavLink>
        </div>
        <div className="border p-4 text-xl font-semibold cursor-pointer rounded-md bg-black text-white">
        <NavLink to={`/lessonpage/${9}`}>Lesson - 9</NavLink>
        </div>

        <div className="border p-4 text-xl font-semibold cursor-pointer rounded-md bg-black text-white">
        <NavLink to={`/lessonpage/${10}`}>Lesson - 10</NavLink>
        </div>

        <div className="border p-4 text-xl font-semibold cursor-pointer rounded-md bg-black text-white" onClick={()=>toast.error("This lesson coming soon")}>
          Lesson - 11
        </div>
        <div className="border p-4 text-xl font-semibold cursor-pointer rounded-md bg-black text-white" onClick={()=> toast.error("this lesson coming soon")}>
          Lesson - 12
        </div>

        <hr />
      </div>
      <hr></hr>

      <div className="mt-10 flex flex-col text-center justify-center items-center space-y-4">
        <h1 className="text-4xl font-semibold text-center text-white">
          {" "}
          Learning the alphabet
        </h1>
        <div className="grid md:grid-cols-2 space-y-5 w-full gap-6 h-full">
          <iframe 
           
            className="rounded-md w-full h-[400px] p-10 shadow-md"

            src="https://www.youtube.com/embed/hsLYD1Jyf3A?si=FFXOuSXGoWNF7Y8R"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>

          <iframe
           
            className="rounded-md w-full h-[400px] p-10 -mt-2 shadow-md"
          
            src="https://www.youtube.com/embed/SLmEdQ1pcAM?si=gsDSlbHM03kIt7Qe"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className="text-center  mt-10 ">

        
      <button onClick={()=> gottoTouto('/tutorials')} className="text-xl font-semibold px-6 py-2 border rounded-md bg-purple-500 mb-4">View More</button>

      
      </div>
    </div>
  );
}

export default StartLearning;
