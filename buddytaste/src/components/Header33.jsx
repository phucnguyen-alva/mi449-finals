"use client";

import React from "react";
import { Link } from "react-router-dom";

export function Header33() {
  return (
    <section id="relume" className="relative px-[5%]">
      <div className="relative z-10 container max-w-lg">
        <div className="flex max-h-[60rem] min-h-svh items-center py-16 md:py-24 lg:py-28">
          <div className="text-center">
            <h1 className="mb-5 text-6xl font-bold text-text-alternative md:mb-6 md:text-9xl lg:text-10xl">
              Discover Movies Through Your Friends' Eyes
            </h1>
            <p className="text-text-alternative md:text-md">
              Dive into a world of social cinematic experiences with BuddyTaste.
            </p>

            {/* Only Buttons changed here */}
            <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
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

      {/* Keep your video background exactly the same */}
      <div className="absolute inset-0 z-0">
        <video
          className="absolute inset-0 aspect-video size-full object-cover"
          autoPlay={true}
          loop={true}
          muted={true}
        >
          <source
            src="https://d22po4pjz3o32e.cloudfront.net/placeholder-video.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
}
