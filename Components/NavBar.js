import {ActiveButton} from "../Components/Buttons";


function NavBar() {
  return (
    <div className="bg-black text-main bg-opacity-30 py-5 fixed left-0 right-0 top-0  ">
      <div className=" flex justify-between  items-center px-10 max-w-6xl mx-auto ">
        <div className="flex items-center justify-be  tween  flex-1 space-x-6 flex-wrap md:justify-start ">
          <h1 className="text-white font-bold font-inter text-xl">codebase</h1>
          <ul className="font-semibold space-x-10 md:flex hidden">
            <li className="  ">Support</li>
            <li className="  ">Product</li>
            <li className="  ">Company</li>
            <li className=" ">Account</li>
          </ul>
          <div className="inline-block p-4  cursor-pointer md:hidden  ">
            <div className="h-0.5 w-6 my-1 bg-main "> </div>
            <div className="h-0.5 w-6 my-1 bg-main"> </div>
            <div className="h-0.5 w-6 my-1 bg-main"> </div>
          </div>
        </div>
        <ActiveButton customClass=" py-1 px-4  hidden md:block" >
          Buy templates 
        </ActiveButton>
      </div>
    </div>
  );
}

export default NavBar;
