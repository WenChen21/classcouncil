import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Team() {
  const [activeTab, setActiveTab] = useState("Overview");

  const tabContent = {
    Overview: {
      image: "overview.jpg",
      description:
        "Cornell Class Councils is a student-run organization at Cornell University that focuses on fostering class identity, school spirit, and community engagement through various events and initiatives.",
    },
    2025: {
      image: "2025.jpg",
      description:
        "The Class of 2025 Council organizes events like Sophomore Formal and study breaks to enhance the second-year experience.",
    },
    2026: {
      image: "2026.jpg",
      description:
        "The Class of 2026 Council fosters community among juniors through career workshops, volunteer events, and social gatherings.",
    },
    2027: {
      image: "2027.jpg",
      description:
        "The Class of 2027 Council welcomes freshmen to campus with orientation activities, mentorship programs, and bonding events.",
    },
    2028: {
      image: "2028.jpg",
      description:
        "The newly elected Class of 2028 Council is excited to build spirit and traditions for the newest members of Cornell's community.",
    },
  };

  const tabOrder = ["Overview", "2025", "2026", "2027", "2028"];

  return (
    <div>
      <Navbar />
      <div className="bg-white min-h-screen">
        {/* Header */}
        <div className="flex items-center justify-center py-12">
          <h1 className="text-4xl font-extrabold text-red-700 drop-shadow-lg">
            Our Team
          </h1>
        </div>

        {/* Tabs */}
        <div className="flex justify-center space-x-2 sm:space-x-4 px-4 flex-wrap">
          {tabOrder.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              aria-pressed={activeTab === tab}
              className={`px-5 py-2 sm:px-6 sm:py-2.5 rounded-full font-medium transition-all duration-200 border ${
                activeTab === tab
                  ? "bg-red-600 text-white border-red-600 shadow-md"
                  : "bg-gray-100 text-gray-800 border-gray-300 hover:bg-gray-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex flex-col-reverse md:flex-row justify-center items-center mt-12 px-6 md:px-20">
          <div className="w-full md:w-1/2 text-center md:text-left max-w-2xl">
            <p className="text-gray-700 text-lg">{tabContent[activeTab].description}</p>
          </div>
          <img
            src={tabContent[activeTab].image}
            alt={`${activeTab} Team`}
            loading="lazy"
            className="w-full md:w-1/2 rounded-xl shadow-xl mb-6 md:mb-0 md:ml-10"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Team;
