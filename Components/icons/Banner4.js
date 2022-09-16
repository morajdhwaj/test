import { ActiveButton } from "../Buttons";

function Banner4() {
  return (
    <div className=" pt-40">
      <div className="flex items-center   justify-center">
        <h5 className="text-[12px] text-secondry pl-2 ">
          03 · BUILT FOR DEVELOPERS, TRUSTED BY ENTERPRISES{" "}
        </h5>
        <div className=" pl-10 bg-gradient-to-r from-[#21262d] to-[rgba(33, 38, 45, 0)] flex-1  h-[1px] w-10  "></div>
      </div>

      <div className=" flex flex-col justify-center items-center ">
        <div className="flex justify-center flex-col items-center max-w-2xl  pt-16">
          <h1 className="text-8xl font-extrabold text-main ">
            <span className=" text-transparent bg-clip-text bg-gradient-to-tr from-cyan-500 to-orange-500 ">
              CMS
            </span>
            ,meet visual{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-tr from-cyan-500 to-red-400">
              design
            </span>
          </h1>
          <p className="text-secondry  text-xl pt-10">
            Create the content structures you need, add content (by hand, from a
            CSV, or via our API), then design it visually. Finally, a content
            management system that works for editors, designers, and developers.
          </p>

          <button className=" text-2xl  my-5 font-bold py-3 px-6  bg-[#3aecba] rounded-full hidden md:block">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
}
export default Banner4;
