import Image from "next/image";

function Banner5() {
  return (
    <div className=" pt-60">
      <div className=" rounded-xl w-full  flex bg-gray-900 ">
        <div className=" w-1/2 h-full  ">
          <Image
            src="/Banner5.jpg"
            alt=""
            height="780"
            width="700"
            className=" rounded-xl"
          ></Image>
        </div>
        <div className=" w-1/2 h-full ">
          <div className="  h-28  flex items-center">
            <h5 className="text-[12px] text-secondry pl-10 ">
              04· CASE STUDIES{" "}
            </h5>
            <div className=" bg-gradient-to-r from-[#21262d] to-[rgba(33, 38, 45, 0)] flex-1  h-[1px] w-96 "></div>
          </div>
          <div className=" ">
            <div>
              <div className=" h-auto flex">
                <div className=" w-30   h-full    pl-10 ">
                  <div className=" rounded-full flex justify-center items-center text-white bg-[#4036be] h-14 w-14  shadow-[rgb(127,137,236,0.4)] shadow-[0_5px_30px_0.1px_rgba(46,23,255,0.1)]   "></div>
                </div>
                <div className=" h-full pl-8  ">
                  <h1 className=" font-extrabold md:text-5xl text-2xl   text-main  ">
                    The word on{" "}
                    <span className=" text-transparent bg-clip-text bg-gradient-to-tr from-blue-500 to-purple-700 ">
                      Norman
                    </span>
                    .
                  </h1>
                  <p className="text-secondry text-xl pt-4 pr-20 ">
                    Webflow powers more than 100,000 websites for businesses
                    large and small. Read their stories and see what Webflow can
                    do for your company.
                  </p>
                </div>
              </div>
              <div className="w-full  flex">
                <div className="h-52  w-1/2 flex flex-col justify-end  pl-10">
                  <h1 className=" text-main text-4xl font-extrabold  ">12%</h1>
                  <p className=" text-secondry pb-5">
                    increase in favorability over key competitors
                  </p>
                </div>
                <div className="h-52  w-1/2 flex flex-col justify-end pb-10 pl-10">
                  <h1 className=" text-main text-4xl font-extrabold ">400m</h1>
                  <p className=" text-secondry">total campaign impressions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" pt-60 w-full  flex ">
        <div className="h-full w-1/3  "></div>
        <div className=" h-full w-2/3  pl-10 pb-40 ">
          <h1 className="text-main text-5xl font-extrabold ">
            Webflow powers more than 100,000 websites for businesses.
          </h1>
          <button className=" text-2xl  my-5 font-bold py-3 px-6 text-white pt-5 bg-[#4036be] rounded-full hidden md:block" >
            Explore case studies
          </button>
        </div>
      </div>
      <button className=" text-main border m-5 p-2 bg-green-600 rounded-xl hover:bg-green-700 " >
        <a href="http://localhost:3001/blog" >Blogs</a>
      </button>
    </div>
  );
}
export default Banner5;
