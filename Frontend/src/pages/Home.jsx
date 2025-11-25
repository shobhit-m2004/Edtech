import React from "react";
import IntroBanner from "../components/IntroBanner";
import SkillSection from "../components/SkillSection";
import CourseMenu from "./../components/CourseMenu";
import SuccessStory from "./../components/SuccessStory";

const Home = () => {
  return (
    <div>
      <IntroBanner />
      <CourseMenu />
      <SuccessStory />
    </div>
  );
};

export default Home;
