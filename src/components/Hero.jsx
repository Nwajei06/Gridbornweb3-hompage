import React from "react";
import capsuleImg from "../assets/caps.png"; // ✅ Import image

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>THE GRIDBORN ARE FORMING</h1>
        <p>
          A new era of digital identity is emerging. Mint your Gridborn and
          claim your place in the metaverse.
        </p>
        <div className="hero-buttons">
          <button className="primary-btn">Mint Your Identity</button>
          <button className="secondary-btn">Learn More</button>
        </div>
      </div>

      {/* Capsule Image */}
      <div className="hero-image">
        <img src={capsuleImg} alt="Gridborn Capsule" />
      </div>
    </section>
  );
}

export default Hero;
