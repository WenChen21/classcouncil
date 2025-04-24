import React from "react";
import Navbar from "./Navbar";
function About() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="w-full h-[300px] overflow-hidden">
        <img
          className="w-full h-full object-cover opacity-50"
          src="Class Councils Banner (Newsletter).png"
          alt="classphoto"
        />
      </div>
      <div className="flex items-center justify-center py-12">
        <h1 className="text-4xl font-extrabold text-red-700 drop-shadow-lg">
          About Us
        </h1>
      </div>
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-10">
        <section>
          <h2 className="text-2xl font-bold text-red-800 mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            We are the Class Councils, a passionate group of students committed
            to creating inclusive, engaging, and memorable experiences for our
            classmates. Our mission is to foster school spirit, build community,
            and serve as a voice for our peers.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-red-800 mb-4">What We Do</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              Host events that bring students together and celebrate campus
              culture
            </li>
            <li>Support student-led initiatives and community causes</li>
            <li>
              Advocate for class-wide concerns and ideas to school leadership
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-red-800 mb-4">
            Meet the Team
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our council is made up of dedicated and diverse students from across
            all years and majors. We believe in collaboration, creativity, and
            community.
          </p>
        </section>
      </div>
    </>
  );
}

export default About;
