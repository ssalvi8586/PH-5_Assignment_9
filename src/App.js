import "./App.css";
import Home from "./Components/Home/Home";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./Components/Header/Header";
import Dashboard from "./Components/Dashboard/Dashboard";
import Invalid from "./Components/Invalid/Invalid";
import Reviews from "./Components/Reviews/Reviews";
import About from "./Components/About/About";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Invalid />} />
      </Routes>
    </div>
  );
}

export default App;
