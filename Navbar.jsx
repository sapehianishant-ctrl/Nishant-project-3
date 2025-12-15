import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      
      
      <h2 className="logo">Health +</h2>

      
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li onClick={() => handleScroll('home')}>Home</li>
        <li onClick={() => handleScroll('services')}>Services</li>
        <li onClick={() => handleScroll('about')}>About</li>
        <li onClick={() => handleScroll('reviews')}>Reviews</li>
        <li onClick={() => handleScroll('doctors')}>Doctors</li>

        
        <button className="chat-btn mobile-chat">Live Chat</button>
      </ul>

      
      <button className="chat-btn desktop-chat">Live Chat</button>

    </nav>
  );
};

export default Navbar;
