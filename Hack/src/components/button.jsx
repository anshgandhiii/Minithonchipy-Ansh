import React from 'react';
import Profile from './img/profile.jpg';

function CircularButton() {
  return (
    <button className="relative inline-flex group">
      <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-full blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
      <a
        href="#"
        className="relative inline-flex items-center justify-center w-40 h-40 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-full border-4 border-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
        role="button"
      >
        <img
          src={Profile}
          alt="Profile"
          className="rounded-full w-full h-full object-cover"
        />
      </a>
    </button>
  );
}

export default CircularButton;
