import "./App.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { motion } from "framer-motion";

function Home() {
  return (
    <div className="">
      <Navbar />

      {/* Hero Section */}
      <div className="relative min-h-[80vh] overflow-hidden">
        <img
          className="w-full h-full object-cover opacity-60"
          src="classphoto.png"
          alt="Cornell Class Photo"
        />
        <motion.div
          initial={{ x: "-100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 70, delay: 0.3 }}
          className="absolute inset-0 flex items-center justify-center px-4 text-center"
        >
          <div className="bg-black/50 backdrop-blur-md px-8 py-6 rounded-2xl shadow-xl">
            <h1 className="text-white text-4xl md:text-5xl font-extrabold drop-shadow-lg">
              Cornell Class Councils
            </h1>
            <p className="text-white text-lg mt-4">
              Fostering class unity, tradition, and leadership
            </p>
            <Link
              to="/about"
              className="mt-6 inline-block bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition"
            >
              Learn More
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Who We Are Section */}
      <section className="text-center mt-24 px-4">
        <h2 className="text-4xl font-bold relative inline-block text-red-700">
          Who We Are
          <span className="block h-1 w-16 bg-red-600 mx-auto mt-2"></span>
        </h2>
        <div className="max-w-4xl mx-auto mt-8 text-gray-700 text-lg leading-relaxed">
          <p>
            Cornell Class Councils is a student-run organization dedicated to
            fostering class unity, spirit, and engagement across all
            undergraduate years. We host events like Senior Days, class
            apparel sales, philanthropy campaigns, and more.
          </p>
          <p className="mt-4">
            Working closely with university administration and student
            organizations, we offer leadership opportunities and strengthen
            class identity throughout the Cornell experience.
          </p>
        </div>
      </section>

      {/* CTA Buttons or Quick Links (Optional) */}
      <div className="flex justify-center gap-6 mt-16 mb-20">
        <Link
          to="/events"
          className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition shadow"
        >
          See Our Events
        </Link>
        <Link
          to="/team"
          className="bg-gray-100 text-red-700 border border-red-600 px-6 py-3 rounded-lg hover:bg-gray-200 transition shadow"
        >
          Meet the Team
        </Link>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
