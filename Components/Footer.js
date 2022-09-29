import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="py-10">
      <div className="w-full h-full grid  lg:grid-cols-5 space-y-5 sm:space-y-0  md:grid-cols-3 pt-20 font-medium   text-gray-500 text-lg ">
        <div className=" h-auto font-bold text-3xl text-white ">
          Codebase
        </div>
        <div className="sm: h-auto">
          <ul className="   space-y-1">
            <li className="font-bold text-main">PRODUCT TOUR </li>
            <li>Product Tour 1</li>
            <li>Product Tour 2</li>
            <li>Product Tour 3</li>
            <li>Product Tour 4</li>
            <li>Product Tour 5</li>
            <li>Product Tour 6</li>
          </ul>
        </div>
        <div className="sm: h-auto ">
          <ul className="   space-y-1">
            <li className="font-bold text-main">PRODUCT</li>
            <li>Pricing 1</li>
            <li>Pricing 2</li>
            <li>Pricing 3</li>
            <li>Costomer</li>
            <li>Costomer Details</li>
            <li>FAQ</li>
            <li>Download</li>
          </ul>
        </div>
        <div className="sm: h-auto">
          <ul className="  space-y-1">
            <li className="font-bold text-main">COMPANY</li>
            <li>About 1</li>
            <li>About 2</li>
            <li>About 3 </li>
            <li>Team Member</li>
            <li>Blog</li>
            <li>Blog Post</li>
            <li>Careers</li>
            <li>Careers Details</li>
            <li>Contact</li>
            <li>Legal</li>
          </ul>
        </div>
        <div className=" h-auto">
          <ul className="space-y-1 ">
            <li className="font-bold text-main">ACCOUNT</li>
            <li>Create Account</li>
            <li>Sign In</li>
            <li>Forgot Password</li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
      <div className="w-full   h-full py-5 flex flex-col items-center justify-center ">
        <div className="w-full h-[1px] bg-gray-700 "> </div>
      </div>
      <div className=" text-gray-500 font-medium text-xs sm:text-lg space-x-2 sm:space-x-5"> 
        <button>Templates,Inc.</button>
        <button>Style Guide</button>
        <button>Instructions</button>
        <button>Licensing</button>
        <button>Changelog</button>
      </div>
      <div>
        {/* <div className="bg-black h-96 w-full bg-cover bg-center p-24">
          <Image src="/https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=600 " height="100" width="100"/>
          <h1 className="text-6xl font-bold text-green-600">ABCDEF</h1>
          <h1 className="text-xl font-bold text-blue-600">abcdefg</h1>

        </div>
         */}
      </div>
    </div>
  );
};

export default Footer;
