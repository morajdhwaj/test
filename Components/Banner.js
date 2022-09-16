import { ActiveButton } from "./Buttons";

function Banner() {
  return (
    <div className="w-full ">
      <div className="  sm:w-11/12  mx-auto sm:pt-48  pb-10  pt-40">
        <h1 className=" text-main text-center  font-extrabold h-full  sm:text-banner leading-[1] text-4xl  ">
          <span>The site you want. Without the </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r  from-blue-500 to-red-400">
            dev time
          </span>
          .
        </h1>
      </div>
      <div className="border border-gray-700 w-full sm:w-4/6 h-96 mx-auto  rounded-t-lg border-b-0 overflow-hidden pb-10">
        <div className="h-10 w-full border-b border-gray-700 flex items-center space-x-2 pl-5 ">
          <button className="bg-red-500  rounded-full h-4 w-4  "></button>
          <button className="bg-yellow-500  rounded-full h-4 w-4  "></button>
          <button className="bg-green-500  rounded-full h-4 w-4 "></button>
        </div>
      </div>
      <div className="flex flex-col items-center pb-36">
        <p className=" py-7 mt-10 font-bold text-secondry ">
          {" "}
          Set up in a minutes, then customize to fit your style
        </p>
        <ActiveButton customClass=" text-2xl my-5 font-bold py-3 px-6  hidden md:block">
          Download for mac
        </ActiveButton>
        {/* <button className="bg-blue-700 rounded-full py-3 px-6 text-2xl font-bold text-white  my-5  ">Download for mac</button> */}
      </div>
    </div>
  );
}

export default Banner;
