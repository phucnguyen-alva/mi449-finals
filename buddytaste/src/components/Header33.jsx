"use client";

import React from "react";
import { Link } from "react-router-dom";

export function Header33() {
  return (
    <section id="relume" className="relative px-[5%]">
      <div className="relative z-10 container max-w-lg">
        <div className="flex max-h-[60rem] min-h-svh items-center pt-32 pb-16 md:pt-48 md:pb-24 lg:pt-56 lg:pb-28">
          {/* FLEX COLUMN TO STACK TEXT + BUTTONS */}
          <div className="flex flex-col items-center text-center">
            <h1 className="mb-6 text-6xl font-bold text-white drop-shadow-lg md:mb-10 md:text-9xl lg:text-10xl">
              Discover Movies Through Your Friends' Eyes
            </h1>
            <p className="text-white/90 md:text-md drop-shadow mb-6">
              Dive into a world of social cinematic experiences with BuddyTaste.
            </p>
            <div className="flex items-center justify-center gap-x-4">
              <Link to="/movie-details">
                <button className="px-6 py-3 border-4 border-black bg-white text-black font-bold uppercase text-sm hover:bg-black hover:text-white transition-all">
                  Explore Friend's Review
                </button>
              </Link>
              <Link to="/movies-showcase">
                <button className="px-6 py-3 border-4 border-black bg-white text-black font-bold uppercase text-sm hover:bg-black hover:text-white transition-all">
                  Movies Showcase
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Video background and overlay */}
      <div className="absolute inset-0 z-0">
        <video
          className="absolute inset-0 aspect-video size-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src="/src/assets/videointro.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
}
