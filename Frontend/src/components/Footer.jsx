import React from "react";
import { defineConfig } from "eslint/config";

import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div
      className="flex flex-col gap-5 px-10 text-white py-4 shadow-2xl shadow-black"
      style={{
        fontFamily: '"Comic Sans MS", "Comic Sans", cursive',
        background: "linear-gradient(135deg, #000000, #1a1a1a, #000000)",
      }}
    >
      <div>
        <img className=" h-20" src={assets.logo} alt="" />
      </div>

      <div>
        <p>Home for Programmers</p>
        <p>Made With Love Shobhit & Abhishek</p>
      </div>

      <div className="flex justify-around bg-black py-4">
        <div>
          <p className="text-xl font-bold">Products</p>

          <ul>
            <li className="hover:text-red-300">Courses</li>
            <li className="hover:text-red-300">Cohorts</li>
            <li className="hover:text-red-300">Udemy</li>
            <li className="hover:text-red-300">Free API</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-bold">Resources</p>

          <ul>
            <li className="hover:text-red-300">Docs</li>
            <li className="hover:text-red-300">Privacy Policy</li>
            <li className="hover:text-red-300">Terms ofServices</li>
            <li className="hover:text-red-300">Pricing Policy</li>
            <li className="hover:text-red-300">Refund Policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-bold">Social</p>

          <ul>
            <li className="hover:text-red-300">x.com</li>
            <li className="hover:text-red-300">github</li>
            <li className="hover:text-red-300">linkedin</li>
            <li className="hover:text-red-300">instagram</li>
          </ul>
        </div>

        <div>
          <p className="hover:text-red-300">About US</p>
          <p className="hover:text-red-300">Contact US</p>
          <p className="hover:text-red-300">OUR MOTO</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
