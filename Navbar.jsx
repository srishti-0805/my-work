import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-5 bg-blue-700 text-white shadow-md">
      <h1 className="text-2xl font-bold">IELTSPro</h1>
      <ul className="hidden md:flex gap-8 text-lg">
        <li className="hover:text-yellow-300 cursor-pointer">Home</li>
        <li className="hover:text-yellow-300 cursor-pointer">Courses</li>
        <li className="hover:text-yellow-300 cursor-pointer">About</li>
        <li className="hover:text-yellow-300 cursor-pointer">Contact</li>
      </ul>
      <button className="md:hidden bg-yellow-400 text-black px-3 py-1 rounded">
        Menu
      </button>
    </nav>
  );
};

export default Navbar;
