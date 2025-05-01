import Navbar from "./Navbar";
import React, { useState } from "react";
import Footer from "./Footer";

function Team() {
  
  const [activeTab, setActiveTab] = useState("Overview");

  const tabContent = {
    Overview: {
      image: "/images/overview.jpg", // replace with your real image paths
      description:
        "Cornell Class Councils is a student-run organization at Cornell University that focuses on fostering class identity, school spirit, and community engagement through various events and initiatives...",
    },
    2025: {
      image: "/images/2025.jpg",
      description:
        "The Class of 2025 Council organizes events like Sophomore Formal and study breaks to enhance the second-year experience...",
    },
    2026: {
      image: "/images/2026.jpg",
      description:
        "The Class of 2026 Council fosters community among juniors through career workshops, volunteer events, and social gatherings...",
    },
    2027: {
      image: "/images/2027.jpg",
      description:
        "The Class of 2027 Council welcomes freshmen to campus with orientation activities, mentorship programs, and bonding events...",
    },
    2028: {
      image: "/images/2028.jpg",
      description:
        "The newly elected Class of 2028 Council is excited to build spirit and traditions for the newest members of Cornell's community...",
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
      <div className="flex justify-center mt-6 space-x-4">
        {tabOrder.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded font-medium ${
              activeTab === tab ? "bg-red-500 text-white" : "bg-gray-400 text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row justify-center items-center mt-10 px-6 md:px-20">
        <img
          src={tabContent[activeTab].image}
          alt={`${activeTab} Team`}
          className="w-full md:w-1/2 rounded-lg shadow-lg mb-6 md:mb-0 md:mr-10"
        />
        <p className="text-center md:text-left text-gray-700 text-lg max-w-xl">
          {tabContent[activeTab].description}
        </p>
      </div>
    </div>
    <Footer />
    </div>
  );
}

export default Team;

