import React from "react";

import { Link, useNavigate } from "react-router-dom";

function StartLearning() {
  let card = 10;

  const gottoTouto = useNavigate();

  return (
    <div className="mt-10">
      <div className="text-center">
        <h1 className="text-2xl font-semibold">Start you Journy Now</h1>
        <p>Expand your vocabulary and master new skills!</p>
      </div>
      <hr className="mt-2"></hr>

      {/* statice 10 card */}

      <div className="grid sm:grid-cols-5 gap-4 justify-around px-4 mt-10">
        <div className="border p-4 text-xl font-semibold cursor-pointer rounded-md bg-black text-white">
          Lesson - 1
        </div>
        <div className="border p-4 text-xl font-semibold cursor-pointer rounded-md bg-black text-white">
          Lesson - 2
        </div>
        <div className="border p-4 text-xl font-semibold cursor-pointer rounded-md bg-black text-white">
          Lesson - 3
        </div>
        <div className="border p-4 text-xl font-semibold cursor-pointer rounded-md bg-black text-white">
          Lesson - 4
        </div>

        <div className="border p-4 text-xl font-semibold cursor-pointer rounded-md bg-black text-white">
          Lesson - 5
        </div>
        <div className="border p-4 text-xl font-semibold cursor-pointer rounded-md bg-black text-white">
          Lesson - 6
        </div>
        <div className="border p-4 text-xl font-semibold cursor-pointer rounded-md bg-black text-white">
          Lesson - 7
        </div>
        <div className="border p-4 text-xl font-semibold cursor-pointer rounded-md bg-black text-white">
          Lesson - 8
        </div>
        <div className="border p-4 text-xl font-semibold cursor-pointer rounded-md bg-black text-white">
          Lesson - 9
        </div>
        <div className="border p-4 text-xl font-semibold cursor-pointer rounded-md bg-black text-white">
          Lesson - 10
        </div>
        <hr />
      </div>

      <div className="mt-10 flex flex-col text-center justify-center items-center space-y-4">
        <h1 className="text-4xl font-semibold text-center">
          {" "}
          Learning the alphabet
        </h1>
        <div className="flex flex-col space-y-5">
          <iframe 
            width="560"
            height="315"
            className="rounded-md"
            src="https://www.youtube.com/embed/hsLYD1Jyf3A?si=FFXOuSXGoWNF7Y8R"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>

          <iframe
            width="560"
            className="rounded-md"
            height="315"
            src="https://www.youtube.com/embed/SLmEdQ1pcAM?si=gsDSlbHM03kIt7Qe"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className="text-center  mt-10">

        
      <button onClick={()=> gottoTouto('/tutorials')} className="text-xl font-semibold px-6 py-2 border rounded-md bg-purple-500 ">View More</button>

      
      </div>
    </div>
  );
}

export default StartLearning;
