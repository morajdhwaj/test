import { useRouter } from "next/router";
import NavBar from "../Components/NavBar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const {pathname} = useRouter()
  return (
    <div className=" font-inter  ">
      {pathname === "/blog" ? "" :<NavBar /> }
      
      <div className=" max-w-6xl mx-auto px-5 ">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
