import logo from "./logo.svg";
import "./App.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

// ImageDescription component
const ImageDescription = ({ imageSrc, title, description, reverse }) => (
  <div className={`flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""} items-center my-12`}>
    <img
      src={imageSrc}
      alt={title}
      loading="lazy"
      className="w-full md:w-1/2 rounded-xl shadow-xl transform hover:scale-105 transition-transform duration-300"
    />
    <div className="w-full md:w-1/2 px-4 mt-4 md:mt-0 text-center md:text-left">
      <h2 className="text-2xl font-bold text-red-600 mb-4">{title}</h2>
      <p className="text-lg text-gray-700">{description}</p>
    </div>
  </div>
);

// Main Events component
export default function Events() {
  const items = [
    {
      title: "Fall Fest",
      imageSrc: "fallfest.jpeg",
      description:
        "Fall Fest at Cornell is an annual celebration featuring food, games, music, and community fun. Hosted on the Arts Quad, it's a great way to kick off the semester with friends and festivities.",
    },
    {
      title: "MOTAQ: Movie on the Arts Quad",
      imageSrc: "motaq.jpg",
      description:
        "A Cornell tradition! Enjoy free outdoor movies on the Arts Quad. Bring blankets, hoodies, and friends. Films start at sunset and are co-hosted by Class Councils, CU Tonight, and Cornell Cinema.",
    },
    {
      title: "Carnelian Gala: A Night in Paris",
      imageSrc: "carneliangala.JPG",
      description:
        "An elegant evening of Parisian-themed entertainment, food, and music. Held at Willard Straight Hall with photo booths, caricature artists, card games, and a sweatshirt giveaway. RSVP on CampusGroups!",
    },
  ];

  return (
    <div>
      <Navbar />
      
      {/* Page Header */}
      <div className="flex items-center justify-center py-12">
        <h1 className="text-4xl font-extrabold text-red-700 drop-shadow-lg">Events</h1>
      </div>

      {/* Intro paragraph */}
      <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto mb-8 px-4">
        Discover some of the most exciting student-led events happening throughout the year at Cornell. From festive gatherings to elegant galas, there's something for everyone!
      </p>

      {/* Event Cards */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          {items.map((item, index) => (
            <ImageDescription
              key={index}
              imageSrc={item.imageSrc}
              title={item.title}
              description={item.description}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
