import React, { useState, useRef, useEffect } from "react";
import logo from "../assets/logo-img.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <nav className="navbar">
      {/* Left: Logo + brand */}
      <div className="logo">
        <img src={logo} alt="Gridborn Logo" className="logo-img" />
        <h1>GRIDBORN</h1>
      </div>

      {/* Right: Nav links + button (desktop only) */}
      <div className="navbar-right desktop-only">
        <ul className="nav-links">
          <li>About</li>
          <li>Features</li>
          <li>Roadmap</li>
          <li>Community</li>
        </ul>
        <button className="wallet-btn">Connect Wallet</button>
      </div>

      {/* Hamburger Menu */}
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Mobile Menu */}
      <ul ref={menuRef} className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        <li onClick={() => setMenuOpen(false)}>About</li>
        <li onClick={() => setMenuOpen(false)}>Features</li>
        <li onClick={() => setMenuOpen(false)}>Roadmap</li>
        <li onClick={() => setMenuOpen(false)}>Community</li>
        <li>
          <button className="wallet-btn" onClick={() => setMenuOpen(false)}>
            Connect Wallet
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
