import React from "react";
import Image from "next/image";

const Studies = () => {
  return (
    <div className=" py-40  sm:py-60 ">
      <div className="flex items-center space-x-3  justify-center">
        <div className="  bg-gradient-to-l from-gray-700 to-[rgba(33, 38, 45, 0)] flex-1  h-[1px] w-5  "></div>

        <h5 className="text-[14px] text-secondry pl-2 font-bold ">
          05 · OUR STUDIES{" "}
        </h5>

        <div className="  bg-gradient-to-r from-gray-700 to-[rgba(33, 38, 45, 0)] flex-1  h-[1px] w-5  "></div>
      </div>
      <div className=" flex flex-col justify-center items-center ">
        <div className="flex justify-center flex-col items-center   pt-16">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-main text-center ">
            Explore more ways to use codebase.
          </h1>
        </div>
      </div>
      <div className=" h-full w-full  sm:space-x-5 sm:flex text-main space-y-10 sm:space-y-0  pt-20  ">
        <div className="  sm:w-1/3 bg-[#171e25] flex flex-col space-y-8 pb-10 rounded-xl overflow-hidden ">
          <div className="   w-full ">
            <Image
              src="/std1.jpeg"
              alt=""
              height="350"
              width="450"
              className=" "
            ></Image>
          </div>
          <div className=" sm:h-1/2 w-full pl-10">
            <h1 className="text-2xl font-bold ">Normal for developers</h1>
            <p className=" text-gray-500 font-bold">March 2022</p>
          </div>
          <div className="pl-10  font-bold text-secondry ">GUIDE</div>
        </div>
        <div className="  sm:w-1/3 bg-[#171e25] flex flex-col space-y-8 pb-10 rounded-xl overflow-hidden">
          <div className="   w-full ">
            <Image
              src="/std2.jpeg"
              alt=""
              height="350"
              width="450"
              className=" "
            ></Image>
          </div>
          <div className=" h-1/2 w-full pl-10">
            <h1 className="text-2xl font-bold ">Powerful Symbols</h1>
            <p className=" text-gray-500 font-bold">February 2022</p>
          </div>
          <div className="pl-10  font-bold text-secondry ">GUIDE</div>
        </div>
        <div className="  sm:w-1/3 bg-[#171e25] flex flex-col space-y-8 pb-10 rounded-xl overflow-hidden">
          <div className="   w-full ">
            <Image
              src="/std3.jpeg"
              alt=""
              height="350"
              width="450"
              className=" "
            ></Image>
          </div>
          <div className=" h-1/2 w-full pl-10">
            <h1 className="text-2xl font-bold ">Building the perfect form</h1>
            <p className=" text-gray-500 font-bold">February 2022</p>
          </div>
          <div className="pl-10  font-bold text-secondry ">GUIDE</div>
        </div>
      </div>
    </div>
  );
};

export default Studies;
