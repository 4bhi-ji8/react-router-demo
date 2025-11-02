import React from "react";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col items-center  min-h-screen bg-slate-50 pb-10 pt-24">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
        About this App
      </h2>
      <p className="text-gray-700 text-lg max-w-2xl mb-6">
        This React Router Demo shows how to navigate
      </p>
      <button onClick={() => navigate("/")} className="bg-white px-6 py-3 rounded-lg font-semibold transition text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white">
        Back to Home
      </button>
    </div>
  );
}

export default About;
