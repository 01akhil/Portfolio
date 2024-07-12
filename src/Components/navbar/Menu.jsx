import React from 'react';
import { Link } from 'react-router-dom';

function Menu(props) {
  const menuBarOpens = () => {
    props.setMenuOpen(true);
  };

  return (
    <Link to='/menu'>
      <div
        onClick={menuBarOpens}
        className='cursor-pointer font-[a4] uppercase opacity-80
        bg-gray-800 hover:bg-gray-900 text-white py-2 px-4 rounded-md
        transition duration-300 ease-in-out shadow-md hover:shadow-lg glow'
        style={{
          boxShadow: '0 0 1em 0.2em rgba(0, 0, 0, 0.3)',
          animation: 'blink 2.5s infinite',
        }}
      >
        Menu
      </div>
      <style>
        {`
          @keyframes blink {
            0%, 50%, 100% {
              opacity: 1;
            }
            25%, 75% {
              opacity: 0.5;
            }
          }
        `}
      </style>
    </Link>
  );
}

export default Menu;
