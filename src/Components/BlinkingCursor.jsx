import React from 'react';

const BlinkingCursor = () => {
  const cursorStyle = {
    display: 'inline-block',
    width: '6px',
    height: '1em',
    backgroundColor: 'white',
    animation: 'blink 1s step-start infinite',
  };

  const blinkKeyframes = `
    @keyframes blink {
      50% { opacity: 0; }
    }
  `;

  return (
    <>
      <style>{blinkKeyframes}</style>
      <span>
        <span style={cursorStyle} />
      </span>
    </>
  );
};

export default BlinkingCursor;
