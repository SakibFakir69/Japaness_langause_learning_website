import React from "react";
import {
  NavLink,
  useLoaderData,
  useNavigate,
  useParams,
} from "react-router-dom";
import LessonShow from "./LessonShow";

function Lessonpage() {
  const gotToLearning = useNavigate();

  const { lesson_no } = useParams();
  const id = parseInt(lesson_no);
  console.log(lesson_no, "from lesson");
  // now get data from loader / data.json
  /// then use filter for searching match lesson

  const data = useLoaderData();

  const filterData = Array.isArray(data)
    ? data.filter((item, key) => item.lesson_no === id)
    : [];
  console.log(filterData);

  // get id click data from uselaoder
  /// pass this data antoher jsx
  /// here use map

  return (
    <div className="bg-[url(/cool.png)] px-4">

      <div className="p-4"></div>

      <h1 className="text-4xl font-semibold text-center text-white">
        This is lesson page {id}
      </h1>
      <hr className="mt-4"></hr>

      <div className="grid grid-cols-2 gap-6 mt-10 p-4 rounded-md">
        {filterData.map((item, key) => (
          <LessonShow data={item} />
        ))}
      </div>
      <hr></hr>

      <div className="flex justify-center mt-10 ">
        <button
          onClick={() => gotToLearning("/startLearning")}
          className="bg-white px-6 py-2 rounded-md text-xl font-semibold flr"
        >
          {" "}
          Start Learning
        </button>


        <div className=""></div>
      </div>

      
      


    </div>
  );
}

export default Lessonpage;
