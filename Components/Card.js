import { useRef } from "react";

const Card = (props) => {


  return (

      <div className=" h-auto w-full p-5 border border-red-600 bg-slate-900 flex  rounded-xl">
        <div className="  w-20 h-20     rounded-xl  ">
          <div className=" border-green-900 p-2 flex justify-center items-center bg-slate-800 mt-3 rounded-2xl ">
            {props.image}
          </div>
        </div>
        <div className="px-3 py-5 flex flex-col">
          <h1 className="  text-main  text-lg font-bold sm:flex  text-center ">
            {props.title}
          </h1>
          <p>{props.discription}</p>
        </div>
      </div>
  );
};

export default Card;
