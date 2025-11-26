import React from "react";
import { assets } from "@/assets/assets";

const SuccessCard = ({ item }) => {
  return (
    <div className="flex justify-center w-full">
      <div
        className="my-4 rounded-4xl w-[900px] h-[400px] p-8 text-white backdrop-blur-sm bg-opacity-10"
        style={{
          backgroundImage: `url(${assets.successSky})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p className="text-center text-3xl font-semibold mb-6 drop-shadow-lg">
          {item.tagline}
        </p>

        {/* Content */}
        <div className="flex gap-10">
          {/* Left Profile Section */}
          <div className="flex flex-col items-center min-w-[200px]">
            <div className="relative">
              <img
                src={item.image}
                alt=""
                className="w-40 h-40 object-cover rounded-full border-4 border-white shadow-[0_0_20px_rgba(255,255,255,0.5)]"
              />
              <div className="absolute inset-0 rounded-full animate-pulse shadow-[0_0_30px_10px_rgba(255,255,255,0.15)]"></div>
            </div>

            <p className="mt-4 text-xl font-semibold drop-shadow-md">
              {item.name}
            </p>
            <p className="text-sm opacity-80">{item.company}</p>

            <a
              href={item.linkedin}
              className="text-blue-300 underline text-sm mt-1 hover:text-blue-400 transition"
            >
              LinkedIn
            </a>
          </div>

          {/* Review Section */}
          <div className="flex py-auto">
            <p className="text-lg leading-relaxed opacity-95 drop-shadow-md text-center">
              “{item.review}”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessCard;
