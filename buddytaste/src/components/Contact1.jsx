"use client";

import React, { useState } from "react";
import { getData } from "../lambdaAPI";

export function Contact1() {
  const [formData, setFormData] = useState({
    movie: "",
    friend: "",
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const [friendSuggestions, setFriendSuggestions] = useState([]);
  const [movieSuggestions, setMovieSuggestions] = useState([]);

  // Sample data for suggestions
  const sampleFriends = [
    "ratgaming", "thatmemecrona","gwenlikesfilm", "timtamtitus", "elisavetkei", "cinemawithcathy", "justinlovescinema",
    "kevinofthewoods", "filmjunkiejules", "sofiescreens", "movieman_tom", "laurenslens",
    "reelchris", "popcornnights", "cinemadreamz", "aniyaflicks", "litlenslucy"
  ];
  
  const sampleMovies = [
    "Sonic the Hedgehog", "A Minecraft Movie", "Dead Poets Society", "Everything Everywhere All At Once",
    "Lady Bird", "The Social Network", "La La Land", "Whiplash", "Dune",
    "The Grand Budapest Hotel", "Spider-Man: Into the Spider-Verse", "Aftersun",
    "The Batman (2022)", "Barbie (2023)", "Oppenheimer", "Her", "Arrival",
    "Parasite", "Portrait of a Lady on Fire", "Moonlight"
  ];
  

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Autocomplete logic
    if (name === "friend") {
      const filtered = sampleFriends.filter(friend =>
        friend.toLowerCase().includes(value.toLowerCase())
      );
      setFriendSuggestions(filtered);
    }

    if (name === "movie") {
      const filtered = sampleMovies.filter(movie =>
        movie.toLowerCase().includes(value.toLowerCase())
      );
      setMovieSuggestions(filtered);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = await getData(formData.movie, formData.friend.toLowerCase());
      if (data) {
        console.log(data);
        setResult(data);
      } else {
        setResult({ notFound: true });
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setResult({ notFound: true });
    } finally {
      setLoading(false);
    }
  };

  const handleFriendSuggestionClick = (suggestion) => {
    setFormData((prev) => ({ ...prev, friend: suggestion }));
    setFriendSuggestions([]);
  };

  const handleMovieSuggestionClick = (suggestion) => {
    setFormData((prev) => ({ ...prev, movie: suggestion }));
    setMovieSuggestions([]);
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
          <div className="flex flex-col gap-2 relative">
            <label htmlFor="movie" className="text-sm font-bold">
              Select Movie
            </label>
            <input
              id="movie"
              name="movie"
              type="text"
              value={formData.movie}
              onChange={handleChange}
              placeholder="Enter a movie name..."
              required
              className="border-4 border-black p-3 font-mono text-sm bg-white focus:outline-none"
            />
            {/* Movie Suggestions */}
            {movieSuggestions.length > 0 && (
              <ul className="absolute top-full left-0 right-0 bg-white border-2 border-black z-10 text-black text-sm shadow-md animate-fadeIn">
                {movieSuggestions.map((suggestion, idx) => (
                  <li
                    key={idx}
                    onClick={() => handleMovieSuggestionClick(suggestion)}
                    className="p-2 hover:bg-black hover:text-white cursor-pointer transition-all"
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Friend Selector */}
          <div className="flex flex-col gap-2 relative">
            <label htmlFor="friend" className="text-sm font-bold">
              Friends Names
              <p className="text-xs">(Seperate with commas or spaces)</p>
            </label>
            <input
              id="friend"
              name="friend"
              type="text"
              value={formData.friend}
              onChange={handleChange}
              placeholder="Enter Letterboxd usernames..."
              required
              className="border-4 border-black p-3 font-mono text-sm bg-white focus:outline-none"
            />
            {/* Friend Suggestions */}
            {friendSuggestions.length > 0 && (
              <ul className="absolute top-full left-0 right-0 bg-white border-2 border-black z-10 text-black text-sm shadow-md animate-fadeIn">
                {friendSuggestions.map((suggestion, idx) => (
                  <li
                    key={idx}
                    onClick={() => handleFriendSuggestionClick(suggestion)}
                    className="p-2 hover:bg-black hover:text-white cursor-pointer transition-all"
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-8 py-3 border-2 border-black bg-white text-blue-600 font-bold text-sm hover:bg-blue-600 hover:text-white transition-all uppercase disabled:opacity-50"
              disabled={loading}
            >
              {loading ? "Searching..." : "Find Review"}
            </button>
          </div>
        </form>

        {/* Loading Spinner */}
        {loading && (
          <div className="flex justify-center mb-8">
            <div className="w-12 h-12 border-4 border-black border-dashed rounded-full animate-spin"></div>
          </div>
        )}

        {/* Result Display */}
        {result && !loading && (
          <div className="border-4 border-black p-6">
            {result.notFound ? (
              <div className="text-center">
                <p className="text-red-600 font-bold text-xl mb-4">
                  No review found for that friend and movie.
                </p>
                <p className="text-sm mb-6 text-gray-600">
                  Maybe check the spelling or try a different combination!
                </p>
              </div>
            ) : (
              result.users.map((user, idx) => (
                <div key={idx} className="text-center">
                  <h3 className="text-2xl font-bold mb-4">{user.name}</h3>
                  {user.watched ? (
                    <>
                      <p className="mb-2">Review: {user.review}</p>
                      <p className="mb-2">Rating: {user.rating}</p>
                    </>
                  ) : (
                    <p className="mb-2">User did not watch this movie.</p>
                  )}
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </section>
  );
}
