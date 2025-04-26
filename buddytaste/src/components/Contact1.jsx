"use client";

import React, { useState } from "react";

const mockDatabase = [
  {
    movie: "Inception",
    friend: "Alice",
    rating: 5,
    comment: "Mind-bending! Best movie ever.",
  },
  {
    movie: "Inception",
    friend: "Bob",
    rating: 4,
    comment: "Amazing visuals and concept.",
  },
  {
    movie: "Interstellar",
    friend: "Charlie",
    rating: 5,
    comment: "Emotional, beautiful, unforgettable.",
  },
  {
    movie: "Parasite",
    friend: "Dana",
    rating: 5,
    comment: "Thrilling and meaningful.",
  },
];

export function Contact1() {
  const [formData, setFormData] = useState({
    movie: "",
    friend: "",
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const foundReview = mockDatabase.find(
      (entry) =>
        entry.movie.toLowerCase() === formData.movie.toLowerCase() &&
        entry.friend.toLowerCase() === formData.friend.toLowerCase()
    );

    setResult(foundReview || { notFound: true });
  };

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 border-t-4 border-b-4 border-black bg-white text-black font-mono uppercase">
      <div className="container max-w-xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-red-600 text-sm mb-2 tracking-wider">Find a Review</p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4">
            Search Taste
          </h2>
          <p className="text-sm">Pick a movie + friend to see their comment</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-8 mb-12">
          {/* Movie Selector */}
          <div className="flex flex-col gap-2">
            <label htmlFor="movie" className="text-sm font-bold">
              Select Movie
            </label>
            <select
              id="movie"
              name="movie"
              value={formData.movie}
              onChange={handleChange}
              required
              className="border-4 border-black p-3 font-mono text-sm bg-white focus:outline-none"
            >
              <option value="">-- Choose a Movie --</option>
              <option value="Inception">Inception</option>
              <option value="Interstellar">Interstellar</option>
              <option value="Everything Everywhere All At Once">Everything Everywhere All At Once</option>
              <option value="Whiplash">Whiplash</option>
              <option value="Parasite">Parasite</option>
              <option value="The Grand Budapest Hotel">The Grand Budapest Hotel</option>
            </select>
          </div>

          {/* Friend Name */}
          <div className="flex flex-col gap-2">
            <label htmlFor="friend" className="text-sm font-bold">
              Friend's Name
            </label>
            <input
              id="friend"
              name="friend"
              type="text"
              value={formData.friend}
              onChange={handleChange}
              placeholder="Enter your friend's name..."
              required
              className="border-4 border-black p-3 font-mono text-sm bg-white focus:outline-none"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-8 py-3 border-2 border-black bg-white text-blue-600 font-bold text-sm hover:bg-blue-600 hover:text-white transition-all uppercase"
            >
              Find Review
            </button>
          </div>
        </form>

        {/* Result Display */}
        {result && (
          <div className="border-4 border-black p-6">
            {result.notFound ? (
              <p className="text-red-600 font-bold text-center">
                No review found for that friend and movie.
              </p>
            ) : (
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">{result.movie}</h3>
                <p className="mb-2">Friend: {result.friend}</p>
                <p className="mb-2">Rating: {result.rating} / 5</p>
                <p className="text-sm">{result.comment}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
