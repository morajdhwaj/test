import Link from "next/link";
import Banner from "../Components/Banner";
import Banner2 from "../Components/Banner2";
import Banner3 from "../Components/Banner3";
import Banner5 from "../Components/Banner5";
import Banner4 from "../Components/icons/Banner4";
import Container7 from "../Components/Container7";
import NavBar from "../Components/NavBar";
import Studies from "../Components/Studies";
import Qiuck from "../Components/Qiuck";
import Footer from "../Components/Footer";

const index = () => {
  return (
    <div className="max-w-7xl  bg-[#1e252c] ">
      <NavBar/>
      <Banner/>
      <Banner2/>
      <Banner3/>
      <Banner4/>
      <Banner5/>
      <Container7/>
      <Studies/>
      <Qiuck/>
      <Footer/>
    </div>
  );
};

export default index;



  