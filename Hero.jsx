import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 py-16 bg-blue-50">
      <div className="md:w-1/2 space-y-5">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-700">
          Achieve Your Dream IELTS Score
        </h2>
        <p className="text-gray-600 text-lg">
          Get personalized learning, mock tests, and expert guidance to reach your desired band score.
        </p>
        <button className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition">
          Get Started
        </button>
      </div>
      <div className="md:w-1/2 mt-10 md:mt-0">
        <img
          src="https://images.unsplash.com/photo-1596495577886-d920f1fb7238"
          alt="IELTS Learning"
          className="rounded-2xl shadow-lg"
        />
      </div>
    </section>
  );
};

export default Hero;
