"use client";

import React, { useEffect, useState } from "react";
import { getMovieData } from '/src/supabaseClient.js';

export function Product10() {
  const [movies, setMovies] = useState([]);
  const [filter, setFilter] = useState('All'); // 🚀 New: filter state

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMovieData();
      if (data) {
        setMovies(data);
      }
    };

    fetchData();
  }, []);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  // Filtered movie list
  const filteredMovies = movies.filter((movie) => {
    if (filter === 'All') return true;
    return movie.Picked === filter;
  });

  return (
    <section className="px-[5%] py-20 bg-white text-black font-mono border-t-4 border-b-4 border-black">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <h2 className="text-5xl font-bold mb-6">
            What's your buddy been watching?
          </h2>

          {/* 🚀 Filter Dropdown */}
          <div className="mb-10">
            <select
              onChange={handleFilterChange}
              value={filter}
              className="border-4 border-black p-3 font-mono text-sm bg-white focus:outline-none cursor-pointer"
            >
              <option value="All">All Buddies</option>
              <option value="Alva">Alva</option>
              <option value="Maddy">Maddy</option>
              <option value="Connor">Connor</option>
            </select>
          </div>
        </div>

        {/* Movie Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredMovies.length > 0 ? (
            filteredMovies.map((movie) => (
              <div
                key={movie.id}
                className="flex flex-col border-4 border-black p-6 bg-white hover:bg-black hover:text-white transition-all"
              >
                {/* Image with margin */}
                <div className="mb-6 border-4 border-black p-2 bg-white">
                  <img
                    src={movie.Image}
                    alt={movie.Movie}
                    className="w-full h-[300px] object-cover"
                  />
                </div>

                {/* Title + Info */}
                <div className="flex flex-col gap-2 text-center mt-auto">
                  <h3 className="text-3xl font-bold">{movie.Movie} ({movie.Year})</h3>
                  <p className="text-sm">{movie.PrimaryGenre} / {movie.SecondaryGenre}</p>
                  <p className="text-sm">Date Watched: {movie.Date}</p>
                  <p>Picked by: {movie.Picked}</p>
                  <p className="text-xl font-bold">Average Rating: {movie.AverageRating}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-3 text-center text-gray-500">
              No movies found for {filter}.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
