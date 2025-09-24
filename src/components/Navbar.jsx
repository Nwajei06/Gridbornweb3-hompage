import React, { useState } from "react";
import logo from "../assets/logo-img.png"; // ✅ Import image

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="Gridborn Logo" className="logo-img" />
        <h1>GRIDBORN</h1>
      </div>

      {/* Desktop Links */}
      <ul className="nav-links desktop-only">
        <li>About</li>
        <li>Features</li>
        <li>Roadmap</li>
        <li>Community</li>
      </ul>

      {/* Connect Wallet Button */}
      <button className="wallet-btn desktop-only">Connect Wallet</button>

      {/* Hamburger Menu */}
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Mobile Menu (slide-in) */}
      <ul className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        <li>About</li>
        <li>Features</li>
        <li>Roadmap</li>
        <li>Community</li>
        <li>
          <button className="wallet-btn">Connect Wallet</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
