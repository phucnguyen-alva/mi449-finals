"use client";

import React, { useState } from "react";
import { getData } from "../lambdaAPI";



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

    const fetchData = async () => {
          const data = await getData(formData.movie, formData.friend.toLowerCase());
          if (data) {
            console.log(data);
            setResult(data);
          }
          else{
            setResult({notFound: true });
          }
        };
    
      fetchData();
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
              <p>(Add the year it came out if there are movies with the same name)</p>
            </label>
           <input 
              id="movie"
              name="movie"
              type="text"
              onChange={handleChange}
              placeholder="Enter a movie name..."
              required
              className="border-4 border-black p-3 font-mono text-sm bg-white focus:outline-none">
           </input>
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

              result.users.map((user) => (
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">{user.name}</h3>
                  {
                    user.watched ? (
                      <>
                        <p className="mb-2">Review: {user.review}</p>
                        <p className="mb-2">Rating: {user.rating}</p>
                      </>
                    ) : (
                      <p className="mb-2">User did not watch movie</p>
                    )
                  }
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </section>
  );
}
