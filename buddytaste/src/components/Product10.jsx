"use client";

import React from "react";

export function Product10() {
  const sharedImage =
    "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=500&h=600&q=80";

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-white text-black font-mono uppercase border-t-4 border-b-4 border-black">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-xs tracking-widest border-2 border-black inline-block px-4 py-1 mb-6">
            What's your buddy been watching?
          </h2>
          <p className="max-w-2xl mx-auto text-sm">
            Explore a curated collection of cinematic experiences recommended by your friends.
          </p>
        </div>

        {/* Brutalist Movie Grid */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Inception", genre: "Sci-Fi / Thriller" },
            { title: "Interstellar", genre: "Sci-Fi / Drama" },
            { title: "Everything Everywhere All At Once", genre: "Action / Comedy / Sci-Fi" },
            { title: "Whiplash", genre: "Drama / Music" },
            { title: "Parasite", genre: "Thriller / Drama" },
            { title: "The Grand Budapest Hotel", genre: "Comedy / Crime / Drama" },
          ].map((movie, idx) => (
            <div
              key={idx}
              className="flex flex-col border-4 border-black p-6 bg-white hover:bg-black hover:text-white transition-all"
            >
              {/* Image with margin */}
              <div className="mb-6 border-4 border-black p-2 bg-white">
                <img
                  src={sharedImage}
                  alt={movie.title}
                  className="w-full h-[400px] object-cover"
                />
              </div>

              {/* Title + Genre */}
              <div className="flex flex-col gap-2 text-center">
                <h3 className="text-xl font-bold">{movie.title}</h3>
                <p className="text-sm">{movie.genre}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
