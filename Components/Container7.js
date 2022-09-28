import React from "react";
import { ActiveButton } from "./Buttons";

const Container7 = () => {
  return (
    <div className=" py-40  sm:py-60 ">
      <div className="flex items-center space-x-5  justify-center">
      <div className="  bg-gradient-to-l from-gray-700 to-[rgba(33, 38, 45, 0)] flex-1  h-[2px] w-5  "></div>

        <h5 className="text-[14px] text-secondry pl-2 font-bold ">
          05 · OUR PRICING{" "}
        </h5>
        <div className="  bg-gradient-to-r from-gray-700 to-[rgba(33, 38, 45, 0)] flex-1  h-[2px] w-5  "></div>
      </div>
      <div className=" flex flex-col justify-center items-center ">
        <div className="flex justify-center flex-col items-center max-w-4xl  pt-16">
          <h1 className="text-8xl font-extrabold text-main text-center ">
            Ready to get your team
            <span className=" text-transparent bg-clip-text bg-gradient-to-tr from-pink-700 to-purple-500 ">
              {" "}
              Started
            </span>
          </h1>
        </div>
      </div>
      <div className="w-full text-xl text-secondry  space-x-2  h-auto flex pt-20 ">
        <div className=" w-1/2 rounded-xl  flex-wrap sm:flex flex-col  bg-[#171e25]  pl-4">
          <div className=" flex space-x-3 py-5">
            <div className="font-bold text-sm text-gray-500">01</div>
            <div className=" font-bold text-3xl">Commercial</div>
            <div className="bg-[#3aecba]  text-lg rounded-lg px-3  text-black flex items-center justify-center ">
              Single User
            </div>
          </div>
          <div className="sm:flex ">
            <div className="  flex-wrap sm:flex flex-col justify-between pb-10  ">
              <p>Basic for team and Developers</p>

              <ActiveButton customClass=" py-1   mb-5 hidden md:block">
                Get stared
              </ActiveButton>
            </div>
            <div className=" py-14 pl-10 ">
              <ul className="space-y-5  ">
                <li>Single user</li>
                <li>Personal or commercial projects</li>
                <li>Business social media accounts</li>
                <li>Physical or digital advertisements for local market</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="  w-1/2 rounded-xl  flex flex-col  bg-[#171e25]  pl-4">
          <div className=" flex space-x-3 py-5">
            <div className="font-bold text-sm text-gray-500 ">02</div>
            <div className=" font-bold text-3xl">Extended</div>
            <div className="bg-[#3aecba]  text-lg rounded-lg px-3  text-black flex items-center justify-center ">
              Unlimited User
            </div>
          </div>
          <div className="flex   ">
            <div className="   flex flex-col justify-between w-1/2  ">
              <p>Advanced collaboration and support for teams</p>

              <ActiveButton customClass=" py-1   mb-5 hidden md:block">
                Get stared
              </ActiveButton>
            </div>
            <div className=" py-5 pl-10 ">
              <ul className="space-y-4  ">
                <li>Single user</li>
                <li>Personal or commercial projects</li>
                <li>Business social media accounts</li>
                <li>Physical or digital advertisements for local market</li>
                <li>Native apps, web apps or games</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container7;
