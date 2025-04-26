import logo from "./logo.svg";
import "./App.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Home() {
  return (
    <div className="">
      <Navbar />
      <div className="">
        <img className="opacity-50" src="classphoto.png" alt="classphoto" />
      </div>
      <div class="text-center mt-24">
        <h2 class="text-4xl font-bold relative inline-block">
          Who We Are
          <span class="block h-1 w-16 bg-red-600 mx-auto mt-2"></span>
        </h2>
      </div>
      <div>
        <p className="text-center">We are....</p>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
