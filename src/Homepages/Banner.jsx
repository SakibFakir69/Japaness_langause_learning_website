import React from "react";
import { NavLink } from "react-router-dom";

function Banner() {
  // use banner

  return (
    <div className="mt-10 px-4 rounded-md  2">
      <div>
        <div
          className="hero min-h-screen rounded"
          style={{
            backgroundImage:
              "url(/b.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Learn Japaness </h1>
              <p className="mb-5">

             1. Expand Your Vocabulary – Learn new words daily.
             <br></br>

             2. Interactive Quizzes – Test and retain knowledge effortlessly.
             <br></br>
             
             3. Custom Word Lists – Tailor learning to your goals.

              </p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
