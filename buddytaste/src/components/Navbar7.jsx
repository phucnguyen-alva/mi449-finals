import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "/src/assets/logo.png";

export function Navbar7() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full border-b-4 border-black bg-white px-6 py-4 font-bold uppercase text-sm tracking-wide">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo + Brand Name */}
        <Link to="/" className="logo-wrapper flex items-center gap-4 border-2 border-black px-3 py-2 hover:bg-black hover:text-white transition-all">
          {/* ⬆️ gap-4 here (was gap-2 before) */}
          <img src={logo} alt="BuddyTaste Logo" className="logo-image" />
          <span className="text-base md:text-lg">BuddyTaste</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6">
          <Link to="/" className="border-b-2 border-transparent hover:border-black">Home</Link>
          <Link to="/movies-showcase" className="border-b-2 border-transparent hover:border-black">Movies Showcase</Link>
          <Link to="/movie-details" className="border-b-2 border-transparent hover:border-black">Friend's Review</Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden border-2 border-black px-3 py-1"
        >
          {isOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 border-t-2 border-black pt-4">
          <Link to="/" className="border-b-2 border-black px-2 py-1">Home</Link>
          <Link to="/movies-showcase" className="border-b-2 border-black px-2 py-1">Movies Showcase</Link>
          <Link to="/movie-details" className="border-b-2 border-black px-2 py-1">Friend's Review</Link>
        </div>
      )}
    </nav>
  );
}
