import React, { useEffect } from 'react';

const ParallaxComponent = () => {
  useEffect(() => {
    const parallaxEl = document.querySelectorAll(".parallax");

    const handleMouseMove = (e) => {
      let xValue = e.clientX - window.innerWidth / 2;
      let yValue = e.clientY - window.innerHeight / 2;

      parallaxEl.forEach((el) => {
        const speedx = parseFloat(el.dataset.speedx) || 0;
        const speedy = parseFloat(el.dataset.speedy) || 0;

        el.style.transform = `translate(calc(-50% + ${-xValue * speedx}px), calc(-50% + ${yValue * speedy}px))`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <main className="w-screen h-screen overflow-hidden relative">
      <img
        src="src/WhatsApp Image 2024-07-21 at 22.59.10_40b447af.jpg"
        data-speedx="0.065"
        data-speedy="0.04"
        className="parallax absolute top-1/2 left-1/2 w-full h-auto min-w-[200vw] transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-500 ease-[cubic-bezier(0.2,0.49,0.32,0.99)] pointer-events-none"
        alt="Background Image"
      />
      <img
        src=".src/arock_landing_page_model-removebg.jpg"
        data-speedx="0.085"
        data-speedy="0.05"
        className="parallax absolute top-1/2 left-1/2 w-full h-auto transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-500 ease-[cubic-bezier(0.2,0.49,0.32,0.99)] pointer-events-none"
        alt="Foreground Image"
      />
    </main>
  );
};

export default ParallaxComponent;
