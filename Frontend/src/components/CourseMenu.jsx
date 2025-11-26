import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import CourseCard from "./ui/card";

const CourseMenu = () => {
  const { courses } = useContext(AppContext);
  console.log(courses);

  return (
    <div>
      <p
        className="text-4xl px-4 py-4 text-center"
        style={{
          fontFamily: '"Comic Sans MS", "Comic Sans", cursive',
        }}
      >
        Our courses
      </p>
      <div className="grid grid-cols-1 md:gris-cols-3 lg:grid-cols-4  h-90 w-full overflow-auto  ">
        {courses?.map((course) => (
          <CourseCard key={course._id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CourseMenu;
