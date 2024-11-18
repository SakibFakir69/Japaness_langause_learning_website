import React from "react";
import { NavLink } from "react-router-dom";

function Toutorails() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-center mt-10 border p-2">
        Here you can get Toutorails{" "}
      </h1>

      <section className="grid md:grid-cols-3 gap-6  justify-center grid-cols-2 items-center px-4 md:px-8 text-center mt-10">

        <div className="w-full aspect-w-16 aspect-h-9 ">
          <iframe
          className="w-full h-full"
            
            src="https://www.youtube.com/embed/j7RQe_wtK1U?si=DqmlJRnf-8Ujxi46"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>

        <div className="w-full aspect-w-16 aspect-h-9">
          <iframe
          className="w-full h-full"
            
            src="https://www.youtube.com/embed/foSfaqj-7S0?si=VQywpkZW9L1C1zE1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="w-full aspect-w-16 aspect-h-9">
          <iframe
          className="w-full h-full"

           
            src="https://www.youtube.com/embed/ttoxraIxDFQ?si=Ta5KaI6IStzEut1_"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>

        <div className="w-full aspect-w-16 aspect-h-9">
          <iframe
          className="w-full h-full"
           
            src="https://www.youtube.com/embed/kYson5zgwLE?si=5N5xHfATIsmBXeCV"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="w-full aspect-w-16 aspect-h-9">
          <iframe
          className="w-full h-full"
          
            src="https://www.youtube.com/embed/9gvQP6XfeDU?si=AO0VpJFmx20UW8NX"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="w-full aspect-w-16 aspect-h-9">
          <iframe
          className="w-full h-full"
            
            src="https://www.youtube.com/embed/1JephUxTHxg?si=uenKo-65MzqhvD64"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </section>

      <div className="flex justify-center mt-10">
        <NavLink className="px-6 py-2 border rounded-md text-xl font-semibold bg-green-300"
        to={'/startLearning'}
        >Learn Vocabularies</NavLink>
      </div>
    </div>
  );
}

export default Toutorails;
