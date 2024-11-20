import React from "react";
import { NavLink } from "react-router-dom";

function Toutorails() {
  return (
    <div className="bg-black text-white rounded-md">
      <h1 className="text-2xl font-semibold text-center mt-10 border p-2">
        Here you can get Toutorails{" "}
      </h1>

      <section className="grid md:grid-cols-3 gap-6  justify-center grid-cols-2 items-center px-4 md:px-8 text-center mt-10">

        <div className="w-full aspect-w-16 aspect-h-9 ">
        <iframe className="w-full h-full" src="https://www.youtube.com/embed/7DCCN3pCGtk?si=aEjUKURi-poY4J_1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
        <iframe className="w-full h-full" src="https://www.youtube.com/embed/G_oC7anVuA8?si=LLo4MTQhwledPO2E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          

        </div>

        <div className="w-full aspect-w-16 aspect-h-9">
        <iframe 
        className="w-full h-full"
        src="https://www.youtube.com/embed/RSJbXBmjo4s?si=D3KPR-4_HH4PKox0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          

        </div>
        <div className="w-full aspect-w-16 aspect-h-9">
        <iframe className="w-full h-full" src="https://www.youtube.com/embed/gmNf753UJOo?si=51jVeH5s93ckxoHJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div className="w-full aspect-w-16 aspect-h-9">

        <iframe className="w-full h-full" src="https://www.youtube.com/embed/w0_eyT-cCio?si=QIQbjem2p4miJIHR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          
        </div>
      </section>

      <div className="flex justify-center mt-10">
        <NavLink className="px-6 py-2 border rounded-md text-xl font-semibold bg-white text-black mb-10 hover:bg-green-400"
        to={'/startLearning'}
        >Learn Vocabularies</NavLink>
      </div>
    </div>
  );
}

export default Toutorails;
