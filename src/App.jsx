import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Roadmap from "./components/Roadmap";
import Footer from "./components/Footer";
import "./components/style.css";



function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Roadmap />
      </main>
      <Footer />
    </div>
  );
}

export default App;
