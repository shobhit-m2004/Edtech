import React from "react";

import { assets } from "../assets/assets";

const IntroBanner = () => {
  return (
    <div className="flex flex-col md:flex-row lg:flex-row  px-4 justify-around">
      <div className="mt-10 flex flex-col justify-around">
        <p className="text-2xl md:text-4xl lg:text-4xl">
          Learn With Love And fall In love With Learning
        </p>

        <p>
          Brainware — Your gateway to modern tech skills. Learn, build, and{" "}
          <br />
          level-up for the future.
        </p>

        <button className=" bg-white text-black rounded-full py-1.5 px-1.5  h-10 w-50 item-center">
          Start Learning
        </button>
      </div>

      <div className="  ">
        <img src={assets.BannerImage} alt="" />
      </div>
    </div>
  );
};

export default IntroBanner;
