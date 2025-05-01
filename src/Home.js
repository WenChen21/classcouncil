import logo from "./logo.svg";
import "./App.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { motion } from "framer-motion";

function Home() {
  return (
    <div className="">
      <Navbar />
      <div className="relative min-h-[70vh]">
          <img className="opacity-50" src="classphoto.png" alt="classphoto" />
          <motion.div
            initial={{ x: "-100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 70, delay: 0.3 }}
            className="absolute inset-0 flex items-start justify-center pt-24"
          >
            <div className="bg-black/40 backdrop-blur-md px-6 py-4 rounded-xl">
              <h1 className="text-white text-5xl font-extrabold drop-shadow-2xl">
                Cornell Class Councils
              </h1>
            </div>
          </motion.div>
      </div>
      <div class="text-center mt-24">
        <h2 class="text-4xl font-bold relative inline-block">
          Who We Are
          <span class="block h-1 w-16 bg-red-600 mx-auto mt-2"></span>
        </h2>
      </div>
      <div>
      <section className="px-6 py-10 max-w-4xl mx-auto text-center">
        <p className="text-lg">
          Cornell Class Councils is a student-run organization dedicated to fostering class unity, spirit, and engagement across all undergraduate years at Cornell University. Through organizing events, programs, and initiatives such as Senior Days, class apparel sales, and philanthropy campaigns, the Class Councils aim to enhance the student experience and promote a strong sense of community within each class year. Working closely with university administration and student organizations, Class Councils provide leadership opportunities while encouraging participation in Cornell traditions and campus life.
        </p>
      </section>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
