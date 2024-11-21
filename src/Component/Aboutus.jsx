import React from "react";
import { NavLink } from "react-router-dom";

function Aboutus() {
  return (
    <div className=" border px-4 max-sm-full mt-20">
      <div className="border p-2">
        <h1 className="text-xl font-semibold text-green-400">About Me</h1>
        <p>Hi, I’m Sakib, a passionate developer and tech enthusiast from Bangladesh. My journey in technology has been fueled by curiosity and a drive to create meaningful solutions. I specialize in both competitive programming (C++) and MERN stack development (MongoDB, Express.js, React.js, Node.js), balancing the logic of problem-solving with the creativity of building web applications</p>
      </div>
      <div className="mt-4 border p-4 rounded-md">
        <h1 className="text-xl font-semibold text-orange-300">Skill</h1>

        <div>
          <p>Programming Languages: C++, JavaScript, </p>
          <p>Web Development: React.js, Tailwind CSS, DaisyUI,</p>
          <p>Backend Development: Node.js, Express.js, Firebase Authentication</p>
          <p>Problem Solving: LeetCode, Codeforces</p>
        </div>

      </div>
      <div className="flex justify-center mt-4">
        <NavLink className={'px-8 py-2 border mb-4 bg-orange-300 rounded-md'} to='/'>Home</NavLink>

      </div>
    </div>
  );
}

export default Aboutus;
