import "./App.css";
import Home from "./Components/Home/Home";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
