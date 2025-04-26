"use client";

import React from "react";
import { BiSolidStar } from "react-icons/bi";

export function Testimonial5() {
  return (
    <section id="relume" className="bg-white px-[5%] py-20 border-b-4 border-black">
      <div className="max-w-7xl mx-auto w-full">

        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-6xl font-bold uppercase mb-6 text-red-600">
            Friend Reviews
          </h2>
          <p className="max-w-2xl mx-auto text-base md:text-lg">
            Real insights from the people you trust — discover your next favorite movie.
          </p>
        </div>

        {/* Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            {
              quote: "BuddyTaste transformed my movie nights! I love seeing my friends' thoughts on films.",
              name: "Alice Johnson",
              role: "Film Critic, MovieMag",
              avatar: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=100&q=80",
            },
            {
              quote: "The personalized reviews from friends make all the difference! I always know who to watch with.",
              name: "Mark Smith",
              role: "Editor, FilmDaily",
              avatar: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&fit=crop&w=100&q=80",
            },
          ].map((testimonial, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center border-4 border-black p-6 bg-white hover:bg-yellow-200 transition"
            >
              {/* Stars */}
              <div className="flex justify-center mb-4 text-yellow-400">
                {Array(5).fill().map((_, i) => (
                  <BiSolidStar key={i} className="w-6 h-6" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-lg font-bold leading-relaxed mb-6">
                “{testimonial.quote}”
              </blockquote>

              {/* Avatar + Info */}
              <div className="flex flex-col items-center gap-2 border-t-2 border-black pt-4 w-full">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full border-2 border-black"
                />
                <h3 className="text-3xl font-extrabold text-blue-700">{testimonial.name}</h3>
                <p className="text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
