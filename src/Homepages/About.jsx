import React from "react";
import Aos from 'aos'
import 'aos/dist/aos.css';
function About() {
  Aos.init();

  return (

    <div className="mt-6 px-4 overflow-auto"  data-aos="flip-left">

      <h1 className="text-center text-2xl font-semibold">Our Mission</h1>

      <div className="border-2 p-8 rounded-md shadow-lg overflow-auto">
        <p className="text-center">

         <div className="border p-2 bg-[url(/cool3.png)] rounded-md" data-aos="fade-left">
         <span className="text-xl text-white font-semibold"> Interactive Lessons </span> 
         <br></br>

         <p className="text-gray-800">
         Dive into structured lessons categorized by
          topics and difficulty levels. Each lesson introduces essential words
          with clear meanings, pronunciations, and examples. 
          
         </p>
         </div>


          <br className="mt-4"></br>
          <p className="mt-4"></p>
          <div className="border rounded-md bg-lime-200 p-2" data-aos="fade-right">
          <span className="text-xl font-semibold text-green-600">  Practical Scenarios: </span> <br></br> 
          <p className="font-semibold">
          Understand when and how to use words effectively in
          real-life conversations. Learn contextual usage with examples in
          relevant situations. 
          </p>


          </div>

          <div className="mt-4 border rounded-md p-2 bg-slate-500" data-aos="fade-in"> 

          <span className="text-xl font-semibold  "> Multimedia Tutorials </span> <br></br> 
          <p className=" text-white">
          Watch engaging tutorial
          videos to enhance retention and pronunciation. Explore the language’s
          alphabet and common phrases interactively. 
          </p>
          
          {/* <p className="mt-4 */}

            
          </div>

          <div className="mt-6 rounded-md border p-4 bg-blue-300" data-aos="fade-left">
          <span className="text-xl font-semibold text-green-600"> Progress Tracking: </span>  <br></br> 
          <p>
          Track
          your learning progress lesson by lesson. Celebrate milestones like
          mastering a set number of words or completing tutorials. Gamified

          </p>

          </div>


          <p className="mt-4"></p>
          
          <div className="border p-4 rounded-md bg-yellow-100" data-aos="fade-right">
          <span className="text-xl font-semibold text-green-600"> Gamified Learning Experience: </span> <br></br>  Unlock achievements by completing lessons and
          challenges. Test your knowledge through quizzes and interactive
          activities
          </div>

        </p>
      </div>
    </div>
  );
}

export default About;
