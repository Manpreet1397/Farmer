import React from 'react';
import Features from './Features';
const FullScreenText = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-black">
      <div className="border-2 rounded-xl border-yellow-500 p-100 px-20 py-52 text-center">
        <p className="text-white text-5xl">
          Your Collection of neatly crafted Framer assets and tools,{' '}
          <span className="text-yellow-500">growing monthly</span>
        </p>
      </div>
       </div>
  );
};

export default FullScreenText;
