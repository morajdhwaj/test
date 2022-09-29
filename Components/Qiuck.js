import React from "react";
import Image from "next/image";
import { ActiveButton } from "./Buttons";

const Qiuck = () => {
  return (
    <div>
      <div className="  h-28  flex items-center space-x-3">
        <div className="  bg-gradient-to-l from-gray-700 to-[rgba(33, 38, 45, 0)] flex-1  h-[2px] w-5  "></div>

        <h5 className="text-[12px] text-secondry font-bold  ">
          07· QUICK LINKS
        </h5>
        <div className="  bg-gradient-to-r from-gray-600 to-[rgba(33, 38, 45, 0)] flex-1  h-[2px] w-5 "></div>
      </div>

      <div className=" h-auto flex items-center">
        <div className=" w-30    ">
          <div className=" rounded-full flex justify-center items-center text-white bg-[#4036be] h-20 w-20  shadow-[rgb(127,137,236,0.4)] shadow-[0_5px_30px_0.1px_rgba(46,23,255,0.1)]   "></div>
        </div>
        <div className=" h-full pl-8  ">
          <h1 className=" font-extrabold md:text-6xl text-2xl   text-main  ">
            And thats not all...
          </h1>
        </div>
      </div>
      <div className=" h-full w-full space-y-10 sm:space-y-0  sm:space-x-5 sm:flex text-white   pt-20  ">
        <div className="  sm:w-1/4 bg-[#8D62DD] flex flex-col space-y-8 pb-10 rounded-xl overflow-hidden ">
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
            <h1 className="text-2xl font-bold ">Product tour</h1>
            <p className=" text-gray-300 font-semibold">
              This is some text inside of a div block.
            </p>
          </div>
          <div className="pl-10  font-bold text-lg text-secondry ">
            Learn more :{" "}
          </div>
        </div>
        <div className="  sm:w-1/4 bg-[#6668eb] flex flex-col space-y-8 pb-10 rounded-xl overflow-hidden ">
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
            <h1 className="text-2xl font-bold ">Product tour</h1>
            <p className=" text-gray-300 font-semibold text-lg">
              This is some text inside of a div block.
            </p>
          </div>
          <div className="pl-10  font-bold text-secondry  text-lg">
            Learn more :
          </div>
        </div>
        <div className="  sm:w-1/4 bg-[#079de0] flex flex-col space-y-8 pb-10 rounded-xl overflow-hidden ">
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
            <h1 className="text-2xl font-bold ">Product tour</h1>
            <p className=" text-gray-300 font-bold">
              This is some text inside of a div block
            </p>
          </div>
          <div className="pl-10  font-bold text-secondry text-lglg ">
            Learn more
          </div>
        </div>
        <div className="  sm:w-1/4 bg-[#0eb3a0] flex flex-col space-y-8 pb-10 rounded-xl overflow-hidden ">
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
            <h1 className="text-2xl font-bold ">Product tour</h1>
            <p className=" text-gray-300 font-bold">
              This is some text inside of a div block.
            </p>
          </div>
          <div className="pl-10  font-bold text-secondry  text-lg">
            Learn more
          </div>
        </div>
      </div>
      <div className="mt-40  w-full  rounded-xl text-white  bg-blue-500 sm:flex sm:flex-col items-center  justify-center font-bold h-full">
        <div className="text-3xl sm:text-7xl max-w-5xl text-center  py-20 ">
          Move even faster with Norman UI Kit for Webflow.
        </div>
        <div className=" font-bold text-3xl pb-20 sm:flex text-center space-y-5 sm:space-y-0 sm:space-x-5">
      <ActiveButton customClass=" py-1 px-4  " >
          Take the flow
        </ActiveButton>   
        <ActiveButton customClass=" py-1 px-4 " >
          Browse in Webflow 
        </ActiveButton> 
        </div>
      </div>
      
    </div>
  );
};

export default Qiuck;
