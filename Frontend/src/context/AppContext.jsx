import { createContext, useState } from "react";
import { cour } from "../assets/assets";
import { feedback } from "../assets/assets";
import { useEffect } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [courses, setCourses] = useState();
  const [feedbacks, setFeedbacks] = useState();

  useEffect(() => {
    setCourses(cour);
    setFeedbacks(feedback);
    console.log(cour);
    console.log(feedback);
  }, []);
  const value = {
    courses,
    feedbacks,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
