function Banner3() {
  return (
    <div className="sm:flex justify-center items-center  sm:pt-72">
      <div className="w-11/12 h-auto  sm:flex  ">
        <div className=" sm:w-1/2 h-auto bggre">
          <div className=" h-10 flex justify-center items-center ">
            <h5 className="text-sm text-secondry pl-2 ">02. How its Work </h5>
            <div className=" bg-gradient-to-r from-[#21262d] to-[rgba(33, 38, 45, 0)] flex-1  h-[1px] "></div>
          </div>
          <div className=" h-auto w-auto flex ">
            <div className=" w-max sm:w-20  h-min  sm:h-full   pt-5 pl-2 ">
              <div className="border border-white rounded-full flex justify-center items-center text-white bg-[#097068] h-14 w-14  shadow-[rgb(127,137,236,0.4)] shadow-[0_5px_30px_0.1px_rgba(46,23,255,0.1)]   "></div>
            </div>
            <div className=" h-auto pl-5 pt-5  ">
              <h1 className=" font-extrabold md:text-5xl text-2xl   text-main  ">
                Exprience the{" "}
                <span className=" text-transparent bg-clip-text bg-gradient-to-tr from-teal-700 to-green-500 ">
                  power of code
                </span>
                .
              </h1>
              <p className="text-secondry text-lg sm:text-xl pt-4 ">
                Take control of HTML5, CSS3, and JavaScript in a completely
                visual canvas — and let Webflow translate your design into
                clean, semantic code that’s ready to publish to the web, or hand
                off to developers.
              </p>
            </div>
          </div>
        </div>

        <div className="  sm:flex sm:pl-10  pt-10 sm:pt-0 hidden ">
          <div className="   sm:flex items-end pb-12 ml-28 ">
            <div className="bg-gray-800 rounded-lg w-60 h-44 sm:flex sm:justify-center sm:items-center">
              <div className="bg-gray-700 rounded-lg w-48 h-32   "></div>
            </div>
          </div>
          <div className="sm:flex sm:flex-col sm:justify-center  pl-5 pt-36 ">
            <h1 className=" text-main font-bold ">Structure</h1>
            <p className=" text-secondry pr-28">
              Use this text to describe the first step...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Banner3;
