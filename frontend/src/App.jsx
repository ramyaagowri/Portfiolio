import "./App.css";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Skills from "./components/Skills";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <Navbar />
      {/* <Home /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Testimonials />} />
      </Routes>
    </>
  );
}

export default App;
