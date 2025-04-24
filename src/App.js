import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import Events from "./Events";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Aboutus";
import Team from "./Team";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/About" element={<About />} />
        <Route path="/Team" element={<Team />} />
      </Routes>
    </Router>
  );
}

export default App;
