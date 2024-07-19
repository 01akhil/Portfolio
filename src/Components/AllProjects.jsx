import React, { useState, useEffect, useRef } from 'react';
import { div } from 'three/examples/jsm/nodes/Nodes.js';

function AllProjects() {
  const [angleY, setAngleY] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null); // State to track hovered item
  const [isPaused, setIsPaused] = useState(false); // State to track if rotation is paused

  const itemCount = 6; // Total number of items
  const itemWidth = 150; // Width of each item
  const itemHeight = 200; // Height of each item
  const radius = 200; // Radius of the carousel

  // Base colors with reduced opacity (alpha value set to 0.7)
  const colors = ['rgba(255, 87, 51, 0.7)', 'rgba(51, 255, 87, 0.7)', 'rgba(51, 87, 255, 0.7)', 'rgba(240, 255, 51, 0.7)', 'rgba(255, 51, 165, 0.7)', 'rgba(51, 255, 246, 0.7)'];
  // Different hover colors
  const hoverColors = ['#FF6F61', '#61FF6F', '#6F61FF', '#FFFF6F', '#FF6F9F', '#6FFFFF'];

  const rotatingDivRef = useRef(null);

  const handleMouseDown = (event) => {
    setStartX(event.clientX);
    setIsDragging(true);
    setIsPaused(true); // Pause auto-rotation on drag start
  };

  const handleMouseMove = (event) => {
    if (!isDragging) return;
    const deltaX = event.clientX - startX;
    setAngleY(prevAngleY => prevAngleY + deltaX * 0.5); // Reverse direction by subtracting deltaX
    setStartX(event.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setIsPaused(false); // Resume auto-rotation on drag end
  };

  const handleMouseEnter = () => {
    setIsPaused(true); // Pause auto-rotation on hover
  };

  const handleMouseLeave = () => {
    setIsPaused(false); // Resume auto-rotation on hover end
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setAngleY(prevAngleY => prevAngleY - 0.4); // Adjust speed and reverse direction by subtracting
      }
    }, 16); // Roughly 60fps

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div className='w-2/3 h-[100vh] bg-gradient-to-b from-gray-900 to-black py-40'>

<div
      className="flex items-center justify-center bg-[]  w-[45vw] h-[50vh] ml-10 "
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ touchAction: 'none' }} // Prevent default scrolling on touch devices
    >
      <div
        className="relative"
        style={{
          width: `${itemWidth * 2}px`, // Width of the carousel container
          height: `${itemHeight}px`, // Height of the carousel container
          perspective: '1000px', // Adds perspective to the carousel
        }}
      >
        <div
          ref={rotatingDivRef}
          className="absolute"
          style={{
            width: '100%',
            height: '100%',
            transformStyle: 'preserve-3d',
            transform: `rotateY(${angleY}deg)`,
            transition: 'transform 0.1s ease-out', // Smooth transition for manual drag
          }}
        >
          {Array.from({ length: itemCount }).map((_, index) => {
            const itemAngle = (360 / itemCount) * index;
            const transform = `rotateY(${itemAngle}deg) translateZ(${radius}px)`;
            const backgroundColor = hoveredIndex === index ? hoverColors[index] : colors[index]; // Change color on hover

            return (
              <div
                key={index}
                className="rounded-xl absolute flex items-center justify-center text-white text-3xl"
                style={{
                  width: `${itemWidth}px`, // Width of each item
                  height: `${itemHeight}px`, // Height of each item
                  backgroundColor, // Apply dynamic background color
                  transform,
                  backfaceVisibility: 'visible', // Hide the backface
                }}
                onMouseEnter={() => setHoveredIndex(index)} // Set hovered index on mouse enter
                onMouseLeave={() => setHoveredIndex(null)} // Reset hovered index on mouse leave
              >
                {index + 1}
              </div>
            );
          })}
        </div>
      </div>
    </div>

    </div>
  );
}

export default AllProjects;
