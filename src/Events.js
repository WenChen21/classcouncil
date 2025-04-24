import logo from "./logo.svg";
import "./App.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Events() {
  return (
    <div className="">
      <Navbar />
      <div class="text-center mt-48">
        <h2 class="text-4xl font-bold relative inline-block">
          Who We Are
          <span class="block h-1 w-16 bg-red-600 mx-auto mt-2"></span>
        </h2>
      </div>
    </div>
  );
}

export default Events;
