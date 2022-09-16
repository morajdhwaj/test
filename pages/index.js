import Link from "next/link";
import Banner from "../Components/Banner";
import Banner2 from "../Components/Banner2";
import Banner3 from "../Components/Banner3";
import Banner5 from "../Components/Banner5";
import Blog from "./blog";
import Banner4 from "../Components/icons/Banner4";
import { client } from "../utils/client";
import { GET_POSTS } from "../utils/query";



const index = () => {
  return (
    <div className="max-w-7xl  bg-[#0d1117] ">
      <Banner/>
      <Banner2/>
      <Banner3/>
      <Banner4/>
      <Banner5/>
    </div>
  );
};

export default index;



  