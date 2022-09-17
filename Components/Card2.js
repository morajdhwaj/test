import Link from "next/link";
import { useRef } from "react";

const Card2 = ({ post }) => {
  return (
    <div className=" border border-black rounded-2xl m-4 h-40 sm:h-20 w-80  shadow-xl hover:bg-slate-300 bg-slate-200 flex justify-start items-center p-1  ">
      <h1 className="  text-gray-800  text-lg font-bold   text-center ">
        <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
      </h1>
    </div>
  );
};

export default Card2;
