import React, { useRef, useEffect, useState } from 'react';
import MenuLeft from './MenuLeft';
import MenuRight from './MenuRight';
import AllProjects from '../AllProjects'; // Import the AllProjects component
import gsap from 'gsap';

function Menu(props) {
  const menuRef = useRef(null);
  const [showAllProjects, setShowAllProjects] = useState(false); // State to control the display of AllProjects

  useEffect(() => {
    if (props.menuOpen) {
      gsap.to(menuRef.current, {
        top: "0",
        duration: 1,
      });
    } else {
      gsap.to(menuRef.current, {
        top: "-100%",
        duration: 1.55,
      });
    }
  }, [props.menuOpen]);

  return (
    <div
      ref={menuRef}
      className='parent fixed top-[-100vh] h-screen w-full bg-gradient-to-b from-gray-900 to-black z-50 flex'
    >
      {showAllProjects ? (
        <>
        <AllProjects /> 
        <MenuRight
            menuOpen={props.menuOpen}
            setMenuOpen={props.setMenuOpen}
            setShowAllProjects={setShowAllProjects} // Pass state setter to MenuRight
          />
          </>
      ) : (
        <>
          <MenuLeft />
          <MenuRight
            menuOpen={props.menuOpen}
            setMenuOpen={props.setMenuOpen}
            setShowAllProjects={setShowAllProjects} // Pass state setter to MenuRight
          />
        </>
      )}
    </div>
  );
}

export default Menu;
