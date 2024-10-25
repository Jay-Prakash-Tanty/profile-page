"use client";
import React, { useState } from 'react';
import './navbar.css'; // Import the CSS file

const Navbar: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>('home');

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <nav className="navbar">
      <div className="container">
        {['home', 'members', 'projects', 'achievements'].map(link => (
          <a
            key={link}
            href={link === 'home' ? '/' : '#'}
            className={`link ${activeLink === link ? 'activeLink' : ''}`}
            onClick={() => handleLinkClick(link)}
          >
            {link.charAt(0).toUpperCase() + link.slice(1)}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
