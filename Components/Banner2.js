import Image from "next/image";
import React, { useState } from "react";
import { FingrePrint } from "../Components/icons/SVGs";
import { HTML } from "../Components/icons/SVGs";
import Card from "./Card";
import Link from "next/link";

function Banner2() {
  const [activeIndex, setActiveIndex] = useState("1");
  return (
    <div className="font-inter text-main  w-full  ">
      <div className="  h-auto pl-5 sm:pl-14 ">
        <div className="flex items-center "></div>
        <div className="flex space-x-5  pb-20    w-full">
          <div className=" ">
            <div className="border border-white rounded-full flex justify-center items-center text-white bg-[#4036be] h-14 w-14  shadow-[rgb(127,137,236,0.4)] shadow-[0_5px_30px_0.1px_rgba(46,23,255,0.1)]   ">
              <FingrePrint />
            </div>
          </div>
          <div className="  w-auto sm:w-7/12   h-full  ">
            <h1 className=" font-extrabold md:text-5xl text-2xl  pb-6  ">
              Work perfactly with your{" "}
              <span className=" text-transparent bg-clip-text bg-gradient-to-tr from-indigo-600 to-blue-500 ">
                semantics
              </span>
              .
            </h1>
            <p className="text-secondry text-xl">
              Stand out onine with a proffessional webside, online Store or
              portfolio. With fouroom templates, you can earn any idea into a
              reality.
            </p>
          </div>
        </div>
      </div>
      <div className="    sm:flex   h-full w-full  ">
        <div className="  h-full  w-1/3  space-y-3 pb-5  ">
        <Card
            index={"3"}
            title={"Code Export HTML/CSS"}
            image={<HTML />}
            //  discription={
            //  " zsianbhd bagsyus sausinbgd bordhs karves nios belgas frac dldnjc zsianbhd bagsyus sausinbgd bordhs karves nios belgas frac dldnjc"
            // }
          />
          <Card
            index={"3"}
            title={"Code Export HTML/CSS"}
            // discription={
            //   " zsianbhd bagsyus sausinbgd bordhs karves nios belgas frac dldnjc zsianbhd bagsyus sausinbgd bordhs karves nios belgas frac dldnjc"
            // }
            image={<HTML />}
          />

          <Card
            index={"3"}
            title={"Code Export HTML/CSS"}
            // discription={
            //   " zsianbhd bagsyus sausinbgd bordhs karves nios belgas frac dldnjc zsianbhd bagsyus sausinbgd bordhs karves nios belgas frac dldnjc"
            // }
            image={<HTML />}
          />
        </div>
        <div className=" flex  h-max w-full sm:w-4/5  ">
          <div className="border border-gray-700 w-5/6  sm:w-4/6 h-96 mx-auto rounded-t-lg overflow-hidden pb-10">
            <div className="h-10 w-full border border-gray-700 flex items-center pl-5 ">
              <button className="bg-red-500 text-transparent rounded-full h-4 w-4 mx-1 "></button>
              <button className="bg-yellow-500 text-transparent rounded-full h-4 w-4 mx-1 "></button>
              <button className="bg-green-500 text-transparent rounded-full h-4 w-4 mx-1"></button>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex justify-center items-center mt-40     ">
        <div className="border border-white rounded-xl   sm:flex h-auto w-auto     ">
          <div className=" h-full  w-10/12 flex    py-14 justify-end   px-7 ">
            <div className="  flex flex-shrink bg-blue-300   rounded-full ">
              <Image
                src="/background.jpeg"
                alt=" "
                height="300"
                width="300"
                className="p-0 m-0 h-full w-full"
              ></Image>
            </div>
          </div>
          <div className=" font-bold text-3xl sm:py-14  sm:pr-5 pl-5  ">
            What started out with just three pages showing what can be built
            with codebase was the springboard to redoing the entire webside.
            <div className=" py-20">
              <h1 className=" text-xl">Brian Lewis</h1>
              <p className=" text-sm pt-2 font-light ">
                {" "}
                Head of Department, petsplay.io
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner2;
