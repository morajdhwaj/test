import React from "react";

const Footer = () => {
  return (
    <div className="py-10">
      <div className="w-full h-full flex pt-20 font-medium  text-gray-500 text-lg ">
        <div className="w-1/5 h-auto font-bold text-3xl text-white ">
          Codebase
        </div>
        <div className="w-1/5 h-auto">
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
        <div className="w-1/5 h-auto ">
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
        <div className="w-1/5 h-auto">
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
        <div className="w-1/5 h-auto">
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
      <div className="w-full   h-full py-10 flex flex-col items-center justify-center ">
        <div className="w-full h-[1px] bg-gray-700 "> </div>
      </div>
      <div className=" text-gray-500 font-medium text-lg space-x-5"> 
        <button>Templates,Inc.</button>
        <button>Style Guide</button>
        <button>Instructions</button>
        <button>Licensing</button>
        <button>Changelog</button>
      </div>
    </div>
  );
};

export default Footer;
