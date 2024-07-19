import React from 'react';

const HoverLine = () => {
  return (
    <div className="relative flex items-center justify-center w-[4vw] group">
      <h1 className="text-black bg-white w-full flex items-center justify-center relative overflow-hidden">
        Email
        <span className="absolute left-0 bottom-0 w-[1vw] h-[4vh] bg-black transform -translate-x-14 transition-transform duration-500 group-hover:translate-x-14"></span>
      </h1>
    </div>
  );
};

export default HoverLine;
