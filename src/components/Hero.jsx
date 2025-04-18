import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className="relative w-full h-[600px] bg-cover bg-center"
      style={{
        backgroundImage: `url('https://c4.wallpaperflare.com/wallpaper/939/519/633/movies-super-power-spider-man-hero-dark-background-wallpaper-preview.jpg')`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white px-4 md:px-8">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
          Explore the Best Movies <br /> of All Time
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Discover your next favorite movie from a wide selection of timeless
          classics and modern blockbusters.
        </p>
        <Link
          to="/movies"
          className="px-6 py-3 text-xl bg-red-600 hover:bg-red-700 text-white rounded-md transition-all duration-300"
        >
          Start Watching
        </Link>
      </div>
    </section>
  );
};

export default Hero;
