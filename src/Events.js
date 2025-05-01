import logo from "./logo.svg";
import "./App.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ImageDescription = ({ imageSrc, description, reverse }) => {
  return (
    <div className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} items-center my-8`}>
      <img src={imageSrc} alt="Descriptive" className="w-full md:w-1/2 rounded-lg shadow-lg" />
      <div className="w-full md:w-1/2 px-4 mt-4 md:mt-0 text-center md:text-left">
        <p className="text-lg text-gray-700">{description}</p>
      </div>
    </div>
  );
};


export default function Events() {
  const items = [
    {
      imageSrc: 'fallfest.jpeg',
      description: 'Fall Fest at Cornell is an annual event held in the fall semester that brings the Cornell community together to celebrate the season with food, games, music, and community engagement. Organized by various student organizations and university departments, Fall Fest typically takes place on the Arts Quad or another central location on campus.',
    },
    {
      imageSrc: 'motaq.jpg',
      description: 'Join us for a Cornell tradition! MOTAQ is an event series on Thursdays at the start of the fall semester and end of the spring semester. We are opening seating at 7:30pm, with the film starting at 8pm (earlier films we may need to wait until the sun goes down!). Bring your blankets, hoodies, and friends -- it sometimes gets cold out! MOTAQ is brought to you by Cornell University Class Councils, CU Tonight, and Campus Activities, in collaboration with Cornell Cinema.',
    },
    {
      imageSrc: 'carneliangala.JPG',
      description: 'The Cornell Carnelian Gala: A Night in Paris is a themed campus celebration hosted by Class Councils, set to take place on February 7th, 2025, from 7 PM to 9 PM in the Memorial Room of Willard Straight Hall. This elegant evening features mimes and caricature artists, a free photo booth, Parisian-themed food and drinks, and an exclusive sweatshirt giveaway. Attendees can also enjoy special activities like card games. While cocktail attire is recommended, it’s completely optional. Students are encouraged to RSVP on CampusGroups. The event is funded in part by the Student Assembly and CUTonight..',
    },
  ];

  return (
    <div>
      <Navbar/>
      <div className="flex items-center justify-center py-12">
        <h1 className="text-4xl font-extrabold text-red-700 drop-shadow-lg">
          Events
        </h1>
      </div>
    <div className="container mx-auto px-4 py-12">
      {items.map((item, index) => (
        <ImageDescription
          key={index}
          imageSrc={item.imageSrc}
          description={item.description}
          reverse={index % 2 === 1}
        />
      ))}
    </div>
    <Footer />
    </div>
  );
}


