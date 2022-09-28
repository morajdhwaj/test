import Image from "next/image";

function Banner5() {
  return (
    <div className=" pt-60">
      <div className=" rounded-xl w-full flex-wrap sm:flex  bg-[#171e25]  ">
        <div className=" w-1/2 h-full  ">
          <Image
            src="/Banner5.jpg"
            alt=""
            height="780"
            width="700"
            className=" rounded-xl  "
          ></Image>
        </div>
        <div className=" w-1/2 h-full ">
          <div className="  h-28  flex items-center">
            <h5 className="text-[12px] text-secondry pl-10 ">
              04· CASE STUDIES{" "}
            </h5>
            <div className=" bg-gradient-to-r from-gray-500 to-[rgba(33, 38, 45, 0)] flex-1  h-[2px] w-10 "></div>
          </div>
          <div className=" ">
            <div>
              <div className=" h-auto flex-wrap sm:flex">
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
      <div className=" pt-40 sm:pt-80 w-full  flex ">
        <div className="h-full w-1/3  "></div>
        <div className=" h-full w-2/3  pl-10 pb-40 ">
          <h1 className="text-main text-5xl font-extrabold ">
            Webflow powers more than 100,000 websites for businesses.
          </h1>
          <button className=" text-2xl  my-5 font-bold py-3 px-6 text-white pt-5 bg-[#4036be] rounded-full hidden md:block">
            Explore case studies
          </button>
        </div>
      </div>
      <div>
        <div className=" rounded-xl w-full  flex bg-[#171e25] ">
          <div className=" w-2/5 h-full  ">
            <Image
              src="/banner52.jpeg"
              alt=""
              height="780"
              width="700"
              className=" rounded-lg"
            ></Image>
          </div>
          <div className="  w-3/5 h-full  flex flex-col pt-20   ">
            <div className=" space-y-10 max-w-xl mx-auto">
              <Image
                src="/couma2.svg"
                alt=""
                height="40"
                width="40"
                className=" rounded-lg"
              ></Image>
              <p className="text-secondry text-xl">I could not be any happier.The complete purches are very well put togther and help us to put together pf our new marketing company.All the pages anf fearture were very well explainded and made it very easy to change and adapt it to our needs. we were so impressed that we will purches the second branch some time in march. Highly recommmeded ! </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Banner5;
