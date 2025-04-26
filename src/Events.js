import logo from "./logo.svg";
import "./App.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

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
      description: 'This is the first image description.',
    },
    {
      imageSrc: 'motaq.jpg',
      description: 'This is the second image description.',
    },
    {
      imageSrc: 'carneliangala.JPG',
      description: 'This is the third image description.',
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
    </div>
  );
}


