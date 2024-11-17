import React from "react";

function About() {
  return (
    <div className="mt-6 px-4">
      <h1 className="text-center text-2xl font-semibold">Our Mission</h1>

      <div className="border-2 p-8 rounded-md shadow-lg">
        <p className="text-center">
         <span className="text-xl text-green-600 font-semibold"> Interactive Lessons </span> 
         <br></br>
         Dive into structured lessons categorized by
          topics and difficulty levels. Each lesson introduces essential words
          with clear meanings, pronunciations, and examples. 
          <br className="mt-4"></br>
          <p className="mt-4"></p>
          <span className="text-xl font-semibold text-green-600">  Practical Scenarios: </span> <br></br>  Understand when and how to use words effectively in
          real-life conversations. Learn contextual usage with examples in
          relevant situations. 
          <p className="mt-6"></p>
          <span className="text-xl font-semibold text-green-600"> Multimedia Tutorials </span> <br></br>  Watch engaging tutorial
          videos to enhance retention and pronunciation. Explore the language’s
          alphabet and common phrases interactively. 
          <p className="mt-4"></p>
          
          <span className="text-xl font-semibold text-green-600"> Progress Tracking: </span>  <br></br> Track
          your learning progress lesson by lesson. Celebrate milestones like
          mastering a set number of words or completing tutorials. Gamified
          <p className="mt-4"></p>

          <span className="text-xl font-semibold text-green-600"> Gamified Learning Experience: </span> <br></br>  Unlock achievements by completing lessons and
          challenges. Test your knowledge through quizzes and interactive
          activities.
        </p>
      </div>
    </div>
  );
}

export default About;
