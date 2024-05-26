import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-black p-4 flex items-center justify-between">
      
      <div className="flex items-center w-full h-full">
        <img src="logo.png" alt="Logo" className="h-16" />
      </div>

      
      <div>
        <button className="bg-neutral-950 border text-gray-300 px-4 py-2 rounded-full shadow-md">
          +
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
