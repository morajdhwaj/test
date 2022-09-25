import React from "react";

const Container7 = () => {
  return (
    <div className=" py-40  sm:py-60 ">
      <div className="flex items-center   justify-center">
        <h5 className="text-[12px] text-secondry pl-2 ">
          03 · BUILT FOR DEVELOPERS, TRUSTED BY ENTERPRISES{" "}
        </h5>
        <div className=" pl-10 bg-gradient-to-r from-[#21262d] to-[rgba(33, 38, 45, 0)] flex-1  h-[1px] w-10  "></div>
      </div>
      <div className=" flex flex-col justify-center items-center ">
        <div className="flex justify-center flex-col items-center max-w-2xl  pt-16">
          <h1 className="text-7xl font-extrabold text-main text-center ">
            Ready to get your team
            <span className=" text-transparent bg-clip-text bg-gradient-to-tr from-pink-700 to-purple-500 ">
              {" "}
              Started
            </span>
          </h1>
        </div>
      </div>
        <div className="w-full h-full border flex px-20">
          <div className="bg-white w-1/2 rounded-xl flex h-72">
            <div className="bg-red-400">1</div>
            <div className="bg-indigo-600" >2</div>
            <div className="bg-pink-300">3</div>
          </div>
          <div className=" bg-yellow-400 rounded-xl w-1/2">2</div>
           </div>
    </div>
  );
};

export default Container7;
