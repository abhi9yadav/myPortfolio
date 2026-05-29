// src/components/CustomCursor.jsx
import React from 'react';

const CustomCursor = ({ cursorX, cursorY, cursorColor, isHoveringInteractive }) => {
  return (
    <div
      className={`fixed z-[9999] rounded-full pointer-events-none transition-all duration-75 ease-out transform -translate-x-1/2 -translate-y-1/2
                  ${isHoveringInteractive ? 'w-16 h-16 opacity-70 blur-xl' : 'w-8 h-8 opacity-40 blur-lg'}`}
      style={{
        left: cursorX,
        top: cursorY,
        backgroundColor: cursorColor,
        boxShadow: isHoveringInteractive ? `0 0 20px ${cursorColor}, 0 0 40px ${cursorColor}` : 'none'
      }}
    ></div>
  );
};

export default CustomCursor;