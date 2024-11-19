import React from "react";

function LessonShow({ data }) {
  // catch data from lessonpage
  // then descture ;

  const { difficulty, part_of_speech, meaning, pronunciation, word, id,example,when_to_say } = data;

  const howtoSay = (id) => {};

  const dificultiFun = () => {
    switch (difficulty) {
      case "easy":
        return "bg-green-400 rounded font-semibold";
      case "medium":
        return "bg-yellow-500 rounded font-semibold";
      case "hard":
        return "bg-red-500 rounded font-semibold";
      default:
        return "";
    }
  };

  return (
    <div>
      <section className="">
        <div className="border flex flex-col space-y-2 p-4  text-center bg-[url(/cool3.png)] text-white rounded-md shadow-lg ">
          <p className="text-black md:text-xl font-semibold">
            <span className="text-gray-100"> Word :</span> {word}
          </p>
          <p className="text-black text-xl font-semibold">
            {" "}
            <span className="text-gray-100 text-balance">Meaning :</span>{" "}
            {meaning}
          </p>

          <p className="text-black md:text-xl font-semibold">
            {" "}
            <span className="text-gray-100">Pronunciation :</span>{" "}
            {pronunciation}
          </p>

          <p className=" md:text-xl font-semibold text-black">
            {" "}
            <span className="text-gray-100 md:text-xl">
              Part_of_speech :
            </span>{" "}
            {part_of_speech}
          </p>

          <div>
            <button className={dificultiFun()}>
              <p className="text-balance p-2 md:px-8 py-1"> {difficulty}</p>
            </button>
          </div>

          <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button
              className="btn"
              onClick={() => document.getElementById("my_modal_5").showModal()}
            >
              When to say the button 
            </button>
            {/* ( word, meaning,  when to say , example */}


            <dialog
              id="my_modal_5"
              className="modal modal-bottom 
              
              sm:modal-middle"
            >
              <div className="modal-box bg-black">
                <div className=" flex flex-col space-y-3">
                    <p className="md:text-xl"> <span className="text-green-400">Word : </span> {word}</p>
                    <p className="md:text-xl">
                        <span className="text-green-500">Meaning :</span> {meaning}</p>
                    <p className="md:text-xl">
                        <span className="text-green-400">when_to_say :</span> {when_to_say}</p>
                    <p className="md:text-xl">
                        <span className="text-green-500">Example  :</span> {example}</p>
                </div>
                
               

                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>



          </div>
        </div>
      </section>
    </div>
  );
}

export default LessonShow;
