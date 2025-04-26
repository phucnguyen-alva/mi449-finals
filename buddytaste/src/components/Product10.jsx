"use client";

import React, { useEffect, useState } from "react";
import { getMovieData } from '/src/supabaseClient.js';

export function Product10() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMovieData();
      if (data) {
        setMovies(data);
      }
    };

    fetchData();
  }, []);

  const sharedImage =
    "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=500&h=600&q=80";

  return (
    <section className="px-[5%] py-20 bg-white text-black font-mono border-t-4 border-b-4 border-black">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <h2 className="text-5xl font-bold mb-8">
            What's your buddy been watching?
          </h2>
        </div>

        {/* Brutalist Movie Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {
            movies
          .map((movie) => (
            <div
              key={movie.id}
              className="flex flex-col border-4 border-black p-6 bg-white hover:bg-black hover:text-white transition-all"
            >
              {/* Image with margin */}
              <div className="mb-6 border-4 border-black p-2 bg-white">
                <img
                  src={sharedImage}
                  alt={movie.Movie}
                  className="w-full h-[300px] object-cover"
                />
              </div>

              {/* Title + Genre */}
              <div className="flex flex-col gap-2 text-center mt-auto">
                <h3 className="text-3xl font-bold">{movie.Movie} ({movie.Year})</h3>
                <p className="text-sm">{movie.PrimaryGenre} / {movie.SecondaryGenre}</p>
                <p className="text-sm">Date Watched: {movie.Date}</p>
                <p>Picked by: {movie.Picked}</p>
                <p className="text-xl font-bold">Average Rating: {movie.AverageRating}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
