import logo from './logo.svg';
import './App.css';

function Home() {
  return (
    <div className="">
      <div className="fixed top-0 left-0 w-full bg-red-200 bg-opacity-90 backdrop-blur-lg shadow-md z-50">
        <div className="flex flex-row gap-x-10 justify-between bg-red-200">
          <img className="pl-5 contrast-125 brightness-90" src="crest.png" alt="Group Photo" width="100"></img>
          <div className="flex flex-row gap-x-10 items-center justify-center pr-10">
            <p className="text-red-600 font-bold relative cursor-pointer transition-colors duration-300 hover:text-red-800 after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-red-600 after:left-0 after:bottom-[-4px] after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">
              EVENTS
            </p>
            <p className="text-red-600 font-bold relative cursor-pointer transition-colors duration-300 hover:text-red-800 after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-red-600 after:left-0 after:bottom-[-4px] after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">
              TEAM
            </p>
            <p className="text-red-600 font-bold relative cursor-pointer transition-colors duration-300 hover:text-red-800 after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-red-600 after:left-0 after:bottom-[-4px] after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">
              ABOUT US
            </p>
            <p className="text-red-600 font-bold relative cursor-pointer transition-colors duration-300 hover:text-red-800 after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-red-600 after:left-0 after:bottom-[-4px] after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">
              APPLY
            </p>
          </div>
        </div>
      </div>
      <div className="">
          <img className="opacity-50" src="classphoto.png"></img>
      </div>
      <div class="text-center mt-24">
        <h2 class="text-4xl font-bold relative inline-block">
          Who We Are
          <span class="block h-1 w-16 bg-red-600 mx-auto mt-2"></span>
        </h2>
      </div>
      <div>
        <p className="text-center">
          We are....
        </p>
      </div>
    </div>
  );
}

export default Home;
